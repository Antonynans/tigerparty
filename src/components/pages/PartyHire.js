import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import { Infosec, Container, InfoSecRow, InfoContainer, LeftsideBar, LeftsideBarHeader, LeftsideBarTitle, LeftsideBarItems, LeftsideBarLink, RightSide, Events, RowTitle, Form, FormInput, Delivery, SubTitle, InfoSecBody, TextWrapper, InfoColumn, ImgWrapper, ImgRow, Img, ImgTitle, Price, LeftsideBarLinkWrapper, FormImg  } from '../InfoSection/InfosectionStyle';
import logo from '../../images/Circus Clowns Jumping Castle.JPG';
import calendar from '../../images/logo/Calender-01.svg';
import delivery from '../../images/logo/Delivery-01.svg';
export default function PartyHire() {
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
              <LeftsideBarTitle>Marquees and Shade</LeftsideBarTitle>
              <LeftsideBarItems>
                <LeftsideBarLink borderTop='1px solid RGB(252, 115, 3)' to='/'><LeftsideBarLinkWrapper>Snow Cone Machine</LeftsideBarLinkWrapper></LeftsideBarLink>
              </LeftsideBarItems>
              <LeftsideBarItems>
                <LeftsideBarLink to='/'><LeftsideBarLinkWrapper>Tables & Dry Bars</LeftsideBarLinkWrapper></LeftsideBarLink>
              </LeftsideBarItems>
              <LeftsideBarItems>
                <LeftsideBarLink to='/'><LeftsideBarLinkWrapper>Event Linen</LeftsideBarLinkWrapper></LeftsideBarLink>
              </LeftsideBarItems>
              <LeftsideBarItems>
                <LeftsideBarLink to='/'><LeftsideBarLinkWrapper>Chairs & Stools</LeftsideBarLinkWrapper></LeftsideBarLink>
              </LeftsideBarItems>
              <LeftsideBarItems>
                <LeftsideBarLink to='/'><LeftsideBarLinkWrapper>LED Glow Furniture</LeftsideBarLinkWrapper></LeftsideBarLink>
              </LeftsideBarItems>
              <LeftsideBarItems>
                <LeftsideBarLink to='/'><LeftsideBarLinkWrapper>Bean Bags</LeftsideBarLinkWrapper></LeftsideBarLink>
              </LeftsideBarItems>
              <LeftsideBarItems>
                <LeftsideBarLink to='/'><LeftsideBarLinkWrapper>Fencing & Barriers</LeftsideBarLinkWrapper></LeftsideBarLink>
              </LeftsideBarItems>
              <LeftsideBarItems>
                <LeftsideBarLink to='/'><LeftsideBarLinkWrapper>Wine Barrel Furniture</LeftsideBarLinkWrapper></LeftsideBarLink>
              </LeftsideBarItems>
              <LeftsideBarItems>
                <LeftsideBarLink to='/'><LeftsideBarLinkWrapper>Letter Lights</LeftsideBarLinkWrapper></LeftsideBarLink>
              </LeftsideBarItems>
              <LeftsideBarItems>
                <LeftsideBarLink to='/'><LeftsideBarLinkWrapper>Pallet Furniture</LeftsideBarLinkWrapper></LeftsideBarLink>
              </LeftsideBarItems>
              <LeftsideBarItems>
                <LeftsideBarLink to='/'><LeftsideBarLinkWrapper>Crockery</LeftsideBarLinkWrapper></LeftsideBarLink>
              </LeftsideBarItems>
              <LeftsideBarItems>
                <LeftsideBarLink to='/'><LeftsideBarLinkWrapper>Eskies & Ice Tubs</LeftsideBarLinkWrapper></LeftsideBarLink>
              </LeftsideBarItems>
              <LeftsideBarItems>
                <LeftsideBarLink to='/'><LeftsideBarLinkWrapper>Heating</LeftsideBarLinkWrapper></LeftsideBarLink>
              </LeftsideBarItems>
              <LeftsideBarItems>
                <LeftsideBarLink to='/'><LeftsideBarLinkWrapper>Glassware</LeftsideBarLinkWrapper></LeftsideBarLink>
              </LeftsideBarItems>
              <LeftsideBarItems>
                <LeftsideBarLink to='/'><LeftsideBarLinkWrapper>Cutlery</LeftsideBarLinkWrapper></LeftsideBarLink>
              </LeftsideBarItems>
            </LeftsideBar>
          <InfoSecBody>
            <SubTitle>Party Hire</SubTitle>
            <TextWrapper>Our range of modern and unique party hire equipment will ensure your next event stands out whether that’ s a corporate function, private
              party, wedding, school event or just something special to remember.<br/><br/>
              We hire marquees, tables, chairs, furniture, letter lights, bean bags & so much more anywhere in Brisbane. Scroll the range below and simply
              add to cart for a quote and the ability to book your event directly online 24/7!<br/><br/>
            </TextWrapper>
            <SubTitle>Marquees and Shade</SubTitle>
            <InfoColumn>
              <ImgRow>
                <ImgWrapper>
                  <Img src={logo} alt='Marquee DIY Pop Up 3m X 3m' />
                  <ImgTitle>Marquee DIY Pop Up 3m X 3m</ImgTitle>
                  <Price>from $75.00</Price>
                </ImgWrapper>
                <ImgWrapper>
                  <Img src={logo} alt='Marquee DIY Pop Up 3m X 6m' />
                  <ImgTitle>Marquee DIY Pop Up 3m X 6m</ImgTitle>
                  <Price>from $150.00</Price>
                </ImgWrapper>
                <ImgWrapper>
                  <Img src={logo} alt='Marquee Pagoda 3m X 3m' />
                  <ImgTitle>Marquee Pagoda 3m X 3m</ImgTitle>
                  <Price>from $150.00</Price>
                </ImgWrapper>
              </ImgRow>
              <ImgRow>
                <ImgWrapper>
                  <Img src={logo} alt='Marquee Pagoda 6m X 3m' />
                  <ImgTitle>Marquee Pagoda 6m X 3m</ImgTitle>
                  <Price>from $250.00</Price>
                </ImgWrapper>
                <ImgWrapper>
                  <Img src={logo} alt='Marquee Structure 6m X 3m' />
                  <ImgTitle>Marquee Structure 6m X 3m</ImgTitle>
                  <Price>from $450.00</Price>
                </ImgWrapper>
                <ImgWrapper>
                  <Img src={logo} alt='Marquee Structure 6m X 6m' />
                  <ImgTitle>Marquee Structure 6m X 6m</ImgTitle>
                  <Price>from $650.00</Price>
                </ImgWrapper>
              </ImgRow>
              <ImgRow>
                <ImgWrapper>
                  <Img src={logo} alt='Marquee Structure 6m X 9m' />
                  <ImgTitle>Marquee Structure 6m X 9m</ImgTitle>
                  <Price>from $850.00</Price>
                </ImgWrapper>
                <ImgWrapper>
                  <Img src={logo} alt='Marquee Structure 6m X 12m' />
                  <ImgTitle>Marquee Structure 6m X 12m</ImgTitle>
                  <Price>from $1050.00</Price>
                </ImgWrapper>
              </ImgRow>
            </InfoColumn>
          </InfoSecBody>
        </InfoContainer>
        </Container>
      </Infosec>
      <Footer />
    </>
  )
}
