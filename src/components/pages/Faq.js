import React from 'react';
import { ContactRow, FaqColumn, SubContainer, FaqDiv, FaqIcon, FaqLink, FaqParagraph, FaqTextwrapper, IconText, IconTitle, SubContact, SubTitle } from '../InfoSection/InfosectionStyle';
import cart from '../../images/logo/Cart-01.svg';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';


export default function Faq() {
  return (
    <>
      <Navbar />
        <SubContainer>
          <FaqParagraph>
          Got questions? The most commonly asked questions are all answered below!
          </FaqParagraph>
          <SubTitle>GENERAL QUESTIONS</SubTitle>
          <FaqDiv>
          <FaqColumn>
            <FaqTextwrapper>HOW DO I KNOW IF AN ITEM IS AVAILABLE ON MY EVENT DATE?</FaqTextwrapper>
            <FaqTextwrapper>HOW LONG IS THE HIRE PRICE FOR?</FaqTextwrapper>
            <FaqTextwrapper>HOW DO I MAKE A BOOKING?</FaqTextwrapper>
            <FaqTextwrapper>HOW MUCH IS DELIVERY?</FaqTextwrapper>
            <FaqTextwrapper>WHEN WILL YOU DELIVER MY ORDER?</FaqTextwrapper>
            <FaqTextwrapper>WHAT IS THE DIFFERENCE BETWEEN "STANDARD" DELIVERY
              AND "NON STANDARD DELIVERY"?</FaqTextwrapper>
          </FaqColumn>
          <FaqColumn>
            <FaqTextwrapper>WHEN DO WE HAVE TO PAY?</FaqTextwrapper>
            <FaqTextwrapper>CAN YOU SUPPLY US AN INVOICE FOR PAYMENT?</FaqTextwrapper>
            <FaqTextwrapper>DO YOU HAVE INSURANCE?</FaqTextwrapper>
            <FaqTextwrapper>CAN I COME AND PICK UP FROM YOUR WAREHOUSE?</FaqTextwrapper>
            <FaqTextwrapper>WHAT IS YOUR CANCELLATION/POSTPONEMENT POLICY?</FaqTextwrapper>
            <FaqTextwrapper>DO YOU SET UP THE EQUIPMENT?</FaqTextwrapper>
          </FaqColumn>
          </FaqDiv>
          <hr color='black' width='99%' style={{ height: '3px', marginTop: '5%' }} /><br/><br/>

          <SubTitle>STILL STUCK?</SubTitle>
          <ContactRow>
            <SubContact>
              <FaqIcon to='/' src={cart} alt='email' />
              <IconTitle>Email</IconTitle>
              <IconText>For any non urgent inquiries, email us using the form on the <FaqLink to='/contact'>Contact Us </FaqLink>page.<br/><br/>
                We respond to all inquiries <br/>within 1 business day. </IconText>
            </SubContact>
            <SubContact>
              <FaqIcon to='/' src={cart} alt='sms' />
              <IconTitle>SMS</IconTitle>
              <IconText>SMS us on <FaqLink>0409 222 452</FaqLink> for any inquiries<br/>
                (MON FRI, 8AM 4PM)<br/><br/>
                N.B. This mobile does not receive incoming calls TEXT only</IconText>
            </SubContact>
            <SubContact>
              <FaqIcon to='/' src={cart} alt='phone' />
              <IconTitle>Phone</IconTitle>
              <IconText>Like the old school way of getting things done?<br/><br/>
              Phone us MON FRI, 8AM 4PM <br/><FaqLink>07 3177 3316</FaqLink></IconText>
            </SubContact>
          </ContactRow>
        </SubContainer>
      <Footer />
    </>
  )
}
