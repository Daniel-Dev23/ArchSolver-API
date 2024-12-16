import { RequestHandler } from 'express';

/**
 * Definición de tipos de decodificación de cuerpos de petición.
 */
export type TypeParser = 'json' | 'url-encode';

/**
 * Definición de tipos de parseo.
 */
export type TypeParserFactory = () => RequestHandler;