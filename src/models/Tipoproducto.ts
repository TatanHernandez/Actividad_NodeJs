import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";

export class Tipoproducto extends Model {
  public nombre!: string;  //alt+shift(mantenido)
  

}

export interface TipoproductoI {
   nombre: string;

 /*createdAtVenta: Date;
updatedAtVenta: Date;
*/
}

Tipoproducto.init(
  {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
  },
  {
    tableName: "tipoproducto",
    sequelize: database,
    timestamps: true
  }
);
