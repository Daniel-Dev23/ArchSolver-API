import { Optional } from 'sequelize';

/**
 * Definición de interfaz para atributos de la entidad **Producto**.
 */
export interface ProductAttributes {
    id_product: number;
    name: string;
    description?: string | null;
    price: number;
    stock: number;
    id_product_status?: number;
    create_at?: Date;
    updated_at?: Date;
}

/**
 * Definición de tipos para atributos opcionales en la entidad **Producto**.
 */
export type ProductCreationAttributes = Optional<ProductAttributes, 'id_product' | 'description' | 'id_product_status' | 'create_at' | 'updated_at'>;
