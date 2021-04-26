import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import { Infosec, Container, InfoSecRow, LeftsideBar, LeftsideBarHeader, LeftsideBarTitle, LeftsideBarItems, LeftsideBarLink, RightSide, Events, RowTitle, Form, FormInput, Delivery, SubTitle, InfoSecBody, InfoColumn, ImgWrapper, Img, ImgTitle, Price  } from '../InfoSection/InfosectionStyle';

export default function Home() {
  return (
    <>
      <Navbar />
      <Infosec>
        <Container>
          <InfoSecRow>
            <LeftsideBar>
              <RowTitle>Categories</RowTitle>
              <LeftsideBarTitle>Popcorn Machine</LeftsideBarTitle>
              <LeftsideBarItems>
                <LeftsideBarLink borderTop='1px solid RGB(252, 115, 3)'>Snow Cone Machine</LeftsideBarLink>
              </LeftsideBarItems>
              <LeftsideBarItems>
                <LeftsideBarLink>Fairy Floss Machine</LeftsideBarLink>
              </LeftsideBarItems>
              <LeftsideBarItems>
                <LeftsideBarLink>Slushie Cocktail Machine</LeftsideBarLink>
              </LeftsideBarItems>
              <LeftsideBarItems>
                <LeftsideBarLink>Hot Dog Steamer</LeftsideBarLink>
              </LeftsideBarItems>
            </LeftsideBar>
            <RightSide>
              <Events>
                <RowTitle>Event date</RowTitle>
                <Form>
                  <FormInput name='events' type='text' placeholder='select event date' />
                  
                </Form>
              </Events>
              <Delivery>
                <RowTitle>Delivery</RowTitle>
                <Form>
                  <FormInput name='delivery' type='text' placeholder='Enter in postcode' />

                </Form>
              </Delivery>
            </RightSide>
          </InfoSecRow>
          <InfoSecBody>
          <SubTitle>Fun Foods</SubTitle>
          <InfoColumn>
            <ImgWrapper>
              <Img  alt='' />
              <ImgTitle></ImgTitle>
              <Price></Price>
            </ImgWrapper>
          </InfoColumn>
          </InfoSecBody>
        </Container>
      </Infosec>
      <Footer />
    </>
  )
}
