import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import { formatNumber } from '../../helpers/utils';
import { useHistory } from 'react-router-dom';

const ProductItem = ({product}) => {
    let history = useHistory();

    const { addProduct, cartItems, increase } = useContext(CartContext);

    const isInCart = product => {
        return !!cartItems.find(item => item.id === product.id);
    }

    return ( 
        <div>
            <img style={{display: "block", margin: "0 auto 10px", maxHeight: "200px"}} 
            src={product.photo + '?v=' + product.id} alt=""/>
            <p>{product.name}</p>
            <h3>{formatNumber(product.price)}</h3>
            <div>
                <Link  to="/">Details</Link>

                {
                    isInCart(product) && 
                    <button 
                    onClick={() => increase(product)}>Add more</button>
                }

                {
                    !isInCart(product) && 
                    <button 
                    onClick={() => addProduct(product)}>Add to cart</button>
                }
                
            </div>
        </div>
     );
}
 
export default ProductItem;