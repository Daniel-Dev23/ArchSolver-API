import { IConnectionProperties } from '../types/interfeces';

/**
 * Función que inspecciona la cadena de conexión y retorna las propiedades de conexión.
 * 
 * @function
 * @name connectionProperties
 * @param stringConnectionDb - Cadena de conexión a base de datos.
 * @returns Propiedades de Conexión.
 */
export const connectionProperties = ( stringConnectionDb: string ): IConnectionProperties => {

    //* --- Segmentación de Cadenas ---
    /**
     * Segmentación de cadena de conexión.
     */
    const splitConnection = stringConnectionDb.split('/');

    /**
     * Segmentación de cadena host.
     */
    const splitHost = splitConnection[0].split(':');

    /**
     * Segmentación de cadena usuario.
     */
    const splitUser = splitConnection[2].split('=');

    /**
     * Segmentación de cadena contraseña.
     */
    const splitPassword = splitConnection[3].split('=');

    /**
     * Segmentación de cadena zona horaria.
     */
    const splitTimezone = splitConnection[4].split('=');

    return {
        dbHost: splitHost[0],
        dbName: splitConnection[1],
        dbPassword: splitPassword[1],
        dbPort: parseInt(splitHost[1]) || 1433,
        dbTimezone: splitTimezone[1] || '-08:00',
        dbUser: splitUser[1],
    }

}