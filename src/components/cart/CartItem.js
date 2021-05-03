import React, { useContext } from 'react';
import { BsTrash } from 'react-icons/bs';
import { CartContext } from '../../contexts/CartContext';
import quick from '../../images/logo/Quick-view.svg';
import { CartButton, CartImg, Qty, QtyDiv } from '../InfoSection/InfosectionStyle';


const CartItem = ({product}) => {

    const { increase, decrease, removeProduct, clearCart } = useContext(CartContext);

    return ( 
        <>
        <div style={{padding:'5%'}}>
        <div style={{display:'flex', justifyContent:'space-between'}}>

            <div style={{height:'70px', width:'150px'}}>
                <CartImg 
                alt={product.name}
                src={product.photo} />
            </div>
            <QtyDiv>
            <div>
                <Qty>{product.name}</Qty>
                {/* <p>Price: {formatNumber(product.price)} </p> */}
                
            </div>
            <div>
                <CartButton type='button'><img src={quick} style={{width:'30px', height:'30px'}} />view item</CartButton>
            </div>
            </QtyDiv>
            </div>
            <div >
            <QtyDiv >
            <Qty style={{display:'flex'}}>Quantity: <h4>{product.quantity}</h4></Qty>
            <CartButton type='button' onClick={removeProduct} color='grey' border='1px solid grey'><BsTrash />Remove Item</CartButton>
            </QtyDiv>
            </div>
            <hr />
            
            {/* <div>
                 <button 
                 onClick={() => increase(product)}>
                     <AiOutlinePlus width={"20px"}/>
                 </button>
                 <p>{product.quantity}</p>

                 {
                     product.quantity > 1 &&
                     <button
                    onClick={() => decrease(product)}>
                        {console.log(product)}
                        <AiOutlineMinus width={"20px"}/>
                    </button>
                 }

                {
                     product.quantity === 1 &&
                     <button
                    onClick={() => removeProduct(product)}>
                        <BsTrash width={"20px"}/>
                    </button>
                 }
                 
            </div> */}
        </div>
        
    </>
     );
}
 
export default CartItem;