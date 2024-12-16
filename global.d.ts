// global.d.ts

declare global {

    //* --- Interfaces ---

    /**
     * Interfaz global que define el retorno de un **setup-server**.
     */
    interface IGlobalSetupServer {
        deploy: () => void;
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

    //* --- Tipos ---

    /**
     * Definición de tipos globales de entornos de desarrollo
     */
    type TypeGlobalNodeEnv = 'development' | 'production';

    /**
     * Definición de tipos globales de errores
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

}

export{}