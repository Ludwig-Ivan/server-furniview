import express from "express";
import cors from "cors";
import db from "./database/db.js";
import ClienteRoutes from "./routes/ClienteRoutes.js";
import ProductoRoutes from "./routes/ProductoRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

//Esta parte hacemos uso de la ruta [/clientes] , y aparte se identifica la ruta siguiente
app.use("/clientes", ClienteRoutes);

//Esta parte hacemos uso de la ruta [/productos] , y aparte se identifica la ruta siguiente
app.use("/productos", ProductoRoutes);

app.get("/", (req, res) => {
  res.send("Error 404");
});

//probar conexion a servidor de db
try {
  await db.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

//ejecucion del servidor local([necesario] para hacer las consultas tanto locales como de la nube)
app.listen(4000, () => {
  console.log("server-local funcionando en http://localhost:4000");
});
