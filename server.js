const express = require("express");
const path = require("path");
const fs = require("fs");

const port = parseInt(process.env.PORT || "3000", 10);
const hostname = process.env.HOSTNAME || "0.0.0.0";
const isDev = process.env.NODE_ENV !== "production";
const outDir = path.join(__dirname, "out");

if (!fs.existsSync(outDir)) {
  console.error("Build output not found. Run: npm run build");
  process.exit(1);
}

const app = express();
app.disable("x-powered-by");

app.get("/health", (_req, res) => {
  res.status(200).json({
    status: "ok",
    service: "top-rise-restaurant",
    runtime: "nodejs-express",
  });
});

app.use(
  express.static(outDir, {
    maxAge: isDev ? 0 : "365d",
    etag: true,
    index: "index.html",
  })
);

// Fallback for Next.js static export routes (e.g. /about/ -> about/index.html)
app.get("*", (req, res) => {
  const cleanPath = req.path.replace(/\/$/, "") || "/";
  const htmlPath = path.join(outDir, cleanPath, "index.html");

  if (fs.existsSync(htmlPath)) {
    return res.sendFile(htmlPath);
  }

  const notFound = path.join(outDir, "404.html");
  if (fs.existsSync(notFound)) {
    return res.status(404).sendFile(notFound);
  }

  res.status(404).send("Not found");
});

app.listen(port, hostname, () => {
  const host = hostname === "0.0.0.0" ? "localhost" : hostname;
  console.log(`> Top Rise Restaurant Node.js server running at http://${host}:${port}`);
  console.log(`> Runtime: Express (no Next.js server)`);
  console.log(`> Mode: ${isDev ? "development" : "production"}`);
});
