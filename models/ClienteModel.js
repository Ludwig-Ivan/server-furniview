import db from "../database/db.js";
import { DataTypes } from "sequelize";

const ClienteModel = db.define(
  "clientes",
  {
    usuario: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    nombre: {
      type: DataTypes.STRING,
      defaultValue: "nombre completo",
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    correo: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    cp: {
      type: DataTypes.STRING,
      defaultValue: "codigo postal",
    },
    pais: {
      type: DataTypes.STRING,
      defaultValue: "pais",
    },
    direccion: {
      type: DataTypes.STRING,
      defaultValue: "direccion",
    },
    edad: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    telefono: {
      type: DataTypes.STRING,
      defaultValue: "telefono",
    },
  },
  {
    createdAt: false,
    updatedAt: false,
  }
);

export default ClienteModel;
