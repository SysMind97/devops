const express = require("express");
const os = require("os");

const app = express();
const PORT = process.env.PORT || 3000;
const ENV = process.env.APP_ENV || "development";

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Hello from DevOps App!",
    hostname: os.hostname(),
    environment: ENV,
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "healthy" });
});

app.get("/users", (req, res) => {
  res.json([
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ]);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} [${ENV}]`);
});
