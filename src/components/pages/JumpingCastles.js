import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import { Infosec, Container, InfoSecRow, InfoContainer, LeftsideBar, LeftsideBarHeader, LeftsideBarTitle, LeftsideBarItems, LeftsideBarLink, RightSide, Events, RowTitle, Form, FormInput, Delivery, SubTitle, InfoSecBody, TextWrapper, InfoColumn, ImgWrapper, ImgRow, Img, ImgTitle, Price, LeftsideBarLinkWrapper, FormImg  } from '../InfoSection/InfosectionStyle';
import logo from '../../images/Circus Clowns Jumping Castle.JPG';
import calendar from '../../images/logo/Calender-01.svg';
import delivery from '../../images/logo/Delivery-01.svg';
export default function JumpingCastles() {
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
              <LeftsideBarTitle>Medium Bouncy jumping Castles</LeftsideBarTitle>
              <LeftsideBarItems>
                <LeftsideBarLink borderTop='1px solid RGB(252, 115, 3)' to='##'><LeftsideBarLinkWrapper>Snow Cone Machine</LeftsideBarLinkWrapper></LeftsideBarLink>
              </LeftsideBarItems>
              <LeftsideBarItems>
                <LeftsideBarLink to='##'><LeftsideBarLinkWrapper>Large Combo Jumping Castles</LeftsideBarLinkWrapper></LeftsideBarLink>
              </LeftsideBarItems>
              <LeftsideBarItems>
                <LeftsideBarLink to='##'><LeftsideBarLinkWrapper>Obstacle Courses</LeftsideBarLinkWrapper></LeftsideBarLink>
              </LeftsideBarItems>
              <LeftsideBarItems>
                <LeftsideBarLink to='##'><LeftsideBarLinkWrapper>Water Slides</LeftsideBarLinkWrapper></LeftsideBarLink>
              </LeftsideBarItems>
              <LeftsideBarItems>
                <LeftsideBarLink to='##'><LeftsideBarLinkWrapper>Inflatable Dry Slides</LeftsideBarLinkWrapper></LeftsideBarLink>
              </LeftsideBarItems>
              <LeftsideBarItems>
                <LeftsideBarLink to='##'><LeftsideBarLinkWrapper>Adults Jumping Castles</LeftsideBarLinkWrapper></LeftsideBarLink>
              </LeftsideBarItems>
              <LeftsideBarItems>
                <LeftsideBarLink to='##'><LeftsideBarLinkWrapper>Interactive Games</LeftsideBarLinkWrapper></LeftsideBarLink>
              </LeftsideBarItems>
              <LeftsideBarItems>
                <LeftsideBarLink to='##'><LeftsideBarLinkWrapper>Inflatable Sports Games</LeftsideBarLinkWrapper></LeftsideBarLink>
              </LeftsideBarItems>
              <LeftsideBarItems>
                <LeftsideBarLink to='##'><LeftsideBarLinkWrapper>Inflatable Carnival Games</LeftsideBarLinkWrapper></LeftsideBarLink>
              </LeftsideBarItems>
            </LeftsideBar>
          <InfoSecBody>
            <SubTitle>Jumping Castles</SubTitle>
            <TextWrapper>Don't Stop The Party has over 80 inflatables for hire with themes, sizes and styles to suit every occasion. Medium bouncers and large
              combos including Frozen, Minions, Disney, Pirates, Princess, Super Heroes, Jungle & more! Adults jumping castles and inflatable interactive
              games including Disco bouncers, Gladiator Cage, Bouncy Boxing and Sumo Suits.<br/><br/>
              Holding a larger event like a sports presentation or corporate fun day? Try any one of our inflatable obstacle courses or multi-player games
              like Wrecking Ball, Meltdown or Hungry Hippos!<br/><br/>
              Our experience at over 5000 events over 7 years means we are experts at helping you with any type of celebration including birthday
              parties, sporting carnivals, school fetes, corporate events, church groups and charity fundraisers. Take a look at our hire range above and
              book online or get in touch. We service and deliver to all areas in Brisbane North, Brisbane South, Brisbane East and Brisbane West.
            </TextWrapper>
            <SubTitle>Medium Bouncy Jumping Castles</SubTitle>
            <InfoColumn>
              <ImgRow>
                <ImgWrapper>
                  <Img src={logo} alt='Batman Jumping Castle' />
                  <ImgTitle>Batman Jumping Castle</ImgTitle>
                  <Price>from $175.00</Price>
                </ImgWrapper>
                <ImgWrapper>
                  <Img src={logo} alt='Frozen Jumping Castle' />
                  <ImgTitle>Frozen Jumping Castle</ImgTitle>
                  <Price>from $175.00</Price>
                </ImgWrapper>
                <ImgWrapper>
                  <Img src={logo} alt='Minions Jumping Castle' />
                  <ImgTitle>Minions Jumping Castle</ImgTitle>
                  <Price>from $175.00</Price>
                </ImgWrapper>
              </ImgRow>
              <ImgRow>
                <ImgWrapper>
                  <Img src={logo} alt='Unicorn Jumping Castle' />
                  <ImgTitle>Unicorn Jumping Castle</ImgTitle>
                  <Price>from $175.00</Price>
                </ImgWrapper>
                <ImgWrapper>
                  <Img src={logo} alt='Princess Jumping Castle' />
                  <ImgTitle>Princess Jumping Castle</ImgTitle>
                  <Price>from $175.00</Price>
                </ImgWrapper>
                <ImgWrapper>
                  <Img src={logo} alt='Celebrations Jumping Castle' />
                  <ImgTitle>Celebrations Jumping Castle</ImgTitle>
                  <Price>from $175.00</Price>
                </ImgWrapper>
              </ImgRow>
              <ImgRow>
                <ImgWrapper>
                  <Img src={logo} alt='Tropical Island Jumping Castle' />
                  <ImgTitle>Tropical Island Jumping Castle</ImgTitle>
                  <Price>from $175.00</Price>
                </ImgWrapper>
                <ImgWrapper>
                  <Img src={logo} alt='It’ s A Girl Thing Jumping Castle' />
                  <ImgTitle>It’ s A Girl Thing Jumping Castle</ImgTitle>
                  <Price>from $175.00</Price>
                </ImgWrapper>
                <ImgWrapper>
                  <Img src={logo} alt='World of Disney Jumping Castle' />
                  <ImgTitle>World of Disney Jumping Castle</ImgTitle>
                  <Price>from $175.00</Price>
                </ImgWrapper>
              </ImgRow>
              <ImgRow>
                <ImgWrapper>
                  <Img src={logo} alt='Toy Story Jumping Castle' />
                  <ImgTitle>Toy Story Jumping Castle</ImgTitle>
                  <Price>from $175.00</Price>
                </ImgWrapper>
                <ImgWrapper>
                  <Img src={logo} alt='Tinker Bell Jumping Castle' />
                  <ImgTitle>Tinker Bell Jumping Castle</ImgTitle>
                  <Price>from $175.00</Price>
                </ImgWrapper>
                <ImgWrapper>
                  <Img src={logo} alt='Racing Cars Jumping Castle' />
                  <ImgTitle>Racing Cars Jumping Castle</ImgTitle>
                  <Price>from $175.00</Price>
                </ImgWrapper>
              </ImgRow>
              <ImgRow>
                <ImgWrapper>
                  <Img src={logo} alt='Pirate Jumping Castle' />
                  <ImgTitle>Pirate Jumping Castle</ImgTitle>
                  <Price>from $175.00</Price>
                </ImgWrapper>
                <ImgWrapper>
                  <Img src={logo} alt='Circus Clowns Jumping Castle' />
                  <ImgTitle>Circus Clowns Jumping Castle</ImgTitle>
                  <Price>from $175.00</Price>
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
