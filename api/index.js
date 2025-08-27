const path = require("path");
const express = require("express");
const jsonServer = require("json-server");

const app = express();

// db.json está en la RAÍZ del repo, subimos un nivel desde /api
const dbPath = path.join(__dirname, "..", "db.json");

const router = jsonServer.router(dbPath);
const middlewares = jsonServer.defaults();

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(middlewares);

// POST /api/guardar — responde con tu esquema
app.post("/guardar", (req, res) => {
  const { guardar } = req.body || {};

  const resp = {
    id: 0,
    categoriaIncidenciaDescripcion: "string",
    incidenciaDescripcion: guardar?.descripcion ?? "string",
    latitud: guardar?.latitud ?? "string",
    longitud: guardar?.longitud ?? "string",
    codigo: "string",
    nombre: "string",
    domicilio: "string",
    descripcion: guardar?.descripcion ?? "string",
    estatus: "string",
    imagenes: Array.isArray(guardar?.imagenes) ? guardar.imagenes : ["string"],
    estado: "string",
    ciudad: "string",
    folioRemedy: "string",
    isNotGerency: true,
  };

  res.status(200).json(resp);
});

// Rutas GET auto de json-server: /api/sucursal, /api/incidentes, etc.
app.use(router);

// No app.listen en Vercel: exportar el app
module.exports = app;
