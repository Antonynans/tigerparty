import React, { useContext } from 'react';
// import Layout from '../../components/Layout';

import CartProducts from './CartProducts';
import { CartContext } from '../../contexts/CartContext';
import { formatNumber } from '../../helpers/utils';
import { Link } from 'react-router-dom';
import { CartButton, CartContainer, CartSubtitle, SubTitle } from '../InfoSection/InfosectionStyle';
import { BsTrash } from 'react-icons/bs';

const Cart = () => {

    const { total, cartItems, itemCount, clearCart, checkout, handleCheckout } = useContext(CartContext);

    const getCurrentDate = (separator='/') => {

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${date}${separator}${month<10?`0${month}`:`${month}`}${separator}${year}`
    }

    return ( 
        <>
        <CartContainer>
          <CartSubtitle>
              <div style={{display:'flex', alignItems:'baseline', justifyContent:'space-around', width:'100%'}}>
                <SubTitle>Cart items</SubTitle>
                {
                    cartItems.length > 0 && 
                    <div>
                        <h4>{itemCount} items</h4>
                    </div>
                }

              </div>
          </CartSubtitle>
            <div >
                

                <div>
                    <div>
                        {
                            cartItems.length > 0 ?
                            <CartProducts/> :
                            <div>
                                Your cart is empty
                            </div>
                        }

                        { checkout && 
                            <div>
                                <p>Checkout successfull</p>
                                {/* <Link to="/" >BUY MORE</Link> */}
                            </div>
                        }
                    </div>
                    {
                        cartItems.length > 0 && 
                        <div style={{padding:'5%'}}>
                            <div>
                                {/* <p>Total Items</p>
                                <h4>{itemCount}</h4>
                                <p>Total Payment</p>
                                <h3>{formatNumber(products.price)}</h3> */}
                                {/* <hr/> */}
                                <div style={{width:'100%', textAlign:'center'}}>
                                    <CartButton type='button' onClick={clearCart} width='100%' border='1px solid grey' color='grey'><BsTrash />Remove All item</CartButton>
                                </div>
                                <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                                    <h4>Date</h4>
                                    {getCurrentDate()}
                                </div>
                                <hr />
                                <div style={{display:'flex', justifyContent:'space-between'}}>
                                    <h3>Total Payment</h3>
                                    <h3>{formatNumber(total)}</h3>
                                </div>
                                <hr />
                                <div>
                                    <CartButton type="button" onClick={handleCheckout} width='100%' color='#fff' bcolor='RGB(252, 115, 3)'>PROCEED TO QUOTE</CartButton>
                                    {/* <button type="button" onClick={clearCart}>CLEAR</button> */}
                                </div>

                            </div>
                        </div>
                    }
                    
                </div>
            </div>
            </CartContainer>
        </>
     );
}
 
export default Cart;