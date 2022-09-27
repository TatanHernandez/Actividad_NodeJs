import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";

export class Venta extends Model {
  public fechaVenta!: string;  //alt+shift(mantenido)
  public subtotalVenta!: number;
  public imouestosVenta!: number;
  public descuentosVenta!: number;
  public totalVenta!: number;
  public createdAtVenta!: Date;
  public updatedAtVenta!: Date;

}

export interface VentaI {
   fechaVenta: string;
 subtotalVenta: number;
 imouestosVenta: number;
 descuentosVenta: number;
 totalVenta: number;
 /*createdAtVenta: Date;
updatedAtVenta: Date;
*/
}

Venta.init(
  {
    fechaVenta: {
      type: DataTypes.STRING,
      allowNull: false
    },
    subtotalVenta: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    impuestosVenta: {
      type: DataTypes.FLOAT,
      allowNull: false,
      unique: true
    },
    descuentosVenta: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    totalVenta: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    /*createdAtVenta: {
      type: DataTypes.DATE,
      allowNull: false
    },

   updatedAtVenta: {
      type: DataTypes.DATE,
      allowNull: false
    }*/
  },
  {
    tableName: "ventas",
    sequelize: database,
    timestamps: true
  }
);
