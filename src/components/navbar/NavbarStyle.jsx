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

export const NavMenu = styled.div`
    display: flex;
    margin: 0;
`;

export const NavItem = styled.li`
    display: flex;
`;

export const NavLink = styled(Link)`
    color: #fff;
    text-decoration: none;
`;