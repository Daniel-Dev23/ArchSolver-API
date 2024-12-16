/**
 * Definición de interface para retorno de propiedades de conexión.
 */
export interface IConnectionProperties {
    dbHost: string;
    dbPort: number;
    dbName: string;
    dbUser: string;
    dbPassword: string;
    dbTimezone: string;
}