import React from 'react';
import { Button, Header } from '../../styles/Home';
import hero from '../../images/hero2.png';
import { ReactComponent as Logo } from '../../images/discord-logo.svg';

export function HomeComponent() {
    const login = () => window.location.href = 'http://localhost:3001/api/auth/discord';
    return (
        <Header>
            <img src={hero} alt="Discord Wallpaper" className="header-hero" />
            <div className="header-container">
                <Logo fill="#fff" width="300px" height="auto" className="header-logo" />
                <h1 className="header-container__header-title">Bot That Doesnt Care</h1>
                <Button onClick={login}>Login</Button>
            </div>
        </Header>
    );
};