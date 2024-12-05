import { IServer } from '@ts/interface.repository';

/**
 * Composable de propiedades y funciones para publicar recursos del servidor **Auth**.
 * 
 * @function
 * @name useSetupAuthServer
 * @returns {IServer} Publicación de servicios **Auth**.
 */
export const useSetupAuthServer = (): IServer => {

    /**
     * Publicación de recursos del servidor **Auth**.
     * 
     * @function
     * @name deploy
     */
    const deploy = (): void => {

        //? Invocación de middlewares
        middlewares();

        //? Precarga de rutas
        routes();

        //TODO: Publicación de servidor
        console.log('[🟢] Publicación de recursos...');

    }

    /**
     * Asignación de middlewares al servidor **Auth**.
     * 
     * @function
     * @name middlewares
     */
    const middlewares = (): void => {

        //TODO: Configuración de middlewares
        console.log('[🔴] Asignación de middlewares...');

    }

    /**
     * Configuración de rutas de recursos en servidor **Auth**.
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