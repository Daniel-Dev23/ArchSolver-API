import dotenv from 'dotenv';
import { z } from 'zod';

import { regex } from '@utils/regex/regex.handler';

//? --- Precarga de variables de entorno desde el .env ---
dotenv.config();

/**
 * Manejador de variables de entorno en la aplicación.
 * 
 * @see {@link https://www.npmjs.com/package/dotenv|**Documentación Dotenv**}
 * @see {@link https://www.npmjs.com/package/zod|**Documentación Zod**}
 */
const EnvSchema = z.object({
    //* --- ROOT ---
    NODE_ENV: z
        .enum(
            ["development", "production"],
            { message: "La variable 'NODE_ENV' debe ser 'development' o 'production'" }
        )
    ,
    VERSION: z
        .string({ required_error: "La variable 'VERSION' no ha sido definida" })
        .min(1, { message: "La variable 'VERSION' debe tener la madurez del producto asignado" })
    ,
    BRAND: z
        .string({ required_error: "La variable 'BRAND' no ha sido asignada" })
        .min(1, { message: "La variable 'BRAND' debe tener un nombre de marca o producto asignado" })
    ,
    ENABLE_SHOW_ERROR: z
        .enum(
            ["YES", "NO"],
            { message: "La variable 'ENABLE_SHOW_ERROR' debe ser 'YES' o 'NO'" }
        )
    ,
    
    //* --- PUERTOS ---
    APP_PORT: z
        .string({ required_error: "La variable 'APP_PORT' no ha sido definida" })
        .regex(
            regex.ONLY_DIGIT_NUM, 
            { message: "La variable 'APP_PORT' debe tener un número de puerto asignado" }
        )
        .transform(Number)
    ,
    AUTH_PORT: z
        .string({ required_error: "La variable 'AUTH_PORT' no ha sido definida" })
        .regex(
            regex.ONLY_DIGIT_NUM, 
            { message: "La variable 'AUTH_PORT' debe tener un número de puerto asignado" }
        )
        .transform(Number)
    ,

    //* --- BASE DE DATOS ---
    DB_CONNECTION: z
        .string({ required_error: "La variable 'DB_CONNECTION' no ha sido asignada" })
        .min(1, { message: "La variable 'DB_CONNECTION' debe tener un nombre de marca o producto asignado" })
    ,
    DB_ENABLE_ENCRYPT: z
        .enum(
            ["YES", "NO"],
            { message: "La variable 'DB_ENABLE_ENCRYPT' debe ser 'YES' o 'NO'" }
        )
    ,
    DB_ENABLE_LOGS: z
        .enum(
            ["YES", "NO"],
            { message: "La variable 'DB_ENABLE_LOGS' debe ser 'YES' o 'NO'" }
        )
    ,
});

//? Validar configuración de variables de entorno
const { success, data: env, error } = EnvSchema.safeParse(process.env);

if ( !success ) {
    console.log(`❌ [ERROR_ENV_SCHEMA]: `, error.format());
    process.exit(1);
}

export { env };