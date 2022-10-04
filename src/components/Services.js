import React from 'react';
import styled from 'styled-components';
import { Button } from '../globalStyle';
import { IconContext } from 'react-icons/lib';
import { cardData } from './data';


const Services = () => {
  return (
    <IconContext.Provider value={{size: 32}}>
    <ServicesSection id="/services">
        <SectionTitle >Our Services</SectionTitle>
        <ServicesContainer>
            {cardData.map((item, index) => (
            <Card key={index}>
            <Icon>
                {item.icon}
            </Icon>
            <h4>{item.title}</h4>
            <p>{item.text}</p>
            <ButtonWrapper>
            <Button>{item.buttonLabel}</Button>
            </ButtonWrapper>
        </Card>
            ))}

        </ServicesContainer>
    </ServicesSection>
    </IconContext.Provider>
  );
}

export default Services;

const ServicesSection = styled.section`
    background-color: white;
    padding: 5rem 10%;

`;

const SectionTitle = styled.h3`
    font-size: 3.5rem;
    margin-bottom: 5rem;
    text-align: center;
`;

const ServicesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    gap: 2rem;
`;

const Card = styled.div`
    padding: 2rem;
    box-shadow:0 .5rem 1rem rgba(0,0,0,.1);
    border:.1rem solid rgba(0,0,0,.1);
    border-radius: .5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: 250ms;

  h4{
    font-size: 2rem;
    margin-top: 1rem;
  }

  p{
    font-size: 1.4rem;
    text-align: center;
    line-height: 1.8;
    padding: 1rem 0;
    color: #666;
  }

  &:hover{
    background-color: #130f40;

    h4{
        color: white;
    }

    p{
        color: white;
    }
  }
`;

const Icon = styled.div`
    height: 5rem;
    width: 5rem;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:#f9d806;
    border-radius: 50%;
`;

const ButtonWrapper = styled.div``;

