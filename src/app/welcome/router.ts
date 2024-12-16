import { Router } from 'express';
import { repositoryControllers } from './controllers/repository';

/**
 * Enrutador que coordina los servicios de **Pruebas de Conexión**.
 * 
 * @function
 * @name WelcomeRouter
 * @returns Enrutador
*/
export const WelcomeRouter = (): Router => {

    /**
     * Instancia de enrutador.
    */
    const welcomeRouter: Router = Router();

    /**
     * Centralización de rutas del enrutador **Pruebas de Conexión**.
    */
    const paths = {
        welcome: '/welcome',
        db: '/db'
    };

    /**
     * * Servicio que realiza una prueba de conexión.
     * 
     * @function
     * @name GET/welcome
     * @path {GET} /welcome
     * @memberof welcomeRouter
    */
    welcomeRouter.get(
        paths.welcome,
        repositoryControllers('welcome')
    );

    /**
     * * Servicio que realiza una prueba de conexión de la base de datos.
     * 
     * @function
     * @name GET/db
     * @path {GET} /db
     * @memberof welcomeRouter
    */
    welcomeRouter.get(
        paths.db,
        repositoryControllers('db')
    );
    

    return welcomeRouter;

}