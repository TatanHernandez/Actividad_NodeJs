import { Tipoproducto } from '../models/Tipoproducto';
import { ClienteRoutes } from './cliente';
import { ProductoRoutes } from './producto';
import { Product_VentasRoutes } from './product_ventas';
import { TipoproductoRoutes } from './tipoproducto';
import { VentaRoutes } from './venta';

export class Routes {
    public clienteRoutes: ClienteRoutes = new ClienteRoutes();
    public ventaRoutes: VentaRoutes = new VentaRoutes();
    public tipoproductoRutes: TipoproductoRoutes = new TipoproductoRoutes();
    public productoRoutes: ProductoRoutes = new ProductoRoutes();
    public product_ventasRoutes: Product_VentasRoutes = new Product_VentasRoutes();
}





