/**
 * Definición de interface en estructura de mensaje.
 */
interface IMessageRateLimit {
    status: number;
    message: string
}

/**
 * Definición de configuración para límite de peticiones.
 */
export interface IConfigRateLimit {
    windowMs: number;
    max: number;
    message: IMessageRateLimit;
    standardHeaders: boolean;
    legacyHeaders: boolean;
}