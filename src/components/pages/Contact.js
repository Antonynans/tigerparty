import React from 'react'
import Footer from '../footer/Footer'
import { ButtonDiv, ContactForm, ContactFormButton, ContactFormInput, ContactRow, FaqIcon, FaqLink, FaqParagraph, FormDiv, IconText, IconTitle, InputDiv, Label, SubContact, SubContainer, SubTitle } from '../InfoSection/InfosectionStyle'
import Navbar from '../navbar/Navbar';
import cart from '../../images/logo/Cart-01.svg';

export default function Contact() {
  return (
    <>
      <Navbar />
      <SubContainer>
        <SubTitle>GENERAL QUESTIONS</SubTitle>
        <FaqParagraph>Fill out the details below and one of our party people will be in touch within 1 business day!</FaqParagraph>
        <ContactForm>
          <FormDiv>
            <InputDiv>
          <Label>First Name: </Label>
            <ContactFormInput
            type='text' id='firstName' 
            />
            </InputDiv>
            <InputDiv>

            <Label>Last Name: </Label>
            <ContactFormInput
            type='text' id='lastName' 
            />
            </InputDiv>
            <InputDiv>
            <Label>Email:</Label>
            <ContactFormInput
            type='text' id='email' 
            />
            </InputDiv>
           </FormDiv>
           <FormDiv>
            <InputDiv>
            <Label>Mobile Phone:</Label>
            <ContactFormInput
            type='phone' id='phoneNumber' 
            />
            </InputDiv>
            <InputDiv>
            <Label>Suburb:</Label>
            <ContactFormInput
            type='text' id='suburb' 
            />
            </InputDiv>
            <InputDiv>
            <Label>Postcode:</Label>
            <ContactFormInput
            type='phone' id='postcode' 
            />
            </InputDiv>
           </FormDiv>
           <FormDiv>
            <InputDiv>
            <Label>Hire Start Date:</Label>
            <ContactFormInput
            type='text' id='startdate' 
            />
            </InputDiv>
            <InputDiv>
            <Label>Hire End Date:</Label>
            <ContactFormInput
            type='text' id='enddate' 
            />
            </InputDiv>
            <InputDiv>            
            <Label>Start Time:</Label>
            <ContactFormInput
            type='text' id='starttime' 
            />
            </InputDiv>
            <InputDiv>
            <Label>End Time</Label>
            <ContactFormInput
            type='text' id='endtime' 
            />
            </InputDiv>
           </FormDiv>
           <InputDiv style={{ width: '99%'}}>
           <Label>Products you are interested in and message:</Label>
           <ContactFormInput 
           type='textbox' id='message'
           />
           </InputDiv>
           <ButtonDiv>
            <ContactFormButton type='button'>SEND MESSAGE</ContactFormButton>
           </ButtonDiv>
        </ContactForm>

        <ContactRow>
            <SubContact>
              <FaqIcon to='##' src={cart} alt='email' />
              <IconTitle>Email</IconTitle>
              <IconText>For any non urgent inquiries, email us using the form on the <FaqLink to='##contact'>Contact Us </FaqLink>page.<br/><br/>
                We respond to all inquiries <br/>within 1 business day. </IconText>
            </SubContact>
            <SubContact>
              <FaqIcon to='##' src={cart} alt='sms' />
              <IconTitle>SMS</IconTitle>
              <IconText>SMS us on <FaqLink>0409 222 452</FaqLink> for any inquiries<br/>
                (MON FRI, 8AM 4PM)<br/><br/>
                N.B. This mobile does not receive incoming calls TEXT only</IconText>
            </SubContact>
            <SubContact>
              <FaqIcon to='##' src={cart} alt='phone' />
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
