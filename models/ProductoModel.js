import db from "../database/db.js";
import { DataTypes } from "sequelize";

const ProductoModel = db.define(
  "productos",
  {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING,
    },
    peso: {
      type: DataTypes.STRING,
    },
    precio: {
      type: DataTypes.DOUBLE,
    },
    descripcion: {
      type: DataTypes.STRING,
    },
    fechacreacion: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    imagen: {
      type: DataTypes.STRING,
    },
    categoria: {
      type: DataTypes.STRING,
    },
    sucursal: {
      type: DataTypes.STRING,
    },
    direccion: {
      type: DataTypes.STRING,
    },
    idcliente: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    createdAt: false,
    updatedAt: false,
  }
);

export default ProductoModel;
