import ProductoModel from "../models/ProductoModel.js";

//Agregar un nuevo producto
export const createProducto = async (req, res) => {
  try {
    await ProductoModel.create(req.body);
    res.json({ message: "Cliente agregado con exito" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Ver todos los productos
export const getAllProductos = async (req, res) => {
  try {
    const productos = await ProductoModel.findAll();
    res.json(productos);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Ver mis productos
export const getMyProductos = async (req, res) => {
  try {
    const productos = await ProductoModel.findAll({
      where: { idcliente: req.params.idcliente },
    });
    res.json(productos);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Modificar mis productos
export const updateMyProductos = async (req, res) => {
  try {
    await ProductoModel.update(req.body, {
      where: { id: req.params.idproducto },
    });
    res.json({ message: "Producto actualizado con exito" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Ver un producto
export const getOneProducto = async (req, res) => {
  try {
    const producto = await ProductoModel.findOne({
      where: { id: req.params.idproducto },
    });
    res.json(producto);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Eliminar un producto
export const deleteProducto = async (req, res) => {
  try {
    await ProductoModel.destroy({
      where: { id: req.params.idproducto },
    });
    res.json({ message: "Producto borrado con exito" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Obtener producto por categoria
export const getCatProducto = async (req, res) => {
  try {
    const productos = await ProductoModel.findAll({
      where: { categoria: req.params.categoria },
    });
    res.json(productos);
  } catch (error) {
    res.json({ message: error.message });
  }
};
