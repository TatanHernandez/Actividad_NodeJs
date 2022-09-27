import {  Request, Response } from 'express';
import { where } from 'sequelize/types';

import { Tipoproducto, TipoproductoI } from '../models/Tipoproducto';

export class TipoproductoController {


    public async test(req: Request, res:Response){
        try {
            res.send('hola, metodo test para Tipo producto')
        } catch (error) {

        }
    }

    public async getAllTipoproducto(req: Request, res:Response){
        try {
            const tipoproducto: TipoproductoI[] = await  Tipoproducto.findAll(
                {
                    where: {activo: true}
                }
            ) // select * from ventas;
            res.status(200).json({tipoproducto})
        } catch (error) {

        }
    }
}
