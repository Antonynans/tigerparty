import React, { useContext } from 'react';
import { CartButton, Form, FormImg, FormInput, Price, SubContainer, SubTitle } from '../InfoSection/InfosectionStyle';
import { formatNumber } from '../../helpers/utils';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { CartContext } from '../../contexts/CartContext';
// import { ProductsContext } from '../../contexts/ProductsContext';
import delivery from '../../images/logo/Delivery-01.svg';
import calendar from '../../images/logo/Calender-01.svg';
import logo from '../../images/bounchouse.jpg';

export default function ItemViewPage({product}) {

  // const {product} = useContext(CartContext)

  // const { increase, decrease, removeProduct } = useContext(CartContext);

  return (
    <div style={{display:'flex', marginTop:'5%', padding:'3%'}}>
      <div style={{width:'50%', padding:'3%'}}>
        <img src={logo} alt='img' style={{height:'89%'}} />
      </div>
      <div style={{width:'50%', padding:'3%'}}>
        <SubTitle>Marquee DIY Pop Up 3m X 3m</SubTitle>
        <Price>From $75.00</Price>
        <div>
          <SubTitle>No. of days</SubTitle>
          <div style={{display:'flex', height:'7vh', width:'45%', alignItems:'center', border:'1px solid grey'}}>
            <button >
              <AiOutlinePlus width={"20px"}/>
            </button>
            <h4 style={{padding:'2% 6%', border:'1px solid grey', height:'70%', width:'100%'}}>7</h4>
            <button
              >
              {console.log(product)}
              <AiOutlineMinus width={"20px"}/>
            </button>
          </div>
          <hr />
          <div>
            <div style={{display:'flex', justifyContent:'space-between'}}>
              <SubTitle>Event date</SubTitle>
              <SubTitle>Delivery</SubTitle>
            </div>
            <div style={{display:'flex', justifyContent:'space-between', width:'100%'}}>
            <Form style={{margin:'0'}}>
                  <FormInput style={{width:'40%'}} name='calendar' type='text' placeholder='Enter in postcode' />
                  <FormImg style={{margin:'0'}} src={calendar} alt='calendar' />

                </Form>
                <Form style={{margin:'0'}}>
                  <FormInput style={{width:'40%'}} name='delivery' type='text' placeholder='Enter in postcode' />
                  <FormImg style={{margin:'0'}} src={delivery} alt='delivery' />

                </Form>
            </div>

            <div style={{display:'flex', justifyContent:'space-between'}}>
              <SubTitle>Quantity</SubTitle>
              <SubTitle>Marquee Wall Plain</SubTitle>
            </div>
            <div style={{display:'flex', justifyContent:'space-between'}}>
            <div style={{display:'flex', height:'7vh', width:'120px', alignItems:'center', border:'1px solid grey'}}>
            <button >
              <AiOutlinePlus width={"20px"}/>
            </button>
            <h4 style={{padding:'2% 6%', border:'1px solid grey', height:'70%', width:'100%'}}>7</h4>
            <button
              >
              {console.log(product)}
              <AiOutlineMinus width={"20px"}/>
            </button>
          </div>
          <div style={{width:'40%', display:'flex', alignItems:'center'}}>
            <div style={{width:'130px', height:'7vh', border:'1px solid grey'}}>

            </div>
            <button >
              <AiOutlinePlus width={"20px"}/>
            </button>
            <h4 style={{padding:'2px 6px', border:'1px solid grey', height:'70%', width:'40px'}}>7</h4>
            <button
              >
              {console.log(product)}
              <AiOutlineMinus width={"20px"}/>
            </button>
          </div>
            </div>
          </div>
        </div>
        <CartButton style={{width:'100%'}} type='button'>UPDATE QUANTITY</CartButton>
      </div>
    </div>
  )
}
