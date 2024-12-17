import { DataTypes, Model, ModelOptions } from 'sequelize';
import { SequelizeConfig } from '../sequelize.config';
import { ProductAttributes, ProductCreationAttributes } from '@db/types/product.types';

import { ProductStatus } from './product.status';

/**
 * Asignación de instancia de base de datos.
*/
const dbConnection = SequelizeConfig();

/**
 * Definición de opciones de modelo.
*/
const optionsModel: ModelOptions = {
    tableName: 'Product',
    timestamps: false,
    createdAt: 'create_at',
    updatedAt: 'update_at'
}

/**
 * Definición de la entidad **Producto**.
*/
export const Product = dbConnection.define<Model<ProductAttributes, ProductCreationAttributes>>('product', {
    id_product: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    id_product_status: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
        references: {
            model: ProductStatus,
            key: 'id_product_status',
        },
    },
}, optionsModel);

//* --- Relaciones ---
Product.belongsTo(ProductStatus, { foreignKey: 'id_product_status' });