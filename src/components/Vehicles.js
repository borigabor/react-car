import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import db from '../firebase';
import { Button } from '../globalStyle';

const Vehicles = () => {

    const [cars, setCars] = useState([]);

    

    useEffect(() => {
        db.collection("Cars").onSnapshot((snapshot) =>(
            setCars(snapshot.docs.map(doc => doc.data()))
        ))
    }, [])
    

    let setting = {
        dots: true,
        infinite: true,
        centerMode: true,
        centerPadding: "40px",
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
        },
        ]
    };

  return (
    <VehiclesSection id="/vehicles">
        <SectionTitle >Popular Vehicles</SectionTitle>

        <Carousel {...setting}>
           
                {cars.map(({image, type, price, data, id}) => (
                <Wrap key={id}>
                    <img src={image} alt="" />
                    <Content>
                        <h4>{type}</h4>
                        <p>Price: <span>${price}/-</span></p>
                        <CarData>{data}</CarData>
                            <Button>Check Out</Button>
                    </Content>
                </Wrap>
                ))}
        </Carousel>

    </VehiclesSection>

  );
}

export default Vehicles;

const VehiclesSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5rem 7%;
    background-color: white;
    margin-top: 5rem;
`;

const SectionTitle = styled.h3`
    font-size: 3.5rem;
    margin-bottom: 5rem;
`;



const Carousel = styled(Slider)`
    margin-top: 2rem;
    width: 100%;
    .slick-slide {
        opacity: .7;
        padding: 1.5rem;
    }
    .slick-slide.slick-current {
        opacity: 1;
        transform: scale(1.1);
    }
`;

const Wrap = styled.div`
    cursor: pointer;
    padding: 0 4rem;
    img{
        width: 100%;
    }

`;


const Content = styled.div`
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    text-align: center;

    h4{
        font-size: 2.5rem;
        font-weight: bold;
        letter-spacing: 1.5px;
        margin-bottom: 1rem;
    }

    p{
        font-size: 1.7rem;
        color: #444;
        letter-spacing: 1.2px;
    }

    span {
        color: #f9d806;
        font-size: 2.5rem;
        font-weight: bold;

        @media screen and (max-width: 450px) {
            font-size: 1.8rem;
        }
    }
`;

const CarData = styled.p`
    margin: 2rem;
`;

