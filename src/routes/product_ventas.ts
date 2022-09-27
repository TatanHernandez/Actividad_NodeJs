import { Request, Response, Application, Router } from "express";

import { Product_VentasController } from '../controllers/product_ventas.controller';

export class Product_VentasRoutes {
    public product_ventasController: Product_VentasController =  new Product_VentasController();

    public routes(app: Application): void {
        app.route("/product_ventas/test").get(this.product_ventasController.test)
        app.route("/product_ventas").get(this.product_ventasController.getAllProduct_Ventas)
    }
}
