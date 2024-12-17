import { DataTypes, Model, ModelOptions } from 'sequelize';
import { SequelizeConfig } from '../sequelize.config';
import { ProductStatusAttributes, ProductStatusCreationAttributes } from '@db/types/product.status.types';

/**
 * Asignación de instancia de base de datos.
 */
const dbConnection = SequelizeConfig();

/**
 * Definición de opciones de modelo.
 */
const optionsModel: ModelOptions = {
    tableName: 'ProductStatus',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
}

/**
 * Definición de la entidad **Estados de Producto**.
 */
export const ProductStatus = dbConnection.define<Model<ProductStatusAttributes, ProductStatusCreationAttributes>>('product_status', {
    id_product_status: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false,
    }
}, optionsModel);

//* --- Relaciones ---