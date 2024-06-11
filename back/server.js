"use strict";

import "dotenv/config.js";
import express from "express";

const app = express();

const { PORT } = process.env;

app.get("/", (req, res) => {
  res.send("¡Primer endpoint del PFB!");
});

app.use((req, res) => {
  res.status(404).send("Ruta no encontrada");
});

app.listen(PORT, () =>
  console.log("Server running on http://localhost:" + PORT)
);
