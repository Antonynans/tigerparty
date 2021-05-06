import React, { createContext, useContext, useState } from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import { Infosec, Container, InfoSecRow, InfoContainer, LeftsideBar, LeftsideBarHeader, LeftsideBarTitle, LeftsideBarItems, LeftsideBarLink, RightSide, Events, RowTitle, Form, FormInput, Delivery, SubTitle, InfoSecBody, TextWrapper, InfoColumn, ImgWrapper, Img, ImgTitle, Price, LeftsideBarLinkWrapper, FormImg  } from '../InfoSection/InfosectionStyle';
import logo from '../../images/Circus Clowns Jumping Castle.JPG';
import calendar from '../../images/logo/Calender-01.svg';
import delivery from '../../images/logo/Delivery-01.svg';
import Modal from '../marqueeModal/MarqueeModal';
import useModal from '../marqueeModal/useModal';
import { formatNumber } from '../../helpers/utils';
import { ProductsContext } from '../../contexts/ProductsContext';

// export const FunFoodsContext = createContext();

export default function FunFoods({ children }) {
  const {isShowing, toggle} = useModal();
  const {product} = useContext(ProductsContext)

  return (
    <>
      <Navbar />
      <Infosec>
        <Container>
          <InfoSecRow>
            <RowTitle>Categories</RowTitle>

            
            <RightSide>
              <Events>
                <RowTitle>Event date</RowTitle>
                <Form>
                  <FormInput name='events' type='date' placeholder='select event date' />
                  <FormImg src={calendar} alt='calendar' />

                </Form>
              </Events>
              <Delivery>
                <RowTitle>Delivery</RowTitle>
                <Form>
                  <FormInput name='delivery' type='text' placeholder='Enter in postcode' />
                  <FormImg src={delivery} alt='delivery' />

                </Form>
              </Delivery>
            </RightSide>
          </InfoSecRow>
          <InfoContainer>
          <LeftsideBar>
              <LeftsideBarTitle>Popcorn Machine</LeftsideBarTitle>
              <LeftsideBarItems>
                <LeftsideBarLink borderTop='1px solid RGB(252, 115, 3)' to='##'><LeftsideBarLinkWrapper>Snow Cone Machine</LeftsideBarLinkWrapper></LeftsideBarLink>
              </LeftsideBarItems>
              <LeftsideBarItems>
                <LeftsideBarLink to='##'><LeftsideBarLinkWrapper>Fairy Floss Machine</LeftsideBarLinkWrapper></LeftsideBarLink>
              </LeftsideBarItems>
              <LeftsideBarItems>
                <LeftsideBarLink to='##'><LeftsideBarLinkWrapper>Slushie Cocktail Machine</LeftsideBarLinkWrapper></LeftsideBarLink>
              </LeftsideBarItems>
              <LeftsideBarItems>
                <LeftsideBarLink to='##'><LeftsideBarLinkWrapper>Hot Dog Steamer</LeftsideBarLinkWrapper></LeftsideBarLink>
              </LeftsideBarItems>
            </LeftsideBar>
          <InfoSecBody>
          <SubTitle>Fun Foods</SubTitle>
          <TextWrapper>We have a great range of add-on carnival & concession equipment available for hire around Brisbane. Make cinema quality popcorn, side show style fairy floss or cool down with snow cones and slushies!<br/><br/>
          Our hire packages come with absolutely everything you need to either consume or re-sell fun foods at your birthday, school event, markets or corporate event.
          </TextWrapper>
          <SubTitle>Popcorn Machine</SubTitle>
          <InfoColumn>
            <ImgWrapper>
              <Img src={logo} alt='popcorn machine' />
              <ImgTitle >Popcorn Machine</ImgTitle>
              <Price onClick={toggle} >from 125.00</Price>
            </ImgWrapper>
            <Modal isShowing={isShowing} hide={toggle} />
          </InfoColumn>
          </InfoSecBody>
          </InfoContainer>
        </Container>
      </Infosec>
      <Footer />
    </>
  )
}
