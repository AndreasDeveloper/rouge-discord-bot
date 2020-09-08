import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { ReactComponent as SettingsIcon } from '../../icons/settings-outline.svg';
import { ReactComponent as ArrowRight } from '../../icons/chevron-forward-outline.svg';
import { ReactComponent as HomeIcon } from '../../icons/home-outline.svg';

export function NavbarComponent() {
    return (
        <Navbar>
            <NavItem link="/" icon={<HomeIcon fill="#fff" />} />
            <NavItem link="/menu" icon="🦔" />

            <NavItem icon={<SettingsIcon fill="#fff" />}>
                <DropdownMenu></DropdownMenu>
            </NavItem>
        </Navbar>
    );
}

// Parent nav component
function Navbar(props) {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">{props.children}</ul>
        </nav>
    );
}

// Children nav elements component
function NavItem(props) {
    const [open, setOpen] = useState(false);

    return (
        <li className="nav-item">
            <a href={props.link} className="icon-button" onClick={() => setOpen(!open)}>
                {props.icon}
            </a>

            {open && props.children}
        </li>
    );
}

function DropdownMenu() {
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        setMenuHeight(dropdownRef.current?.firstChild.offsetHeight + 30)
    }, [])

    function calcHeight(el) {
        const height = el.offsetHeight + 30;
        setMenuHeight(height);
    }

    function DropdownItem(props) {
        return (
            <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                <span className="icon-button">{props.leftIcon}</span>
                {props.children}
                <span className="icon-right">{props.rightIcon}</span>
            </a>
        );
    }

    return (
        <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>

            <CSSTransition
                in={activeMenu === 'main'}
                timeout={500}
                classNames="menu-primary"
                unmountOnExit
                onEnter={calcHeight}>
                <div className="menu">
                    <DropdownItem>Menu</DropdownItem>
                    <DropdownItem
                        leftIcon="🦔"
                        rightIcon={<ArrowRight />}
                        goToMenu="settings">
                        Settings
                    </DropdownItem>
                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'settings'}
                timeout={500}
                classNames="menu-secondary"
                unmountOnExit
                onEnter={calcHeight}>
                <div className="menu">
                    <DropdownItem goToMenu="main" leftIcon="🦔">
                        <h2>My Tutorial</h2>
                    </DropdownItem>
                    <DropdownItem leftIcon="🦔">HTML</DropdownItem>
                    <DropdownItem leftIcon="🦔">CSS</DropdownItem>
                    <DropdownItem leftIcon="🦔">JavaScript</DropdownItem>
                    <DropdownItem leftIcon="🦔">Awesome!</DropdownItem>
                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'animals'}
                timeout={500}
                classNames="menu-secondary"
                unmountOnExit
                onEnter={calcHeight}>
                <div className="menu">
                    <DropdownItem goToMenu="main" leftIcon="🦔">
                        <h2>Animals</h2>
                    </DropdownItem>
                    <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
                    <DropdownItem leftIcon="🐸">Frog</DropdownItem>
                    <DropdownItem leftIcon="🦋">Horse?</DropdownItem>
                    <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
                </div>
            </CSSTransition>
        </div>
    );
}