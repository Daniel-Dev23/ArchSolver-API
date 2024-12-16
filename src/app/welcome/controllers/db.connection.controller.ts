import { Request, Response, NextFunction } from 'express';

import { SequelizeConfig } from '@db/sequelize.config';
import { statusCode } from '@utils/status_code/status.code.handler';

/**
 * Controlador que coordina una prueba de conexión a base de datos.
 * 
 * @function
 * @name DbConnectionController
 * @param req - Propiedades de solicitud HTTP.
 * @param res - Propiedades de respuesta HTTP.
 * @param next - Continuación de flujo.
 * 
 * @returns {Promise<void>} Promesa que resuelve una prueba de conexión a base de datos.
*/
export const DbConnectionController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    /**
     * Asignación de instancia de conexión a base de datos.
     */
    const dbConnection = SequelizeConfig();

    //* Realizando prueba de conexión
    await dbConnection.authenticate();

    res.status(statusCode.OK);
    res.json({
        message: 'The database connection has been successfully configured'
    });
    res.end();

}