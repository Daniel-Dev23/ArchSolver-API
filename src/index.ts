import { env } from '@env/env.repository';

import { useSetupAppServer } from './app/setup';
import { useSetupAuthServer } from './auth/setup';

/**
 * Punto de entrada a los servicios **REST API**.
 * 
 * @function
 * @name mainApp
 * @returns {undefined} Bienvenida al proyecto backend.
 */
const mainApp = (): void => {

    /**
     * Asignación de nombre de producto o aplicación.
     */
    const PRODUCT: string = env.get('root.PRODUCT');

    /**
     * Asignación de madurez del producto o aplicación.
     */
    const VERSION: string = env.get('root.VERSION');

    //* Publicación de servicios
    const { deploy: deployServerApp } = useSetupAppServer();
    const { deploy: deployServerAuth } = useSetupAuthServer();

    deployServerApp();
    deployServerAuth();

    console.log(`\n💙 ${PRODUCT} ${VERSION} ha sido inicializado...\n`);

}

mainApp();