import { Router } from 'express';

import { repositoryControllers } from './controllers/repository';
import { addProductRules } from './rules/add.product.rule';

/**
 * Enrutador que coordina los servicios de **Productos**.
 * 
 * @function
 * @name ProductRouter
 * @returns Enrutador
*/
export const ProductRouter = (): Router => {

    /**
     * Instancia de enrutador.
    */
    const productRouter: Router = Router();

    /**
     * Centralización de rutas del enrutador **Productos**.
    */
    const paths = {
        add_product: '/product'
    };

    /**
     * * Servicio que registra un nuevo producto.
     * 
     * @function
     * @name GET/product
     * @path {GET} /product
     * @memberof productRouter
    */
    productRouter.post(
        paths.add_product,
        addProductRules,
        repositoryControllers('add_product')
    );

    return productRouter;

}