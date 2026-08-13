import express from "express";
import path from "path";

const app = express();
const PORT = 3000;

// Serve the static files from the React app
const distPath = path.join(process.cwd(), 'dist');
app.use(express.static(distPath));

// Handle React routing, return all requests to React app
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
