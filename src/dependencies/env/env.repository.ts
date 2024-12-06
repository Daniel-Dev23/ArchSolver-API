import 'dotenv/config';
import convict from 'convict';

/**
 * Repositorio de variables de entorno de la aplicación.
 * @see {@link https://www.npmjs.com/package/convict|**Documentación Convict**}
 */
export const env = convict({
    root: {
        NODE_ENV: {
            doc: "Define el ambiente de desarrollo de la aplicación.",
            format: ["development", "production"],
            default: "development",
            env: 'NODE_ENV'
        },
        PRODUCT: {
            doc: "Define el nombre del producto o aplicación.",
            format: String,
            default: "Default Product",
            env: 'PRODUCT'
        },
        VERSION: {
            doc: "Define el estado de madurez del producto o aplicación.",
            format: String,
            default: "v0.1.0-alpha",
            env: 'VERSION'
        },
    },
    port: {
        APP_PORT: {
            doc: "Define el puerto del servidor APP.",
            format: String,
            default: "",
            env: 'APP_PORT'
        },
        AUTH_PORT: {
            doc: "Define el puerto del servidor AUTH.",
            format: String,
            default: "",
            env: 'AUTH_PORT'
        },
    }
});

//? Habilitar modo 'estricto' en las variables de entorno
env.validate({ allowed: 'strict' });