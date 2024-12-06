import express, { Express } from 'express';

import { env } from '@env/env.repository';
import { deployNetworks } from '@utils/networks/deploy.networks';
import { IServer } from '@ts/interface.repository';

/**
 * Composable de propiedades y funciones para publicar recursos del servidor **App**.
 * 
 * @function
 * @name useSetupAppServer
 * @returns {IServer} Publicación de servicios **App**.
 */
export const useSetupAppServer = (): IServer => {

    /**
     * Instancia de servidor express.
     * @see {@link https://expressjs.com/es/|**Documentación Express**}
     */
    const app: Express = express();

    /**
     * Publicación de recursos del servidor **App**.
     * 
     * @function
     * @name deploy
     */
    const deploy = (): void => {

        //? Invocación de middlewares
        middlewares();

        //? Precarga de rutas
        routes();

        //? Publicación de servidor
        deployNetworks({
            environment: 'APP',
            port: Number(env.get('port.APP_PORT')),
            server: app
        });

    }

    /**
     * Asignación de middlewares al servidor **App**.
     * 
     * @function
     * @name middlewares
     */
    const middlewares = (): void => {

        //TODO: Configuración de middlewares
        console.log('[🔴] Asignación de middlewares...');

    }

    /**
     * Configuración de rutas de recursos en servidor **App**.
     * 
     * @function
     * @name routes
     */
    const routes = (): void => {

        //TODO: Configuración de middlewares
        console.log('[🟡] Configuración de rutas...');

    }

    return {
        deploy
    }

}