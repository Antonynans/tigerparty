import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.div`
    background-color: black;
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
    padding: 20%;
    // margin-right: 0.5rem;

`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 765px) {
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
    margin: 0;
    padding: 0;
    overflow: hidden;

    @media screen and (max-width: 765px) {
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
    }
`;

export const NavItem = styled.li`
    height: 80px;
    border-bottom: 2px solid transparent;

    &:hover {
        color: RGB(252, 115, 3);
        // border-bottom: 2px solid RGB(252, 115, 3);
    }

    @media screen and (max-width: 765px) {
        width: 100%;

        &:hover {
            border: none;
    }
`;

export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;

    @media screen and (max-height: 765px) {
        // text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;

        &:hover {
            color: RGB(252, 115, 3);
            transition: all 0.3s ease;
        }
}
`;