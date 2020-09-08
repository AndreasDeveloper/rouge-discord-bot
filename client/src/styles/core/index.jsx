import styled from 'styled-components';
import { colors } from '../base/_base';

export const NavStyle = styled.div`
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    a {
        cursor: pointer;
        color: ${colors.textColor} !important;
        text-decoration: none;
    }

    /* Top Navigation Bar */

    /* <nav> */
    .navbar {
        height: ${colors.navSize};
        background-color: ${colors.bg};
        opacity: 0.9;
        padding: 0 1rem;
        position: absolute;
        width: 100%;
        z-index: 1;
    }

    /* <ul> */
    .navbar-nav {
        max-width: 100%;
        height: 100%;
        display: flex;
        justify-content: flex-end;
    }

    /* <li> */
    .nav-item {
        width: calc(${colors.navSize} * 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    /* Icon Button */
    .icon-button {
        width: ${colors.btnSize};
        height: ${colors.btnSize};
        background-color: #484a4d;
        border-radius: 50%;
        padding: 5px;
        margin: 2px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: filter 300ms;
    }

    .icon-button:hover {
        filter: brightness(1.2);
    }

    .icon-button svg, .icon-right svg { 
        width: 20px;
        height: 20px;
    }
    .icon-button svg path, 
    .icon-button svg polyline, 
    .icon-button svg rect,
    .icon-button svg line {
        stroke: #fff !important;
    }
    .icon-right svg polyline {
        stroke: #fff !important;
    }


    /* Dropdown Menu */

    .dropdown {
        position: absolute;
        top: 58px;
        width: 300px;
        transform: translateX(-45%);
        background-color: ${colors.bg};
        border: ${colors.border};
        border-radius: ${colors.borderRadius};
        padding: 1rem;
        overflow: hidden;
        transition: height ${colors.speed} ease;
        z-index: 2;
    }

    .menu {
        width: 100%;
    }

    .menu-item {
        height: 50px;
        display: flex;
        align-items: center;
        border-radius: ${colors.borderRadius};
        transition: background ${colors.speed};
        padding: 0.5rem;
    }

    .menu-item .icon-button {
        margin-right: 0.5rem;
    }


    .menu-item .icon-button:hover {
        filter: none;
    }

    .menu-item:hover {
        background-color: #525357;
    }

    .icon-right {
        margin-left: auto;
    }

    /* CSSTransition classes  */
    .menu-primary-enter {
        position: absolute;
        transform: translateX(-110%);
    }
    .menu-primary-enter-active {
        transform: translateX(0%);
        transition: all ${colors.speed} ease;
    }
    .menu-primary-exit {
        position: absolute;
    }
    .menu-primary-exit-active {
        transform: translateX(-110%);
        transition: all ${colors.speed} ease;
    }


    .menu-secondary-enter {
        transform: translateX(110%);
    }
    .menu-secondary-enter-active {
        transform: translateX(0%);
        transition: all ${colors.speed} ease;
    }
    .menu-secondary-exit {

    }
    .menu-secondary-exit-active {
        transform: translateX(110%);
        transition: all ${colors.speed} ease;
    }
`;