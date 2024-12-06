import express, { RequestHandler } from 'express';

type TypeParser = 'json' | 'url-encode';

/**
 * Middleware que define la forma para procesar los datos enviados en el cuerpo de una petición HTTP con Express.
 * 
 * @function
 * @name ExpressBodyParser
 * @see {@link https://expressjs.com/en/api.html#express|**Documentación Parser Express**}
 * @param typeParser - Tipo de parseo de cuerpo en una petición HTTP.
 * @returns {RequestHandler} Parseo de Datos
 */
export const ExpressBodyParser = ( typeParser: TypeParser ): RequestHandler => {

    /**
     * Repositorio que centraliza los tipos de parseo de cuerpo en una petición HTTP.
     */
    const parserRepository = {
        'json': () => express.json(),
        'url-encode': () => express.urlencoded({ extended: true }),
    }

    return parserRepository[`${typeParser}`]();

}