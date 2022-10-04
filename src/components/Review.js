import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import db from '../firebase';

const Review = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        db.collection("Users").onSnapshot((snapshot) => (
            setUsers(snapshot.docs.map(doc => doc.data()))
        ))
    }, [])
    

    let setting = {
        infinite: true,
        centerMode: true,
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
            }
        },
        ]
    };

  return (
    <ReviewSection id="/reviews">
        <SectionTitle>Client Review</SectionTitle>
        <ReviewContainer {...setting}>
            {users.map(({image, text, name, id}) => (
                <UserCard key={id}>
                    <img src={image} alt="" />
                    <Content>
                    <p>{text}</p>
                    <h4>{name}</h4>
                    </Content>
                 </UserCard>
            ))}

        </ReviewContainer>
    </ReviewSection>
  );
}

export default Review;

const ReviewSection = styled.section`
    background-color: white;
    padding: 5rem 10%;
`;

const SectionTitle = styled.h3`
    font-size: 3.5rem;
    margin-bottom: 5rem;
    text-align: center;
`;

const ReviewContainer = styled(Slider)`
    width: 100%;
    margin-top: 2rem;
    .slick-slide {
        opacity: .7;
        padding: 3rem 6rem;
    }
    .slick-slide.slick-current {
        opacity: 1;
        transform: scale(1.07);
    }
`;

const UserCard = styled.div`
    padding: 2rem;
    box-shadow:0 .5rem 1rem rgba(0,0,0,.1);
    border:.1rem solid rgba(0,0,0,.1);


    img{
        height: 7rem;
        width: 7rem;
        object-fit: cover;
        border-radius: 50%;
        margin: 0 auto;
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    p{
        padding: 1rem;
        font-size: 1.4rem;
        line-height: 1.6;
        color: #666;
    }

    h4{
        font-size: 2rem;
    }
`;

