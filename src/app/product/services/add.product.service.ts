import { TableHints } from 'sequelize';

import { addProduct, getProduct } from '@db/commands/product';
import { Exception } from '@errors/exception.error';
import { bold } from '@utils/bold/bold.handler';

import { ProductDTO } from "../dto/product.dto";

export const AddProductService = async ( product: ProductDTO ) => {

    /**
     * 
     */
    const findProduct = await getProduct({
        attributes: ['id_product', 'name'],
        tableHint: TableHints,
        where: {
            name: product.name
        }
    });

    if (findProduct !== null) {
        throw new Exception('EXIST_CONFLICT', `El producto ${bold(product.name)} ya se encuentra registrado`);
    }

    const newProduct = await addProduct({
        name: product.name,
        price: product.price,
        description: product.description,
        stock: product.stock
    });


    return newProduct.id_product;

}