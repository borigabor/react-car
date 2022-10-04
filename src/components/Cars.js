import React, { useState, useEffect} from 'react';
import styled from 'styled-components';
import db from '../firebase';
import { Button } from '../globalStyle';


const Cars = () => {

    const [car, setCar] = useState([]);

    useEffect(() => {
        db.collection("Cars2").onSnapshot((snapshot) => (
            setCar(snapshot.docs.map(doc => doc.data()))
        ))
    }, [])
    

  return (
    <CarsSection id="/featured">
        <SectionTitle>
            Featured Cars
        </SectionTitle>
        <CarsContainer>
            {car.map(({image, type, text, price}) =>(
                <Card>
                    <img src={image} alt="" />
                    <h4>{type}</h4>
                    <p>{text}</p>
                    <span>${price}/-</span>
                    <ButtonWrapper>
                        <Button>Check Out</Button>
                    </ButtonWrapper>
                </Card>

            ))}
        </CarsContainer>
    </CarsSection>
  );
}

export default Cars;

const CarsSection = styled.section`
    background-color: white;
    padding: 5rem 10%;
`;

const SectionTitle = styled.h3`
    font-size: 3.5rem;
    margin-bottom: 5rem;
    text-align: center;
`;

const CarsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    gap: 2rem;
`;

const Card = styled.div`
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow:0 .5rem 1rem rgba(0,0,0,.1);
    border:.1rem solid rgba(0,0,0,.1);
    border-radius: .5rem;
    cursor: pointer;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    &:hover {
        transform: scale(1.07);
    }

    img{
        height: 15rem;
        margin-bottom: 1rem;
    }

    h4{
        font-size: 2rem;
    }

    p{
        padding: 1rem;
        font-size: 1.4rem;
        color: #666;
        text-align: center;
    }

    span {
        font-size: 2.5rem;
        font-weight: bold;
        margin-bottom: 2rem;
    }
`;

const ButtonWrapper = styled.div``;