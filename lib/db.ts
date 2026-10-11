import { Pool } from "pg";
import { menuItems as seedItems } from "./data";
import type { MenuCategory, MenuItem } from "./types";

/**
 * PostgreSQL access for the editable menu.
 * Connection comes from DATABASE_URL (see .env.example).
 */

const globalForPg = globalThis as unknown as {
  topRisePool?: Pool;
  topRiseReady?: Promise<void>;
};

export function getPool(): Pool {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not set");
  }
  if (!globalForPg.topRisePool) {
    globalForPg.topRisePool = new Pool({
      connectionString: process.env.DATABASE_URL,
      max: 5,
      connectionTimeoutMillis: 5000,
      ssl: process.env.DATABASE_SSL === "true" ? { rejectUnauthorized: false } : undefined,
    });
  }
  return globalForPg.topRisePool;
}

/** Creates the table on first use and seeds it from lib/data.ts when empty. */
export function ensureSchema(): Promise<void> {
  if (!globalForPg.topRiseReady) {
    globalForPg.topRiseReady = (async () => {
      const pool = getPool();
      await pool.query(`
        CREATE TABLE IF NOT EXISTS menu_items (
          id            SERIAL PRIMARY KEY,
          name          TEXT NOT NULL,
          description   TEXT NOT NULL DEFAULT '',
          price         INTEGER NOT NULL CHECK (price >= 0),
          category      TEXT NOT NULL CHECK (category IN ('starters', 'mains', 'desserts', 'drinks')),
          image         TEXT,
          is_vegetarian BOOLEAN NOT NULL DEFAULT FALSE,
          spice_level   TEXT CHECK (spice_level IN ('mild', 'medium', 'hot')),
          is_available  BOOLEAN NOT NULL DEFAULT TRUE,
          sort_order    INTEGER NOT NULL DEFAULT 0,
          created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
          updated_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
        );
        CREATE INDEX IF NOT EXISTS menu_items_category_idx ON menu_items (category, sort_order, id);
      `);

      const { rows } = await pool.query<{ count: string }>("SELECT COUNT(*)::text AS count FROM menu_items");
      if (rows[0].count === "0") {
        const client = await pool.connect();
        try {
          await client.query("BEGIN");
          for (let index = 0; index < seedItems.length; index++) {
            const item = seedItems[index];
            await client.query(
              `INSERT INTO menu_items (name, description, price, category, image, is_vegetarian, spice_level, sort_order)
               VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
              [
                item.name,
                item.description,
                item.price,
                item.category,
                item.image ?? null,
                item.isVegetarian ?? false,
                item.spiceLevel ?? null,
                index,
              ]
            );
          }
          await client.query("COMMIT");
        } catch (error) {
          await client.query("ROLLBACK");
          throw error;
        } finally {
          client.release();
        }
      }
    })().catch((error) => {
      // Let the next request retry instead of caching a failed start-up.
      globalForPg.topRiseReady = undefined;
      throw error;
    });
  }
  return globalForPg.topRiseReady;
}

type MenuRow = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  image: string | null;
  is_vegetarian: boolean;
  spice_level: "mild" | "medium" | "hot" | null;
  is_available: boolean;
  sort_order: number;
};

function toMenuItem(row: MenuRow): MenuItem {
  return {
    id: String(row.id),
    name: row.name,
    description: row.description,
    price: row.price,
    category: row.category,
    image: row.image ?? undefined,
    isVegetarian: row.is_vegetarian,
    spiceLevel: row.spice_level ?? undefined,
    isAvailable: row.is_available,
    sortOrder: row.sort_order,
  };
}

const COLUMNS =
  "id, name, description, price, category, image, is_vegetarian, spice_level, is_available, sort_order";

export type MenuInput = {
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  image: string | null;
  isVegetarian: boolean;
  spiceLevel: "mild" | "medium" | "hot" | null;
  isAvailable: boolean;
  sortOrder: number;
};

export async function listMenu(options: { includeUnavailable?: boolean } = {}): Promise<MenuItem[]> {
  await ensureSchema();
  const where = options.includeUnavailable ? "" : "WHERE is_available";
  const { rows } = await getPool().query<MenuRow>(
    `SELECT ${COLUMNS} FROM menu_items ${where} ORDER BY sort_order, id`
  );
  return rows.map(toMenuItem);
}

export async function createMenuItem(input: MenuInput): Promise<MenuItem> {
  await ensureSchema();
  const { rows } = await getPool().query<MenuRow>(
    `INSERT INTO menu_items (name, description, price, category, image, is_vegetarian, spice_level, is_available, sort_order)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
     RETURNING ${COLUMNS}`,
    [
      input.name,
      input.description,
      input.price,
      input.category,
      input.image,
      input.isVegetarian,
      input.spiceLevel,
      input.isAvailable,
      input.sortOrder,
    ]
  );
  return toMenuItem(rows[0]);
}

export async function updateMenuItem(id: number, input: MenuInput): Promise<MenuItem | null> {
  await ensureSchema();
  const { rows } = await getPool().query<MenuRow>(
    `UPDATE menu_items
        SET name = $2, description = $3, price = $4, category = $5, image = $6,
            is_vegetarian = $7, spice_level = $8, is_available = $9, sort_order = $10,
            updated_at = NOW()
      WHERE id = $1
      RETURNING ${COLUMNS}`,
    [
      id,
      input.name,
      input.description,
      input.price,
      input.category,
      input.image,
      input.isVegetarian,
      input.spiceLevel,
      input.isAvailable,
      input.sortOrder,
    ]
  );
  return rows[0] ? toMenuItem(rows[0]) : null;
}

export async function deleteMenuItem(id: number): Promise<boolean> {
  await ensureSchema();
  const result = await getPool().query("DELETE FROM menu_items WHERE id = $1", [id]);
  return (result.rowCount ?? 0) > 0;
}
