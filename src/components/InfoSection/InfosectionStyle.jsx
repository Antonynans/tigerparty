import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { FaMagento } from 'react-icons/fa';

export const Infosec = styled.div`
  background-color: #fff;
  padding: 5%;
`;

export const Container = styled.div`
  width: 100%;
`;

export const InfoSecRow = styled.div`
  display: flex;
  justify-content: space-between;
  color: RGB(252, 115, 3);

`;

export const RightSide = styled.div`
  display: flex;
  /* width: 50%;
  justify-content: space-evenly; */
`;

export const InfoContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const LeftsideBar = styled.div`
  width: 25%;
  display: flex;
  flex-flow: column;
`;

export const LeftsideBarHeader = styled.div`

`;

export const LeftsideBarTitle = styled.div`
  margin-top: -9px;
  margin-bottom: 15px;
  font-size: small;
  color: RGB(252, 115, 3);
  font-weight: 600;

`;

export const LeftsideBarItems = styled.div`

`;

export const LeftsideBarLinkWrapper = styled.div`
  color: black;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: ${({borderBottom})=>borderBottom?borderBottom: '1px solid RGB(252, 115, 3)'};  
  border-top: ${({borderTop})=>borderTop?borderTop: 'none'};  
  font-size: small;
`;

export const LeftsideBarLink = styled(Link)`
  text-decoration: none;
`;

export const Events = styled.div`

`;

export const RowTitle = styled.div`
  margin-bottom: 15px;
  font-size: larger;
  font-weight: 700;
`;

export const Form = styled.form`
    display: flex;
    /* justify-content: center; */
    /* width: 100%; */
    margin-top: -15px;
    /* margin-bottom: 2px; */
    margin-right: 35px;
`

export const FormInput = styled.input`
  height: 30px;
  width: 70%;
  border-radius: 4px;
  font-size: small;
  text-align: center;
  outline: none;
  border: 1px solid black;
`;

export const FormImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 0;
  margin: auto;
`;

export const Delivery = styled.div`

`;

export const SubTitle = styled.div`
  color: RGB(252, 115, 3);
  text-align: center;
  font-size: large;
  font-weight: 600;
  margin-bottom: 2%;
`;




export const InfoSecBody = styled.div`
  display: flex;
  flex-flow: column;
  width: 75%;
  /* padding-left: 25px; */
  margin-left: 5%;
  margin-top: 30px;
`;

export const TextWrapper = styled.p`
  font-size: medium;
`;

export const InfoColumn = styled.div`
  /* width: 100%; */
`;

export const ImgRow = styled.div`
  display: flex;
  width: 100%;
  /* justify-content: space-between; */
  margin-bottom: 4%;
  /* padding-bottom: 8px; */

  @media screen and (max-width: 768px) {
    flex-flow: column;
    margin-bottom: 0;
  }
`;

export const ImgWrapper = styled.div`
  /* padding-top: 5px; */
  width: 30%;
  height: 16rem;
  border: 2px solid gainsboro;
  border-radius: 12px;
  display: flex;
  margin-right: 3%;
  flex-flow: column;
  /* margin-bottom: 4%; */
  
  @media screen and (max-width: 768px) {
    width: 100%;
    /* height: 20rem; */
    margin-bottom: 4%;
  }

`;

export const Img = styled.img`
  /* width: 300px; */
  height: 200px;
  border-radius: 12px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
`;

export const ImgTitle = styled.div`
  font-size: x-small;
  font-weight: 600;
  padding-top: 15px;
  padding-left: 10px;
`;

export const Price = styled(Link)`
  font-size: x-small;
  font-style: italic;
  color: RGB(252, 115, 3);
  padding-left: 10px;
  text-decoration: none;
`;

// Faq

export const SubContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin-bottom: 3%;
  padding: 5%;
  padding-bottom: 2%;
`;

export const FaqParagraph = styled.p`
  text-align: center;
  font-style: italic;
  font-size: medium;
  /* padding: 2%; */
`;

export const FaqDiv = styled.div`
  display: flex;
  /* width: 100%; */
  margin-right: 0;
  margin-left: -2%;

  @media screen and (max-width: 768px) {
    flex-flow: column;
    width: 100%;
    /* margin: 0; */
  }
`;

export const FaqColumn = styled.div`
  width: 50%;
  /* padding: 2%; */


  @media screen and (max-width: 768px) {
    width: initial;
    padding: 0 2% 0 2%;
  }
`;

export const FaqTextwrapper = styled.p`
  font-size: small;
  /* text-align: center; */
  background-color: pink;
  padding: 3% 4% 3% 4%;
  margin-left: 5%;

  @media screen and (max-width: 768px) {
    margin-left: 0;
    margin-right: 0;
  }

`;

export const ContactRow = styled.div`
  display: flex;
  margin-left: -2%;
  margin-right: -2%;

  @media screen and (max-width: 768px) {
    flex-flow: column;
    width: 100%;
  }
`;

export const SubContact = styled.div`
  border: 1px solid lightpink;
  background-color: lightpink;
  margin: 2% 30px;
  padding: 1% 1% 2% 1%;
  width: 100%;
  text-align: center;

  @media screen and (max-width: 768px) {
    width: initial;
  }
`;

export const FaqIcon = styled.img`
  width: 80px;
  height: 60px;
`;

export const IconTitle = styled.div`
  font-weight: 600;
  padding-bottom: 3%;
`;

export const IconText = styled.div`

`;

export const FaqLink = styled(Link)`
  text-decoration: none;
  color: RGB(252, 115, 3);
`;

// contact
export const ContactForm = styled.form`
  padding: 1%;
`;

export const ContactFormInput = styled.input`
  width: 100%;
  margin-bottom: 5%;
  padding-bottom: 10%;
  border: 1px solid RGB(252, 115, 3);
  border-radius: 5px;
  outline: none;
`;

export const ButtonDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const ContactFormButton = styled.button`
  height: 50px;
  width: 250px;
  background-color: RGB(252, 115, 3);
  color: #fff;
  border-radius: 5px;
`;

export const Label = styled.label`
  /* top: 129px; */
  font-size: small;
  margin-bottom: 2%;
`;

export const FormDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const InputDiv = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  padding: 0 9px;
`;

// cart
export const CartContainer = styled.div`
  width: 50%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const CartSubtitle = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const CartButton = styled.button`
  width: ${({width})=>width?width: '121px'};
  height: 40px;
  border-radius: 6px;
  background-color: ${({bcolor})=>bcolor?bcolor: '#fff'};
  border: ${({border})=>border?border: '1px solid RGB(252, 115, 3)'};
  color: ${({color})=>color?color: 'RGB(252, 115, 3)'};
  font-size: small;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5%;
`;

export const QtyDiv = styled.div`
  /* width: 75%; */
  display: flex;
  /* width: 100%; */
  justify-content: flex-end;
  margin-left: 3%;
`;

export const Qty = styled.h5`
  display: flex;
  align-items: center;
  padding-right: 20%;
  /* margin-left: 10%; */
`;

export const CartImg = styled.img`
  width: 100%;
  max-height: 150px;
  /* border-radius: 6%; */
`;