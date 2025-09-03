// Basic Express API skeleton for LunarHost
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('../panel')); // Serve frontend

// POST /api/launch-server: Trigger GitHub Actions workflow (stub)
app.post('/api/launch-server', (req, res) => {
  // TODO: Dispatch GitHub Actions workflow with user input (server_name, version, software)
  res.json({ success: true, message: "Server launch requested." });
});

// GET /api/status: Return server status (stub)
app.get('/api/status', (req, res) => {
  res.json({ status: "starting" }); // TODO: Replace with real status
});

// GET /api/console: Return server logs (stub)
app.get('/api/console', (req, res) => {
  res.send("Server log output here.\n...");
});

// POST /api/upload: Handle file upload (stub)
app.post('/api/upload', (req, res) => {
  res.json({ success: true });
});

// GET /api/files: List files (stub)
app.get('/api/files', (req, res) => {
  res.json(["server.properties", "world.zip"]);
});

// GET /api/download: Download file (stub)
app.get('/api/download', (req, res) => {
  res.send("File content here.");
});

// Add more endpoints for start/stop/restart as needed

app.listen(port, () => {
  console.log(`LunarHost API listening at http://localhost:${port}`);
});
