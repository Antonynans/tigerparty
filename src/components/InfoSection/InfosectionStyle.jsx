import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

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
  width: 50%;
  justify-content: space-evenly;
`;

export const LeftsideBar = styled.div`
  width: 25%;
  display: flex;
  flex-flow: column;
`;

export const LeftsideBarHeader = styled.div`

`;

export const LeftsideBarTitle = styled.div`

`;

export const LeftsideBarItems = styled.div`

`;

export const LeftsideBarLink = styled.div`
  color: black;
  padding-top: 10px;
  border-bottom: ${({borderBottom})=>borderBottom?borderBottom: '1px solid RGB(252, 115, 3)'};  
  border-top: ${({borderTop})=>borderTop?borderTop: 'none'};  

`;

export const Events = styled.div`

`;

export const RowTitle = styled.div`

`;

export const Form = styled.form`
    display: flex;
    /* justify-content: center; */
    width: 100%;
`

export const FormInput = styled.input`
  height: 30px;
  width: 70%;
  border-radius: 4px;
  font-size: small;
  text-align: center;
  /* border: none; */
`;

export const Delivery = styled.div`

`;

export const SubTitle = styled.div`
  color: RGB(252, 115, 3);
  text-align: center;
`;

export const InfoSecBody = styled.div`

`;

export const InfoColumn = styled.div`

`;

export const ImgWrapper = styled.div`

`;

export const Img = styled.div`

`;

export const ImgTitle = styled.div`

`;

export const Price = styled.div`

`;
