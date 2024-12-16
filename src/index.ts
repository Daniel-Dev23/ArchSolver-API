import { env } from './dependencies/env/envs.handler';


/**
 * Punto de entrada a los servicios **REST API**.
 * 
 * @function
 * @name mainApp
 * @see {@link https://www.npmjs.com/package/typescript|**Documentación Typescript**}
 * @see {@link https://www.npmjs.com/package/ts-node-dev|**Documentación Ts-node-dev**}
 * @returns Inicialización de servidor y servicios backend.
 */
const mainApp = (): void => {

    /**
     * Asignación de nombre de producto o marca.
     */
    const BRAND: string = env!.BRAND;

    /**
     * Asignación de versionamiento de producto.
     */
    const VERSION: string = env!.VERSION;

    console.log(`\n🟢 ${BRAND} ${VERSION} ha sido inicializado...\n`);

}

mainApp();