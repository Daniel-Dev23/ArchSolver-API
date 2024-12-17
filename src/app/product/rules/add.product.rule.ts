import { body } from 'express-validator';
import { validateRules } from '@middlewares/express-validator/validate.rules';

/**
 * Definición de esquema de errores al registrar un producto.
 */
export const addProductRules: TypeGlobalValidation = [
    body('name')
        .notEmpty().withMessage("El nombre de producto es requerido")
        .isString().withMessage("El nombre de producto no cumple con el formato cadena requerido")
        .isLength({ min: 3 }).withMessage("El nombre de producto no cumple con los caracteres requeridos")
        .isLength({ max: 50 }).withMessage("El nombre de producto excede los caracteres requeridos")
        .trim()
        .toUpperCase()
    ,
    body('description')
        .notEmpty().withMessage("La descripción es requerida")
        .isString().withMessage("La descripción no cumple con el formato cadena requerida")
        .isLength({ min: 5 }).withMessage("La descripción no cumple con los caracteres requeridos")
        .isLength({ max: 255 }).withMessage("La descripción excede los caracteres requeridos")
        .trim()
        .toUpperCase()
    ,
    body('price')
        .notEmpty().withMessage("El precio es requerido")
        .isFloat().withMessage("El precio no cumple con el formato numérico requerido")
        .isFloat({ gt: 0 }).withMessage("El precio debe ser mayor a cero")
        .isFloat({ max: 999999999 }).withMessage("El precio excede el límite numérico requerido")
        .toFloat()
    ,
    body('stock')
        .notEmpty().withMessage("El stock es requerido")
        .isInt().withMessage("El stock no cumple con el formato numérico requerido")
        .isInt({ max: 999999999 }).withMessage("El stock excede el límite numérico requerido")
        .toInt()
    ,
    validateRules
];