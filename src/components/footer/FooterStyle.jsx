import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const TopFooter = styled.div`
    background-color: RGB(252, 115, 3);
    height: 150px;
    width: 100%;
    text-align: center;
`;

export const FooterSubHeading = styled.h3`
    color: #fff;
`;

export const Newsletter = styled.div`
    width: 100%;
`;

export const FormInput = styled.input`
    height: 50px;
    width: 50%;
    border-radius: 6px;
    border: none;
    outline: none;
`;

export const Form = styled.form`
    display: flex;
    justify-content: center;
    width: 100%;
`
export const Button = styled.button`
    color: #fff;
    background-color: black;
    height: 50px;
    border-radius: 6px;
    width: 110px;
    font-size: x-small;
    margin-left: 1%;
    border: none;


`;

export const BottomFooter = styled.div`
    background-color: black;
    display: flex;
    flex-flow: column nowrap;
    width: 100%;
    
`;

export const FooterLinksContainer = styled.div`
    display: flex;
    margin: 5%;
    // justify-content: space-around;

    @media screen and (max-width: 425px) {
        flex-flow: column;
    }
`;

export const FooterLinksItem = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    box-sizing: border-box;

`;

export const FooterLinksTitle = styled.p`
    color: RGB(252, 115, 3);
    font-size: 18px;
`;

export const FooterLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    padding: 3px;
    font-size: small;
`;

export const SocialMedia = styled.section`
    
`;

export const WebsiteRights = styled.div`
    text-align: center;
    margin-bottom: 50px;

    @media screen and (max-width: 425px){
        padding: 5px;
    }
`;

export const FooterLinkDesc = styled(Link)`
    color: #fff;
    text-decoration: none;
    font-size: x-small;
    padding: 0 3px 0 3px;
    border-left: ${({border})=>border?border: '1px solid white'};  

`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100px;

  @media screen and (max-width: 425px){
    // display: flex;
    // flex-flow: column;
    }
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;

export const FooterLinksWrapper = styled.div`
    display: flex;
    width: 70%;
    width: ${({width})=>width?width: '70%'};  

    justify-content: space-around;
    text-align: left;
    // justify-content: center;

    @media screen and (max-width: 425px) {
        // flex-direction: column;
        width: 100%;
        justify-content: space-between;

      }
`;
