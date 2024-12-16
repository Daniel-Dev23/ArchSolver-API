import { NextFunction, Request, Response } from "express";

import { env } from '@env/envs.handler';
import { errorScheme } from '@utils/schemes/error.scheme';

import { Exception } from './exception.error';
// import { errorLogging } from '@helpers/logger/error.logging';

/**
 * Middleware que coordina el manejador de errores de la aplicación.
 * 
 * @function
 * @name ErrorHandler
 * @param req - Propiedades de solicitud HTTP.
 * @param res - Propiedades de respuesta HTTP.
 * @param next - Continuación de flujo.
*/
export const ErrorHandler = (error: any, req: Request, res: Response, next: NextFunction): void => {

    if ( env!.ENABLE_SHOW_ERROR === "YES" ) {
        console.log('❌ ERROR_HANDLER: ', {
            name: error.name,
            type: error.type,
            stack: error.stack,
            message: error.message,
            description: error.description,
        });
    }

    /**
     * Asignación del error capturado en el manejador.
     */
    let errorCaught: any = {};

    if ( error.name.includes('Sequelize') ) {
        errorCaught = DbError(error.message);
    } else if (error.name === 'SyntaxError' && error.type === 'entity.parse.failed') {
        errorCaught = JsonContentError(error.message)
    } else {
        if ( error.name in errorScheme ) {

            /**
             * Asignación del nombre de error.
             */
            const getErrorName: keyof IGlobalErrorScheme = error.name as keyof IGlobalErrorScheme;
    
            errorCaught = error.description === undefined
                ? errorScheme[getErrorName]()
                : errorScheme[getErrorName](error.description);
                
        } else {
            errorCaught = ServerError(error);

            //* --- Registro de error ---
            // errorLogging(error);
        }
    }

    res.status(errorCaught.status_code);
    res.json(errorCaught);
    res.end();

}

/**
 * Error personalizado que controla las excepciones relacionadas a base de datos.
 * 
 * @function
 * @name DbError
 * @param error - Descripción del error.
 * @returns Esquema de error
 */
export const DbError = ( error: string ) => errorScheme.DB_CONFLICT(error);

/**
 * Error personalizado que controla las excepciones relacionadas a base de datos.
 * 
 * @function
 * @name NotFound
 * @param req - Propiedades de solicitud HTTP.
 * @param res - Propiedades de respuesta HTTP.
 * @param next - Continuación de flujo.
 * 
 * @returns Esquema de error
*/
export const NotFound = (req: Request, res: Response, next: NextFunction) => {
    return next(new Exception('SERVICE_NOT_FOUND', req.url));
};

/**
 * Error personalizado que controla las excepciones relacionadas a un JSON no válido.
 * 
 * @function
 * @name JsonContentError
 * @param error - Descripción del error.
 * @returns Esquema de error
*/
export const JsonContentError = ( error: string ) => errorScheme.INVALID_JSON_BODY(error);

/**
 * Error personalizado que controla las excepciones relacionadas a servidor.
 * 
 * @function
 * @name ServerError
 * @param error - Stack del error generado.
 * @returns Esquema de error
 */
export const ServerError = ( error: any ) => errorScheme.SERVER_ERROR(error);