import morgan from 'morgan';
import { RequestHandler } from 'express';

type TypeRegister = 'combined' | 'common' | 'dev' | 'short' | 'tiny';

/**
 * Middleware que define el tipo de registro en las solicitudes HTTP realizadas.
 * 
 * @function
 * @name MorganRegister
 * @see {@link https://github.com/expressjs/morgan#readme|**Documentación Morgan**}
 * @param typeRegister Tipo de registro en información en Morgan.
 * @returns Registro de Información Morgan
 */
export const MorganRegister = ( typeRegister: TypeRegister ): RequestHandler => morgan(typeRegister);