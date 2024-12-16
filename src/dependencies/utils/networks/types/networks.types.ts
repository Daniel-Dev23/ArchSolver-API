import { Application } from 'express';

/**
 * Definición de interfaz para relacionar las interfaces de red a un servidor.
 */
export interface IConfigNetwork {
    environment: string;
    port: number;
    server: Application;
}