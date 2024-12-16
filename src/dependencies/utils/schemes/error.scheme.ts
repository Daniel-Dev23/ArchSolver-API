import { env } from '@env/envs.handler';
import { bold } from '@utils/bold/bold.handler';
import { statusCode } from '@utils/status_code/status.code.handler';

/**
 * Centralización de esquema de errores en la aplicación.
 */
export const errorScheme: IGlobalErrorScheme = {
    SERVER_ERROR: ( error: any ): IGlobalReturnError => {
        return {
            success: false,
            status_code: statusCode.INTERNAL_SERVER_ERROR,
            error: {
                code: 'B01',
                message: 'Opp... hemos recibido un error desconocido',
                detail: {
                    error_name: error.name,                  
                    error_message: error.message,
                    error_stack: env!.NODE_ENV === 'development' ? error.stack : 'Stack de error no disponible en ambiente de producción'
                }
            }
        }
    },
    SERVICE_NOT_FOUND: ( url:string|undefined ): IGlobalReturnError => {
        return {
            success: false,
            status_code: statusCode.NOT_FOUND,
            error: {
                code: 'B02',
                message: `El servicio '${ url }' que intenta consultar no esta disponible`
            }
        }
    },
    INVALID_JSON_BODY: ( description: string|undefined ): IGlobalReturnError => {
        return {
            success: false,
            status_code: statusCode.CONFLICT,
            error: {
                code: 'B03',
                message: `ERROR_JSON_CONTENT: ${description}`
            }
        }
    },
    EXPIRED_TOKEN: (): IGlobalReturnError => {
        return {
            success: false,
            status_code: statusCode.UNAUTHORIZED,
            error: {
                code: 'B04',
                message: `El token proporcionado ha expirado`
            }
        }
    },
    INVALID_TOKEN: (): IGlobalReturnError => {
        return {
            success: false,
            status_code: statusCode.UNAUTHORIZED,
            error: {
                code: 'B05',
                message: `El token proporcionado no es válido`
            }
        }
    },
    MISSING_TOKEN: ( description: string|undefined ): IGlobalReturnError => {
        return {
            success: false,
            status_code: statusCode.UNAUTHORIZED,
            error: {
                code: 'B06',
                message: description
            }
        }
    },
    INVALID_TRANSACTION: (): IGlobalReturnError => {
        return {
            success: false,
            status_code: statusCode.UNAUTHORIZED,
            error: {
                code: 'B07',
                message: 'La transacción del token proporcionado no es válido'
            }
        }
    },
    VALIDATE_ERROR: ( description: string|undefined ): IGlobalReturnError => {
        return {
            success: false,
            status_code: statusCode.BAD_REQUEST,
            error: {
                code: 'B08',
                message: description
            }
        }
    },
    EMPTY_FORM: (): IGlobalReturnError => {
        return {
            success: false,
            status_code: statusCode.CONFLICT,
            error: {
                code: 'B09',
                message: 'No se detectaron cambios en el formulario'
            }
        }
    },
    STATUS_CONFLICT: ( description: string|undefined ): IGlobalReturnError => {
        return {
            success: false,
            status_code: statusCode.CONFLICT,
            error: {
                code: 'B10',
                message: description
            }
        }
    },
    EXIST_CONFLICT: ( description: string|undefined ): IGlobalReturnError => {
        return {
            success: false,
            status_code: statusCode.CONFLICT,
            error: {
                code: 'B11',
                message: description
            }
        }
    },
    DUPLICATED_CONFLICT: ( description: string|undefined ): IGlobalReturnError => {
        return {
            success: false,
            status_code: statusCode.CONFLICT,
            error: {
                code: 'B12',
                message: description
            }
        }
    },
    TIME_WAIT_CONFLICT: ( time: string|undefined ): IGlobalReturnError => {
        return {
            success: false,
            status_code: statusCode.BAD_REQUEST,
            error: {
                code: 'B13',
                message: `Hemos detectado que existe una solicitud en curso, favor de intentar después de ${bold(time)}`
            }
        }
    },
    AUTHENTICATION_ERROR: (): IGlobalReturnError => {
        return {
            success: false,
            status_code: statusCode.UNAUTHORIZED,
            error: {
                code: 'B14',
                message: `La autenticación no pudo realizarse exitosamente`
            }
        }
    },
    BLOCKED_USER: ( dateUnlock: string|undefined ): IGlobalReturnError => {
        return {
            success: false,
            status_code: statusCode.UNAUTHORIZED,
            error: {
                code: 'B15',
                message: `El usuario se encuentra bloqueado, favor de intentar después de ${bold(dateUnlock)}`
            }
        }
    },
    PASSWORD_CONFLICT: ( description: string|undefined ): IGlobalReturnError => {
        return {
            success: false,
            status_code: statusCode.UNAUTHORIZED,
            error: {
                code: 'B16',
                message: description
            }
        }
    },
    DB_CONFLICT: ( description: string|undefined ): IGlobalReturnError => {
        return {
            success: false,
            status_code: statusCode.INTERNAL_SERVER_ERROR,
            error: {
                code: 'B17',
                message: `ERROR_DATABASE: ${description}`
            }
        }
    }
}