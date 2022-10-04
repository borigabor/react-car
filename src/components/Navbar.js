import React, { useState } from 'react';
import { Link as LinkS } from 'react-scroll';
import styled from 'styled-components';
import { menuData } from './data';
import { FaBars } from 'react-icons/fa';
import { Button } from '../globalStyle';


const Navbar = ({toggle, showLogin}) => {

    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 60) {
            setNavbar(true);
        }else{
            setNavbar(false);
        }
    };

    window.addEventListener('scroll', changeBackground);


  return (
    <Nav navbar={navbar}>
        <NavLogo>
            <p>Max<span>wheels</span></p>
        </NavLogo>
        <MobileIcon onClick={toggle}>
            <FaBars />
        </MobileIcon>
        <NavMenu>
            {menuData.map((link, index) => (
                <NavLinks to={link.path} kex={index}>
                    {link.title}
                </NavLinks>
            ))}
        </NavMenu>
        <BtnWrapper>
        <Button onClick={showLogin}>Login</Button>
        </BtnWrapper>
        
    </Nav>
  );
}

export default Navbar;

const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 60px;
    padding: 0 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${({navbar}) => (navbar ? '#fff' : 'transparent')};
    box-shadow: ${({navbar}) => (navbar ? '0px 15px 10px -15px #111' : 'none')};
    z-index: 2;
`;

const NavLogo = styled.div`
    font-size: 3rem;
    font-weight: bold;
    cursor: pointer;

    p{
        color: #f9d806;
    }

    span{
        color: #130f40;
    }
`;

const MobileIcon = styled.div`
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    font-size: 3rem;
    cursor: pointer;
    transform: translate(-100%, 50%);
    @media screen and (max-width: 900px) {
            display: block;
    }
`;

const NavMenu = styled.div`
    display: flex;
    align-items: center;

    @media screen and (max-width: 900px) {
        display: none;
    }
`;

const NavLinks = styled(LinkS)`
    padding: 0 1.2rem;
    font-size: 2rem;
    color: #130f40;
    cursor: pointer;
    position: relative;

    &:after{
        content: "";
        height: .2rem;
        background: #f9d806;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -.6rem;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
    }

    &:hover:after {
        transform: scaleX(1);
        opacity: 1;
    }

    &:hover {
        color: #f9d806;
    }
`;

const BtnWrapper = styled.div`
    @media screen and (max-width: 900px) {
        display: none;
    }
`;