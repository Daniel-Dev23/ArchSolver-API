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
export const ExpressRateLimit = ( config: IRateLimit ): RequestHandler => {

    return rateLimit({
        windowMs: 15 * 60 * 1000, //? 15 minutos
        max: 5,                   //? Límite de 5 solicitudes por IP
        message: {
            status: 429,
            message: 'Se han detectado demasiadas solicitudes, por favor intente más tarde',
        },
        standardHeaders: true, //? Devuelve las cabeceras `RateLimit-*`
        legacyHeaders: false,  //? Deshabilita las cabeceras `X-RateLimit-*`
    });

}