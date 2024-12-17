import { Optional } from 'sequelize';

/**
 * Definición de interfaz para atributos de la entidad **Estados de Producto**.
 */
export interface ProductStatusAttributes {
    id_product_status: number;
    name: string;
    create_at?: Date;
    updated_at?: Date;
}

/**
 * Definición de tipos para atributos opcionales en la entidad **Estados de Producto**.
 */
export type ProductStatusCreationAttributes = Optional<ProductStatusAttributes, 'id_product_status' | 'create_at' | 'updated_at'>