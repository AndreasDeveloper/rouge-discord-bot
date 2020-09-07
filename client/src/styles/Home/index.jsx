import styled, { css } from 'styled-components';

export const Button = styled.button`
    background: transparent;
    border: 2px solid #fff;
    border-radius: 20px;
    color: #fff;
    font-size: 18px;
    font-weight: 600;
    text-transform: uppercase;
    transition: all .2s ease-in-out;
    letter-spacing: 2.5px;
    margin-top: 30px;
    padding: 5px 10px;
    outline: none;
    width: 150px;
    &:hover {
        background-color: #fff;
        color: #000;
    }
`;

export const Header = styled.header`
    min-height: 100vh;
    position: relative;
    .header-logo {
        z-index: 1;
    }
    .header-hero {
        height: 100vh;
        width: 100%;
        filter: brightness(30%);
    }
    .header-container {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        &__header-title {
            color: #fff;
            font-size: 42px;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 4px;
        }
    }
`;