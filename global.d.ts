// global.d.ts
import { RequestHandler } from 'express';
import { ValidationChain } from 'express-validator';

declare global {

    //* --- Interfaces ---

    /**
     * Interfaz global que define el retorno de un **setup-server**.
     */
    interface IGlobalSetupServer {
        deploy: () => void;
    }

    /**
     * Interfaz global que define los argumentos en consultas de un solo registro.
     */
    interface IGlobalFindOptions {
        attributes: string[];
        includes?: any[],
        limit?: number;
        offset?: number;
        order?: any[];
        tableHint: any,
        where?: Record<string, any>
    }

    /**
     * Interfaz global que define el retorno en un error personalizado.
     */
    interface IGlobalReturnError {
        success: boolean;
        status_code: number;
        error: {
            code: string;
            message: string|undefined;
            detail?: {
                error_name?: string|undefined;
                error_message?: string|undefined;
                error_stack?: string|undefined;
            }
        }
    }
    
    /**
     * Interfaz global que define la intergración de propiedades del esquema de errores.
     */
    interface IGlobalErrorScheme {
        [key: string]: (description?: string|undefined) => ICustomError;
    }

    /**
     * Interfaz global que define los códigos de estado HTTP.
     */
    interface IGlobalStatusCode {
        CONTINUE: number;
        SWITCHING_PROTOCOLS: number;
        OK: number;
        CREATED: number;
        ACCEPTED: number;
        NON_AUTHORITATIVE_INFORMATION: number;
        NO_CONTENT: number;
        RESET_CONTENT: number;
        PARTIAL_CONTENT: number;
        MULTIPLE_CHOICES: number;
        MOVED_PERMANENTLY: number;
        FOUND: number;
        MOVED_TEMPORARILY: number;
        SEE_OTHER: number;
        NOT_MODIFIED: number;
        USE_PROXY: number;
        UNUSED: number;
        TEMPORARY_REDIRECT: number;
        PERMANENT_REDIRECT: number;
        BAD_REQUEST: number;
        UNAUTHORIZED: number;
        PAYMENT_REQUIRED: number;
        FORBIDDEN: number;
        NOT_FOUND: number;
        METHOD_NOT_ALLOWED: number;
        NOT_ACCEPTABLE: number;
        PROXY_AUTHENTICATION_REQUIRED: number;
        REQUEST_TIMEOUT: number;
        CONFLICT: number;
        GONE: number;
        LENGTH_REQUIRED: number;
        PRECONDITION_FAILED: number;
        PAYLOAD_TOO_LARGE: number;
        REQUEST_ENTITY_TOO_LARGE: number;
        REQUEST_URI_TOO_LONG: number;
        URI_TOO_LONG: number;
        UNSUPPORTED_MEDIA_TYPE: number;
        REQUESTED_RANGE_NOT_SATISFIABLE: number;
        EXPECTATION_FAILED: number;
        MISDIRECTED_REQUEST: number;
        UPGRADE_REQUIRED: number;
        PRECONDITION_REQUIRED: number;
        TOO_MANY_REQUESTS: number;
        REQUEST_HEADER_FIELDS_TOO_LARGE: number;
        INTERNAL_SERVER_ERROR: number;
        NOT_IMPLEMENTED: number;
        BAD_GATEWAY: number;
        SERVICE_UNAVAILABLE: number;
        GATEWAY_TIMEOUT: number;
        HTTP_VERSION_NOT_SUPPORTED: number;
        NETWORK_AUTHENTICATION_REQUIRED: number;
    }

    //* --- Tipos ---

    /**
     * Definición de tipos globales de entornos de desarrollo.
     */
    type TypeGlobalNodeEnv = 'development' | 'production';

    /**
     * Definición de tipos globales de errores.
     */
    type IGlobalTypeErrors = 
        'SERVER_ERROR'         |
        'SERVICE_NOT_FOUND'    |
        'INVALID_JSON_BODY'    |
        'EXPIRED_TOKEN'        |
        'INVALID_TOKEN'        |
        'MISSING_TOKEN'        |
        'INVALID_TRANSACTION'  |
        'VALIDATE_ERROR'       |
        'EMPTY_FORM'           |
        'STATUS_CONFLICT'      |
        'EXIST_CONFLICT'       |
        'DUPLICATED_CONFLICT'  |
        'TIME_WAIT_CONFLICT'   |
        'AUTHENTICATION_ERROR' |
        'BLOCKED_USER'         |
        'PASSWORD_CONFLICT'    |
        'DB_CONFLICT' 
    ;

    /**
     * Definición de tipado para reglas de Express Validator.
     */
    type TypeGlobalValidation = (ValidationChain | RequestHandler)[];

}

export{}