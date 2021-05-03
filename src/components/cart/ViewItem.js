import React, { useContext } from 'react';
import { Price, SubTitle } from '../InfoSection/InfosectionStyle';
import { formatNumber } from '../../helpers/utils';
import { CartContext } from '../../contexts/CartContext';
import { ProductsContext } from '../../contexts/ProductsContext';
// import '..marqueeModal/MarqueeModalStyle.css';


const ViewItem = () => {

  const { product} = useContext(ProductsContext).products

  // const { addProduct, cartItems, increase } = useContext(CartContext);

 
  return (
    <>
    <div className="modal-details">
            <div className="sub-header">{product.name}</div>
            <div className="price">From {formatNumber(product.price)}</div>
            <div className="description">Description</div>
            {/* <div className="modal-text">The main stay of any backyard party, sports event and school fete, the humble marquee
              provides shelter, shade and a temporary house for the day!<br/><br/>
              Our pop up marquees are commercial quality, easy to set up for 1or 2 people and feature a
              heavy duty design far superior to those cheap and nasty gazebos regularly hired out.<br/><br/>
              Our DIY hire pop up marquees feature a frame and roof over 50%stronger than regular
              competitors and a set up time of under 5minutes!
              </div> */}
              {/* <div className="info-container">
              <div className="info-detail-container">
              <div className="info-details">Strength</div>
              <div className="info-details">Height</div>
              <div className="info-details">Clearance</div>
              <div className="info-details">Main profile size</div>
              <div className="info-details">Material</div>
              <div className="info-details">Push button system</div>
              <div className="info-details">Colors</div>
              <div className="info-details">Walls</div>
              </div>
              <div className="info-detail-container">
              <div className="info-detail">Yes</div>
              <div className="info-detail">3.29</div>
              <div className="info-detail">3m</div>
              <div className="info-detail">45mm</div>
              <div className="info-detail">Steel</div>
              <div className="info-detail">yes</div>
              <div className="info-detail">(pending availability)</div>
              <div className="info-detail">Available (additional cost - add in checkout)</div>
              </div>
              </div> */}
              <div className="button" type="button">VIEW DETAILS</div>

          </div>
    </>
  )
}
export default ViewItem;
