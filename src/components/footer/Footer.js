import React from 'react';
import { FooterContainer, TopFooter, FooterSubHeading, Newsletter, Form, FormInput, Button, BottomFooter, FooterLinksContainer, FooterLinksItem, FooterLinksTitle, FooterLink, SocialMedia, WebsiteRights, FooterLinkDesc, SocialIcons, SocialIconLink, FooterLinksWrapper } from './FooterStyle';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
    return (
      <>
        <FooterContainer>
          <TopFooter>
            <FooterSubHeading>
              Stay in touch
            </FooterSubHeading>
            <Newsletter>
              <Form>
                <FormInput id='email' type='email'
                  placeholder="Join our mailing list" 
                />
                <Button>SUBSCRIBE</Button>
              </Form>
            </Newsletter>
          </TopFooter>  
          <BottomFooter>
            <FooterLinksContainer>
              <FooterLinksWrapper>
                <FooterLinksItem>
                  <FooterLinksTitle>Popular Pages</FooterLinksTitle>
                  <FooterLink to='/'>Backyard Parties</FooterLink>
                  <FooterLink to='/'>Weddings</FooterLink>
                  <FooterLink to='/'>Business/Corporate</FooterLink>
                  <FooterLink to='/'>Sporting clubs</FooterLink>
                  <FooterLink to='/'>School Events</FooterLink>
                  <FooterLink to='/'>Community/Public</FooterLink>
                </FooterLinksItem>

                <FooterLinksItem>
                <FooterLinksTitle>Quick Links</FooterLinksTitle>
                <FooterLink to='/'>Home</FooterLink>
                <FooterLink to='/'>Delivery</FooterLink>
                <FooterLink to='/'>Reviews</FooterLink>
                <FooterLink to='/'>FAQ</FooterLink>
                <FooterLink to='/'>Party Hire</FooterLink>
                </FooterLinksItem>
              </FooterLinksWrapper>
              <FooterLinksWrapper width='30%'>
              <FooterLinksItem>
                  <FooterLinksTitle>Contact Us</FooterLinksTitle>
                  <SocialMedia>
                    <SocialIcons>
                      <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                        <FaFacebook />
                      </SocialIconLink>
                      <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                        <FaInstagram />
                      </SocialIconLink>
                      <SocialIconLink href='https://www.linkedin.com/in/' target='_blank' aria-label='LinkedIn'>
                        <FaLinkedin />
                      </SocialIconLink>
                      <SocialIconLink href='https://www.twitter.com/' target='_blank' aria-label='Twitter'>
                        <FaTwitter />
                      </SocialIconLink>
                      
                    </SocialIcons>
                  </SocialMedia>
                </FooterLinksItem>
              
              </FooterLinksWrapper>
            </FooterLinksContainer>
            <WebsiteRights>
              <FooterLinkDesc border='none'>@ 2021</FooterLinkDesc>
              <FooterLinkDesc to='/'>Tiger Party Hire</FooterLinkDesc>
              <FooterLinkDesc to='/'>Jumping Castle Hire Brisbane</FooterLinkDesc>
              <FooterLinkDesc to='/'>Party Hire Brisbane</FooterLinkDesc>
              <FooterLinkDesc to='/'>Letter Light Hire Brisbane</FooterLinkDesc>
            </WebsiteRights>
          </BottomFooter>
        </FooterContainer>
      </>
    )
}
