import express, { Express } from 'express';

import { env } from '@env/envs.handler';
import { Compression } from '@middlewares/compression/enable.compression';
import { Cors } from '@middlewares/cors/enable.cors';
import { ExpressBodyParser } from '@middlewares/express/body.parser';

/**
 * Composable de propiedades y funciones para publicar recursos del servidor **App**.
 * 
 * @function
 * @name useSetupAppServer
 * @returns Publicación de servicios **App**.
 */
export const useSetupAppServer = (): IGlobalSetupServer => {

    //* --- Properties ---
    /**
     * Instancia de servidor express.
     * @see {@link https://expressjs.com/es/|**Documentación Express**}
     */
    const app: Express = express();

    /**
     * Asignación de ambiente de desarrollo.
     */
    const NODE_ENV: TypeGlobalNodeEnv = env!.NODE_ENV;

    /**
     * Asignación de puerto para publicación de servicios en **App**.
     */
    const APP_PORT: number = env!.APP_PORT;

    /**
     * Asignación de ruta base para invocación de servicios.
     */
    const BASE_PATH: string = '/api/v1/app';

    //* --- Methods ---
    /**
     * Publicación de recursos del servidor **App**.
     * 
     * @function
     * @name deploy
     */
    const deploy = (): void => {}
    
    /**
     * Asignación de middlewares al servidor **App**.
     * 
     * @function
     * @name middlewares
     */
    const middlewares = (): void => {

        app.use(Cors());                            //* Habilitar CORS (Cross-Origin Resource Sharing)
        app.use(ExpressBodyParser('json'));         //* Procesamiento de datos JSON
        app.use(ExpressBodyParser('url-encode'));   //* Procesamiento de datos url-encode (form-data | x-www-form-urlencode)
        app.use(Compression());                     //* Habilita la compresión de respuestas

    }

    /**
     * Configuración de rutas en servidor **App**.
     * 
     * @function
     * @name routes
     */
    const routes = (): void => {}

    return { deploy };

}