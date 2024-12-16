import express, { RequestHandler } from 'express';
import { TypeParser, TypeParserFactory } from './types/express.types';

/**
 * Middleware que define la forma para procesar los datos enviados en el cuerpo de una petición HTTP con Express.
 * 
 * @function
 * @name ExpressBodyParser
 * @see {@link https://expressjs.com/en/api.html#express|**Documentación Parser Express**}
 * @param typeParser - Tipo de parseo de cuerpo en una petición HTTP.
 * @returns Parseo de Datos
 */
export const ExpressBodyParser = ( typeParser: TypeParser ): RequestHandler => {

    /**
     * Manejador de tipos de parseo en cuerpos de petición HTTP.
     */
    const paserHandler: Record<string, TypeParserFactory> = {
        'json': () => express.json(),
        'url-encode': () => express.urlencoded({ extended: true }),
    }

    return paserHandler[`${typeParser}`]();

}