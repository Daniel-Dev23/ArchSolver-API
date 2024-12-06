import rateLimit from 'express-rate-limit';
import { RequestHandler } from 'express';

interface IMessageRateLimit {
    status: number;
    message: string
}

interface IRateLimit {
    windowMs: number;
    max: number;
    message: IMessageRateLimit;
    standardHeaders: boolean;
    legacyHeaders: boolean;
}

/**
 * Middleware que proteje las peticiones contra ataques DoS.
 * 
 * @function
 * @name ExpressRateLimit
 * @param config Configuración de prevención de llamado a peticiones.
 * @see {@link https://github.com/express-rate-limit/express-rate-limit|**Documentación de Express Rate Limit**}
 * @returns {RequestHandler} Configuración Rate Limit.
 */
export const ExpressRateLimit = ( config: IRateLimit ): RequestHandler => rateLimit({
    windowMs: config.windowMs, 
    max: config.max,
    message: {
        status: config.message.status,
        message: config.message.message,
    },
    standardHeaders: config.standardHeaders, 
    legacyHeaders: config.legacyHeaders,
});