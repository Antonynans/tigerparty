import React, { useContext } from 'react';
import ProductItem from './ProductItem';
import { ProductsContext } from '../../contexts/ProductsContext';
import { GridStyle } from '../InfoSection/InfosectionStyle';

const ProductsGrid = () => {

    

    const { products} = useContext(ProductsContext)

    return ( 
        <GridStyle>
            <div className="row">
                <div className="col-sm-8">
                    <div className="py-3">
                        {products.length} Products
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="form-group">
                        <input type="text" name="" placeholder="Search product" className="form-control" id=""/>
                    </div>
                </div>
            </div>
            <div style={{display:'grid', gridGap:'15px', gridTemplateColumns:'repeat(auto-fill, minmax(300px, 1fr)'}}>

                {
                    products.map(product => (
                        <ProductItem key={product.id} product={product}/>
                    ))
                }

            </div>
            <div>

            </div>
        </GridStyle>
     );
}
 
export default ProductsGrid;