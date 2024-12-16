import { env } from '@env/envs.handler';
import { queryLogging } from '@helpers/logger/query.logging';

/**
 * Función que publica o despliega las consultas SQL de Sequelize.
 * 
 * @param log - Elemento a registrar.
 * @returns Log de consultas SQL.
 */
export const registerLogDb = ( log: string ) => {
    
    /**
     * Asignación para habilitar logs en base de datos.
     */
    const DB_ENABLE_LOGS = env!.DB_ENABLE_LOGS;

    if ( DB_ENABLE_LOGS === 'YES' ) {
        console.log(`✨ [SEQUELIZE] - ${ log }`);
        console.log('');

        //* --- Registro de consultas ---
        queryLogging(log);
        return;
    }

}