import React, { useContext } from 'react';
import ProductItem from './ProductItem';
import { ProductsContext } from '../../contexts/ProductsContext';

const ProductsGrid = () => {

    const { products} = useContext(ProductsContext)

    return ( 
        <div style={{width:'50%'}}>
            <div>
                <div>
                    <div >
                        {products.length} Products
                    </div>
                </div>
                <div>
                    <div>
                        <input type="text" name="" placeholder="Search product" id=""/>
                    </div>
                </div>
            </div>
            <div>

                {
                    products.map(product => (
                        <ProductItem key={product.id} product={product}/>
                    ))
                }

            </div>
            <div>

            </div>
        </div>
     );
}
 
export default ProductsGrid;