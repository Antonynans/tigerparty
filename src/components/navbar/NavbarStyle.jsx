import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.div`
  background-color: ${({bcolor})=>bcolor?bcolor: 'black'};
    display: flex;
    justify-content: space-between;
    height: 80px;
`;

export const NavLogo = styled(Link)`
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
`;

export const NavIcon = styled.img`
    width: 100px;
    /* padding: 0 20%; */
    /* padding-left: 30%; */
    margin-left: 30px;
    height: 100%;
    // margin-right: 0.5rem;

`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block; 
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    /* padding: 0; */
    padding-right: 20px;
    overflow: hidden;

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 90vh;
        position: absolute;
        top: 80px;
        left: ${({click}) => (click ? 0 : '-100%')};
        opacity: 1;
        transition: all 0.5s ease;
        background: #101522;
        padding: 0;
        margin: 0;

    }
`;

export const NavItem = styled.li`
    height: 80px;
    border-bottom: 2px solid transparent;
    font-size: small;

    &:hover {
        color: RGB(252, 115, 3);
        // border-bottom: 2px solid RGB(252, 115, 3);
    }

    @media screen and (max-width: 768px) {
        width: 100%;

        &:hover {
            border: none;
        }
    }
`;

export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;
    justify-content: center;

    @media screen and (max-height: 768px) {
        /* text-align: center; */
        padding: 2rem;
        width: 100%;
        display: table;

        &:hover {
            color: RGB(252, 115, 3);
            transition: all 0.3s ease;
        }
}
`;

export const ItemIcon = styled.img`
    width: 50px;
    margin-top: -10%;
    height: 40px;
    

    @media screen and (max-width: 768px) {
        margin-top: 0;
    }
`;
