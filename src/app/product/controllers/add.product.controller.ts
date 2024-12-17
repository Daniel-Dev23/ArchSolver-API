import { Request, Response, NextFunction } from 'express';

import { statusCode } from '@utils/status_code/status.code.handler';

import { AddProductService } from '../services/add.product.service';

/**
 * Controlador que coordina el registro de un nuevo producto.
 * 
 * @function
 * @name AddProductController
 * @param req - Propiedades de solicitud HTTP.
 * @param res - Propiedades de respuesta HTTP.
 * @param next - Continuación de flujo.
 * 
 * @returns {Promise<void>} Promesa que resuelve el registro de un nuevo producto.
*/
export const AddProductController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const response = await AddProductService(req.body);

    res.status(statusCode.CREATED);
    res.json({
        success: true,
        status_code: statusCode.CREATED,
        id_product: response
    });
    res.end();

}