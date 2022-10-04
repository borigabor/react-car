import React, { useEffect } from 'react'
import styled from 'styled-components';
import { IconContext } from 'react-icons/lib';
import { Button } from '../globalStyle';
import { IoHome } from 'react-icons/io5';
import { AiFillCar } from 'react-icons/ai';
import { FaUsers } from 'react-icons/fa';
import imageBg from '../image/home-img.png';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Hero = () => {

  useEffect(() => {
    AOS.init({duration: 2000,
    });
  }, [])

  return (
    <IconContext.Provider value={{size: 32}}>
    <HeroSection id="/home">
      <HeroWrapper>
      <HeroTitle data-aos="zoom-in">
        Find Your Car
      </HeroTitle>
      <HeroImage>
        <img src={imageBg} alt="" />
      </HeroImage>
      <BtnWrapper>
        <Button>Explore Cars</Button>
      </BtnWrapper>
      </HeroWrapper>
      <CardsContainer>
          <CardsWrapper>
              <Card>
                <CardIcon>
                  <IoHome />
                </CardIcon>
                <CardContent>
                  <span>150+</span>
                  <p>Branches</p>
                </CardContent>
              </Card>
              <Card>
                <CardIcon>
                  <AiFillCar />
                </CardIcon>
                <CardContent>
                  <span>4770+</span>
                  <p>Cars Sold</p>
                </CardContent>
              </Card>
              <Card>
                <CardIcon>
                  <FaUsers />
                </CardIcon>
                <CardContent>
                  <span>320+</span>
                  <p>Happy Clients</p>
                </CardContent>
              </Card>
              <Card>
                <CardIcon>
                  <AiFillCar />
                </CardIcon>
                <CardContent>
                  <span>1500+</span>
                  <p>New Cars</p>
                </CardContent>
              </Card>
          </CardsWrapper>
      </CardsContainer>
    </HeroSection>
    </IconContext.Provider>
  )
}

export default Hero

const HeroSection = styled.section`
    background-color: white;
`;

const HeroWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 10rem;
    padding: 3rem 7%;
`;


const HeroTitle = styled.h1`
  font-size: clamp(5rem, 15vw, 7rem);
  text-transform: uppercase;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

const HeroImage = styled.div`
  width: 80vw;
  padding: 3rem 0;

  img{
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const BtnWrapper = styled.div``;

const CardsContainer = styled.div`
  padding: 3rem 10%;
  width: 100%;
  background-color: #eee;
`;

const CardsWrapper = styled.div`
  display: grid;
  grid-gap: 2.5rem;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Card = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: .5rem;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  border: 3px solid rgba(249, 249, 249, .1);
  padding: 2rem;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  &:hover {
     border-color: rgba(249, 249, 249, .8);
     box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
     transform: scale(1.05);
     background-color: #130f40;
  }
`;

const CardIcon = styled.div`
  margin-right: 1.4rem;
  background-color: #eee;
  padding: 1rem;
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardContent = styled.div`
  
  span{
    color: #f9d806;
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: .7rem;
  }

  p{
    color: #666666;
    font-size: 1.7rem;
  }
`;