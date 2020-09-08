import React from 'react';
import { Link } from 'react-router-dom';
import { NavbarComponent } from '../Home/Navigation';
import { NavStyle } from '../../styles/core';
import { Button, Header } from '../../styles/pages/Home';
import hero from '../../images/hero4.jpg';

export function MenuComponent({ guilds }) {

    return (
        <>
        <NavStyle>
            <NavbarComponent />
        </NavStyle>
        <Header>
            <img src={hero} alt="Discord Wallpaper" className="header-hero" />
            <div className="header-container">
                <h1 className="header-container__header-title">Bot and Guilds</h1>
                <div className="header-container__button-wrap">
                    <a href="#servers"><Button className="header-container__button-wrap__btn">Discover</Button></a>
                </div>
            </div>
        </Header>
        <div id="servers">
            <h3><strong>Bot is in the following servers</strong></h3>
            {guilds.included.map((guild, index) => (
                <div key={guild.id}>
                    <li>{guild.name}</li>
                    <Link to={ `/dashboard/${guild.id}` } className="guild-link">View Dashboard</Link>
                </div>
            ))}
            <h3><strong>Bot is not in following servers</strong></h3>
            {guilds.excluded.map(guild => (
                <div>
                    <li>{ guild.name }</li>
                    <a href={`https://discord.com/oauth2/authorize?client_id=748273040043016273&scope=bot`}>Invite Bot</a>
                </div>
            ))}
        </div>
        </>
    );
}