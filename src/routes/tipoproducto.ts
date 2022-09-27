import { Request, Response, Application, Router } from "express";

import { TipoproductoController } from '../controllers/tipoproducto.controller';

export class TipoproductoRoutes {
    public tipoproductoController: TipoproductoController =  new TipoproductoController();

    public routes(app: Application): void {
        app.route("/tipoproducto/test").get(this.tipoproductoController.test)
        app.route("/tipoproducto").get(this.tipoproductoController.getAllTipoproducto)
    }
}
