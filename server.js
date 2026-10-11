/**
 * Production entry point: Express in front of the Next.js server.
 * The site is no longer a static export, because /admin and the menu API
 * read and write PostgreSQL. Run `npm run build` first, then `npm start`.
 */
const express = require("express");
const next = require("next");

const port = parseInt(process.env.PORT || "3000", 10);
const hostname = process.env.HOSTNAME || "0.0.0.0";

const nextApp = next({ dev: false, hostname, port });
const handle = nextApp.getRequestHandler();

nextApp
  .prepare()
  .then(() => {
    const app = express();
    app.disable("x-powered-by");

    app.get("/health", (_req, res) => {
      res.status(200).json({
        status: "ok",
        service: "top-rise-restaurant",
        runtime: "nodejs-express-next",
      });
    });

    app.use((req, res) => handle(req, res));

    app.listen(port, hostname, () => {
      const host = hostname === "0.0.0.0" ? "localhost" : hostname;
      console.log(`> Top Rise Restaurant server running at http://${host}:${port}`);
    });
  })
  .catch((error) => {
    console.error("Server failed to start. Run `npm run build` first.", error);
    process.exit(1);
  });
