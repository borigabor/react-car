import React from 'react';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { Button } from '../globalStyle';

const Login = ({login, showLogin}) => {
  return (
    <LoginContainer login={login}>
        <CloseIcon onClick={showLogin}>
            <FaTimes/>
        </CloseIcon>
        <LoginForm>
            <h3>user login</h3>
            <Input type="email" name="email" placeholder="email" />
            <Input type="password" name="password" placeholder="password" />
            <p>Forget Your Password? <a href="#">Click Here</a></p>
            <ButtonWrapper>
                <Button>Login</Button>
            </ButtonWrapper>
            <p>Or Login With</p>
            <ButtonsWrapper>
                <Button>Google</Button>
                <Button>Facebook</Button>
            </ButtonsWrapper>
            <p>Don't Have An Account? <a href="#">Create One</a></p>
        </LoginForm>
    </LoginContainer>
  );
}

export default Login;



const LoginContainer = styled.div`
    position: fixed;
    top: ${({login}) => (login ? '0' : '-100%')};
    left: 0;
    opacity: ${({login}) => (login ? '1' : '0')};
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, .7);
    padding: 0 5rem;
    z-index: 3;
    transition: all .6s ease-in-out;
`;


const CloseIcon = styled.div`
    font-size: 4rem;
    position: absolute;
    top: 1.5rem;
    right: 2rem;
    cursor: pointer;
`;

const LoginForm = styled.form`
    background-color: #fff;
    width: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: .5rem;
    padding: 2rem;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    border: 3px solid rgba(249, 249, 249, .1);

    h3{
        font-size: 2rem;
        text-transform: uppercase;
        margin-bottom: 1rem;
    }

    p{
        margin: 1.5rem;
        font-size: 1.4rem;
        color: #666666;
        font-weight: 400;
    }

    a{
        color: #f9d806;
        transform: .3s ease;

        &:hover {
            color: #130f40;
        }
    }
    `;

const Input = styled.input`
    width: 100%;
    outline: none;
    padding: 1.2rem 1rem;
    margin: .7rem 0;
    border: .1rem solid rgba(0, 0, 0, .7);
    border-radius: .5rem;

    &::placeholder {
        font-size: 1.7rem;
        letter-spacing: 1.4px;
    }
`;

const ButtonWrapper = styled.div`
    width: 100%;
`;

const ButtonsWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    width: 100%;
`;