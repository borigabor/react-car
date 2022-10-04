import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
            <p>Copyright © 2022 MaxWheels Website</p>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.div`
    width: 100%;
    height: 15rem;
    background-color: #130f40;
    display: flex;
    align-items: center;
    justify-content: center;

    p{
        font-size: 2rem;
        color: white;
        letter-spacing: 1.4px;
        font-style: italic;
    }
`;

