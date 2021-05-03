import React, { useState, useEffect, useContext } from 'react';
import { NavbarContainer, NavLogo, NavIcon, MobileIcon, NavMenu, NavItem, NavLink, ItemIcon } from './NavbarStyle';
import { CartContext } from '../../contexts/CartContext';
import tiger from '../../images/logo/TigerPart Logo-01.svg';
import search from '../../images/logo/Search-01.svg';
import cart from '../../images/logo/Cart-01.svg';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';


export default function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const {itemCount} = useContext(CartContext);

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
            <NavIcon src={tiger} alt='tigerLogo' />
          </NavLogo>
          <MobileIcon onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}    
          </MobileIcon> 
          <NavMenu onClick={handleClick} click={click}>
            <NavItem>
              <NavLink to='/jumpingcastles' onClick={closeMobileMenu}>Jumping Castles</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/funfoods' onClick={closeMobileMenu}>Fun Foods</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/partyhire' onClick={closeMobileMenu}>Party Hire</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/faq' onClick={closeMobileMenu}>FAQ</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/contact' onClick={closeMobileMenu}>Contact</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/' onClick={closeMobileMenu}><ItemIcon src={search} alt='search'/></NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/cart' onClick={closeMobileMenu}><ItemIcon src={cart} alt='cart'/>({itemCount})</NavLink>
            </NavItem>
          </NavMenu>
        
            
        </NavbarContainer>
        </IconContext.Provider>
        </>
    )
}
