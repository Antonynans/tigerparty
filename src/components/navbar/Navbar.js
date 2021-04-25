import React from 'react';
import { NavbarContainer, NavLogo, NavIcon, NavMenu, NavItem, NavLink } from './NavbarStyle';
import logo from '../../images/logo.png';

export default function Navbar() {
    return (
        <NavbarContainer>
          <NavLogo>
            <NavIcon src={logo}/>
          </NavLogo>
          <NavMenu>
            <NavItem>
              <NavLink to='/'>Jumping Castles</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/'>Fun Foods</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/'>Party Hire</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/'>FAQ</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/'>Contact</NavLink>
            </NavItem>
          </NavMenu>
        
            
        </NavbarContainer>
    )
}
