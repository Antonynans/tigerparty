import React, { useState, useEffect } from 'react';
import { NavbarContainer, NavLogo, NavIcon, MobileIcon, NavMenu, NavItem, NavLink } from './NavbarStyle';
import logo from '../../images/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';


export default function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
        <IconContext.Provider value={{ color: '#fff' }}>
        <NavbarContainer>
          <NavLogo to='/' onClick={closeMobileMenu}>
            <NavIcon src={logo}/>
          </NavLogo>
          <MobileIcon onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}    
          </MobileIcon> 
          <NavMenu onClick={handleClick} click={click}>
            <NavItem>
              <NavLink to='/' onClick={closeMobileMenu}>Jumping Castles</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/' onClick={closeMobileMenu}>Fun Foods</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/' onClick={closeMobileMenu}>Party Hire</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/' onClick={closeMobileMenu}>FAQ</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/' onClick={closeMobileMenu}>Contact</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/' onClick={closeMobileMenu}></NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/' onClick={closeMobileMenu}></NavLink>
            </NavItem>
          </NavMenu>
        
            
        </NavbarContainer>
        </IconContext.Provider>
        </>
    )
}
