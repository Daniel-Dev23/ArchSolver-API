import { PoolOptions } from 'sequelize';

/**
 * Configuración de opciones para pool de conexiones en base de datos.
 */
export const optionsPoolConnection: PoolOptions = {
    acquire: 30000,
    idle: 10000,
    max: 10,
    min: 0,
}