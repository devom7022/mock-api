const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

/**
 * POST /guardar
 * - Recibe body con { guardar: { ... } } (tu payload)
 * - Siempre responde con el esquema requerido
 * - Opcional: puedes mapear campos del body a la respuesta si lo deseas
 */
server.post("/guardar", (req, res) => {
  const { guardar } = req.body || {};

  // Opcional: mapeo básico desde "guardar" si viene presente
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

// Resto de rutas generadas por json-server
server.use(router);

server.listen(3000, () => {
  console.log("JSON Server is running");
});
