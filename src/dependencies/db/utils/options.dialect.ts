import { env } from '@env/envs.handler';

/**
 * Configuración de opciones adicionales en base de datos.
 */
export const optionsDialect = {
    useUTC: false,
    options: {
        encript: env!.DB_ENABLE_ENCRYPT === 'YES' ? false : true
    }
}