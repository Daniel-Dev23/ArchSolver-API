import { Request, Response, NextFunction } from 'express';

import { AddProductController } from './add.product.controller';

/**
  * Definición de tipos de controladores.
 */
type TypeControllers = 'add_product';

/**
  * Definición dinámica de los controladores en **Productos**.
 */
type TypeAppControllers = {
    [K in TypeControllers]: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}

/**
  * Centralización de controladores d**Productos**.
 */
const controllers: TypeAppControllers = {
    add_product: AddProductController
}

/**
  * Centralización de enritadores **Productos**.
  * 
  * @function
  * @name repositoryRouters
  * @param controller - Nombre de controlador a invocar.
  * @returns Controlador
 */
export const repositoryControllers = ( controller: TypeControllers ) => controllers[controller];