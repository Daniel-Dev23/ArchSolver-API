import rateLimit from 'express-rate-limit';
import { RequestHandler } from 'express';

import { IConfigRateLimit } from './types/rate.limit.types';

/**
 * Middleware que proteje las peticiones contra ataques DoS.
 * 
 * @function
 * @name ExpressRateLimit
 * @param config Configuración de prevención de llamado a peticiones.
 * @see {@link https://github.com/express-rate-limit/express-rate-limit|**Documentación de Express Rate Limit**}
 * @returns Configuración Rate Limit.
 */
export const ExpressRateLimit = ( config: IConfigRateLimit ): RequestHandler => rateLimit({
    windowMs: config.windowMs, 
    max: config.max,
    message: {
        status: config.message.status,
        message: config.message.message,
    },
    standardHeaders: config.standardHeaders, 
    legacyHeaders: config.legacyHeaders,
});