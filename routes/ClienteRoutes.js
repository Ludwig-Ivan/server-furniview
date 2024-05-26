import express from "express";
import {
  createCliente,
  getCliente,
  getIngCliente,
} from "../controllers/ClienteControler.js";

const router = express.Router();

//ruta para crear clientes # [POST] http://192.168.1.60/clientes
router.post("/", createCliente);

//ruta para obtener cliente [id] # [GET] http://192.168.1.60/clientes/idcliente
router.get("/:idcliente", getCliente);

//ruta para obtener cliente [usuario-correo, contrasena] (ingresar) # [GET] http://192.168.1.60/clientes/uc/password
router.get("/:uc/:password", getIngCliente);

export default router;
