import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";

export class Product_Ventas extends Model {
    public cantidad!: string;
    public precio!: string;
    public total!: string;
}

export interface Product_VentasI {
    cantidad: string;
    precio: string;
    total: string;
}

Product_Ventas.init(
    {
        cantidad: {
            type: DataTypes.STRING,
            allowNull: false
        },
        precio: {
            type: DataTypes.STRING,
            allowNull: false
        },
        total: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
    },
    {
        tableName: "product_ventas",
        sequelize: database,
        timestamps: true
    }
);
