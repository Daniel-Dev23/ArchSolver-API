import { Request, Response, NextFunction } from 'express';

import { statusCode } from '@utils/status_code/status.code.handler';

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

    //TODO: Validar que el nombre de producto exista

    res.status(statusCode.CREATED);
    res.json({
        message: '💙 Hello world...'
    });
    res.end();

}