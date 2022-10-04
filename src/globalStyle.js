import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Rubik', sans-serif;
        color: #130f40;
    }

    html{
        font-size: 62.5%;

        &::-webkit-scrollbar {
            width: 1rem;
        }

        &::-webkit-scrollbar-track {
            background: transparent;
        }

        &::-webkit-scrollbar-thumb {
            background: #130f40;
        }

        @media screen and (max-width: 991px) {
            font-size: 55%;
        }

        @media screen and (max-width: 450px) {
            font-size: 50%;
        }
    }

    



`;

export const Button = styled.button`
    background-color: ${({menuBtn}) => (menuBtn ? '#130f40' : '#ffee80')};
    color: ${({menuBtn}) => (menuBtn ? '#ffee80' : '#130f40')};
    padding: ${({bigBtn}) => (bigBtn ? '1.5rem 3rem' : '1rem 2rem')};
    font-size: 1.7rem;
    font-weight: 500;
    white-space: nowrap;
    width: 100%;
    letter-spacing: 1.5px;
    outline: none;
    border: none;
    border-radius: .5rem;
    cursor: pointer;
    transition: all .2s ease 0s;

    &:hover{
        background-color: ${({menuBtn}) => (menuBtn ? '#f9d806;' : '#130f40;')};
        color: ${({menuBtn}) => (menuBtn ? '#130f40' : '#ffee80')};
    }
`;

export default GlobalStyle;