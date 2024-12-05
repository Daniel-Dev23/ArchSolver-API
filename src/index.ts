import { env } from '@env/env.repository';

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

    console.log(`\n💙 ${PRODUCT} ${VERSION} ha sido inicializado...\n`);

}

mainApp();