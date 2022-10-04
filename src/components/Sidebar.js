import React from 'react';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { menuData } from './data';
import { Link as LinkS } from 'react-scroll';
import { Button } from '../globalStyle';


const Sidebar = ({isOpen, toggle, showLogin}) => {
  return (
    <SidebarContainer onClick={toggle} isOpen={isOpen}>
        <CloseIcon onClick={toggle}>
            <FaTimes />
        </CloseIcon>
        <SidebarMenu>
            {menuData.map((link, index) =>(
                <NavLinks to={link.path} key={index}>
                    {link.title}
                </NavLinks>
            ))}
        </SidebarMenu>
        <BtnWrapper>
             <Button onClick={showLogin} menuBtn="ture" bigBtn="true">Login</Button>
        </BtnWrapper>
    </SidebarContainer>
  );
}

export default Sidebar;

const SidebarContainer = styled.nav`
    position: fixed;
    top: 0;
    right: ${({isOpen}) => (isOpen ? '0' : '-100%')};
    opacity: ${({isOpen}) => (isOpen ? '1' : '0')};
    width: 300px;
    height: 100vh;
    background-color: #ffee80;
    z-index: 999;
    display: grid;
    align-items: center;
    transition: all 250ms;

    @media screen and (max-width: 400px) {
        width: 100%;
    }
`;

const CloseIcon = styled.div`
    position: absolute;
    top: 1.5rem;
    right: 2rem;
    font-size: 3rem;
    cursor: pointer;
`;

const SidebarMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 400px) {
        grid-template-rows: repeat(6, 60px);
    }
`;

const NavLinks = styled(LinkS)`
    font-size: 2rem;
    cursor: pointer;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    &:hover{
        color: #f9d806;
    }
`;

const BtnWrapper = styled.div`
   width: 90%;
   margin-right: auto;
   margin-left: auto;
`;