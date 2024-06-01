import express from "express";
import {
  createProducto,
  deleteProducto,
  getAllProductos,
  getMyProductos,
  getOneProducto,
  updateMyProductos,
  getCatProducto,
  getNameProducto,
} from "../controllers/ProductoControler.js";

const router = express.Router();

//* ruta para crear productos # [POST] http://192.168.1.60/productos
router.post("/", createProducto);

//* ruta para obtener todos los productos # [GET] http://192.168.1.60/productos
router.get("/", getAllProductos);

//* ruta para obtener todos mis productos # [GET] http://192.168.1.60/productos/cliente/idcliente
router.get("/cliente/:idcliente", getMyProductos);

//* ruta para modificar mis productos # [PUT] http://192.168.1.60/productos/idproducto
router.put("/:idproducto", updateMyProductos);

//* ruta para ver un producto especifico #  [GET] http://192.168.1.60/productos/idproducto
router.get("/:idproducto", getOneProducto);

//* ruta para borrar un producto # [DELETE] http://192.168.1.60/productos/idproducto
router.delete("/:idproducto", deleteProducto);

//* ruta para obtener los productos de una categoria # [GET] http://192.168.1.60:4000/productos/categoria/categoria
router.get("/categoria/:categoria", getCatProducto);

//* ruta para obtener los productos con el mismo nombre # [GET] http://192.168.1.60:4000/productos/producto/nombre
router.get("/producto/:nombre", getNameProducto);

export default router;
