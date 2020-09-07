import React from 'react';
import { Button, Header } from '../../styles/pages/Home';
import hero from '../../images/hero3.jpg';
import { ReactComponent as Logo } from '../../images/discord-logo.svg';

export function HomeComponent() {
    const login = () => window.location.href = 'http://localhost:3001/api/auth/discord';
    return (
        <Header>
            <img src={hero} alt="Discord Wallpaper" className="header-hero" />
            <div className="header-container">
                <Logo fill="#fff" width="300px" height="auto" className="header-logo" />
                <h1 className="header-container__header-title">Bot That Doesnt Care</h1>
                <div className="header-container__button-wrap">
                    <Button onClick={login} className="header-container__button-wrap__btn">login</Button>
                    <a href="https://discord.com/oauth2/authorize?client_id=748273040043016273&scope=bot"><Button onClick={login} className="header-container__button-wrap__btn">Invite Bot</Button></a>
                </div>
            </div>
        </Header>
    );
};