import { Sequelize } from 'sequelize';

import { env } from '@env/envs.handler';
import { connectionProperties } from './utils/connection.properties';
import { optionsDialect } from './utils/options.dialect';
import { optionsPoolConnection } from './utils/options.pool.connection';
import { registerLogDb } from './utils/register.log.db';

/**
 * Función que provee el objeto de conexión a base de datos.
 * 
 * @function
 * @name SequelizeConfig
 * @returns Objeto de Conexión a Base de Datos
 */
export const SequelizeConfig = (): Sequelize => {

    //? Obtención de propiedades de conexión
    const {
        dbHost,
        dbName,
        dbPassword,
        dbPort,
        dbTimezone,
        dbUser
    } = connectionProperties(env!.DB_CONNECTION);

    /**
     * Instancia de conexión a base de datos con Sequelize.
     * 
     * @see {@link https://sequelize.org/docs/v6/getting-started/|**Documentación Sequelize**}
     */
    const dbConnection = new Sequelize(dbName, dbUser, dbPassword, {
        host: dbHost,
        dialect: 'mssql',
        dialectModulePath: 'tedious',
        port: dbPort,
        pool: optionsPoolConnection,
        logging: (log: string ) => registerLogDb(log),
        timezone: dbTimezone,
        dialectOptions: optionsDialect
    });

    return dbConnection;

}