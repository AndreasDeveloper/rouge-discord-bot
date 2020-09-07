import styled, { css } from 'styled-components';
import { queries, colors } from '../../base/_base.js'

export const Button = styled.button`
    background: transparent;
    border: 2px solid ${colors.white};
    border-radius: 20px;
    color: ${colors.white};
    font-size: 18px;
    font-weight: 600;
    text-transform: uppercase;
    transition: all .2s ease-in-out;
    letter-spacing: 2.5px;
    margin-top: 30px;
    padding: 6px 30px;
    outline: none;
    &:hover {
        background-color: ${colors.white};
        color: ${colors.black};
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
            color: ${colors.white};
            font-size: 38px;
            font-weight: 600;
            text-transform: uppercase;
            text-align: center;
            letter-spacing: 4px;
        }
        &__button-wrap {
            display: flex;
            margin-top: 20px;
            @media only screen and (max-width: 768px) {
                flex-direction: column;
            }
            &__btn {
                margin: 0 10px;
                @media only screen and (max-width: 768px) {
                    margin: 10px 0;
                }
            }
        }
    }
`;