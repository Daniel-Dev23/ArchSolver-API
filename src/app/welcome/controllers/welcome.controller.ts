import { Request, Response, NextFunction } from 'express';

import { env } from '@env/envs.handler';
import { statusCode } from '@utils/status_code/status.code.handler';

/**
 * Controlador que coordina la prueba de conexión al servidor **App**.
 * 
 * @function
 * @name WelcomeController
 * @param req - Propiedades de solicitud HTTP.
 * @param res - Propiedades de respuesta HTTP.
 * @param next - Continuación de flujo.
 * 
 * @returns {Promise<void>} Promesa que resuelve la prueba de conexión al servidor **App**.
*/
export const WelcomeController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    /**
     * Asignación de nombre de producto o marca.
     */
    const BRAND: string = env!.BRAND;

    res.status(statusCode.OK);
    res.json({
        message: `Welcome to ${BRAND}! :D`,
        server: 'app'
    });
    res.end();

}