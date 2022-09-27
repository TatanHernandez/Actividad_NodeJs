import {  Request, Response } from 'express';
import { where } from 'sequelize/types';

import { Product_Ventas, Product_VentasI } from '../models/Product_Ventas';

export class Product_VentasController {


    public async test(req: Request, res:Response){
        try {
            res.send('hola, metodo test para Product_Ventas')
        } catch (error) {

        }
    }

    public async getAllProduct_Ventas(req: Request, res:Response){
        try {
            const product_ventas: Product_VentasI[] = await Product_Ventas.findAll(
                {
                    where: {activo: true}
                }
            ) // select * from product_ventas;
            res.status(200).json({product_ventas})
        } catch (error) {

        }
    }
}
