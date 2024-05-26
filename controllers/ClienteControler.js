import ClienteModel from "../models/ClienteModel.js";
import { Op } from "sequelize";

//Agregar nuevo cliente
export const createCliente = async (req, res) => {
  try {
    await ClienteModel.create(req.body);
    res.json({ message: "Cliente creado con exito" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Obtener un cliente
export const getCliente = async (req, res) => {
  try {
    const cliente = await ClienteModel.findOne({
      where: { id: req.params.idcliente },
    });
    res.json(cliente);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Obtener cliente [usuario-correo, contrasena] (ingresar)
export const getIngCliente = async (req, res) => {
  try {
    const cliente = await ClienteModel.findOne({
      where: {
        [Op.or]: [{ usuario: req.params.uc }, { correo: req.params.uc }],
        password: req.params.password,
      },
    });
    res.json(cliente);
  } catch (error) {
    res.json({ message: error.message });
  }
};
