import React from 'react';
import styled from 'styled-components';
import image from '../image/letter-bg.png';


const Contact = () => {
  return (
    <ContactSection id="/contact">
        <BgWrapper>
            <img src={image} alt="bg" />
        </BgWrapper>
            <h3>Subscribe For Lattest Updates</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sed voluptatibus aliquid, in impedit soluta?</p>
            <Subscribe>
                <Input type="email" name="email" placeholder='Enter you email'/>
                <Button>Subscribe</Button>
            </Subscribe>
    </ContactSection>
  );
}

export default Contact;

const ContactSection = styled.section`
    height: 45vh;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 7%;
    text-align: center;

    h3{
        font-size: 3rem;
    }

    p{
        font-size: 1.7rem;
        line-height: 1.6;
        color: #666;
        padding: 1rem 0;
    }
`;

const BgWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;

    img{
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
`;

const Subscribe = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    width: 40rem;
    height: 5rem;
    border-radius: 5rem;
    box-shadow:0 .5rem 1rem rgba(0,0,0,.1);
    border:.1rem solid rgba(0,0,0,.1);
    z-index: 1;
`;

const Input = styled.input`
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
    background-color: #fff;
    padding: 0 2rem;
`;

const Button = styled.button`
    background-color: #ffee80;
    padding: 2rem;
    border: none;
    cursor: pointer;
    transition: all .2s ease 0s;

    &:hover {
        background-color: #130f40;
        color: #fff;
    }
`;

