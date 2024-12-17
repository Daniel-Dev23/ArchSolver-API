import { Product } from '../entities/product';
import { ProductCreationAttributes } from '../types/product.types';

type ProductCreation = typeof Product.prototype; // Tipar una instancia de Product

/**
 * Comando que registra un nuevo producto a base de datos.
 * 
 * @function
 * @name addProduct
 * @param product - Nuevo producto a registrar.
 * @returns Producto Agregado.
 */
export const addProduct = async ( product: ProductCreationAttributes ): Promise<ProductCreation> => await Product.create(product);

/**
 * Comando que obtiene la referencia de un solo producto en base de datos.
 * 
 * @function
 * @name getProduct
 * @param args - Argumentos para configuración de consulta.
 * @returns Producto
 */
export const getProduct = async ( args: IGlobalFindOptions ): Promise<ProductCreation|null> => await Product.findOne(args);