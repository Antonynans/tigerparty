import React from 'react';
import { Link } from 'react-router-dom';
import { Infosec, Container, InfoSecRow, LeftsideBar, LeftsideBarHeader, LeftsideBarTitle, LeftsideBarItems, LeftsideBarLink, Events, RowTitle, Form, FormInput, Delivery, SubTitle, InfoSecBody, InfoColumn, ImgWrapper, Img, ImgTitle, Price  } from './InfosectionStyle';

export default function InfoSection({ img, alt }) {
    return (
        <>
          <Infosec>
            <Container>
              <InfoSecRow>
                <LeftsideBar>
                  <LeftsideBarHeader>Categories</LeftsideBarHeader>
                  <LeftsideBarTitle></LeftsideBarTitle>
                  <LeftsideBarItems>
                    <LeftsideBarLink></LeftsideBarLink>
                  </LeftsideBarItems>
                </LeftsideBar>
                <Events>
                  <RowTitle>Event date</RowTitle>
                  <Form>
                    <FormInput name='event' type='text' placeholder='select event date' />
                    
                  </Form>
                </Events>
                <Delivery>
                  <RowTitle>Delivery</RowTitle>
                  <Form>
                    <FormInput name='delivery' type='text' placeholder='Enter in postcode' />

                  </Form>
                </Delivery>
              </InfoSecRow>
              <SubTitle></SubTitle>
              <InfoSecBody></InfoSecBody>
              <InfoColumn>
                <ImgWrapper>
                  <Img src={img} alt={alt} />
                  <ImgTitle></ImgTitle>
                  <Price></Price>
                </ImgWrapper>
              </InfoColumn>
            </Container>
          </Infosec>
        </>
    )
}
