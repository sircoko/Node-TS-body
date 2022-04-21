import { DataTypes } from "sequelize";
import db from "../../db/connections";

const User = db.define("users", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    unique:true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique:true
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },

  role: {
    type: DataTypes.STRING,
    defaultValue: "user",
    allowNull: false
  },
  
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
  
});

export default User;
