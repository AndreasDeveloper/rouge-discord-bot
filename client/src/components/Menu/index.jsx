import React from 'react';
import { Link } from 'react-router-dom';

export function MenuComponent({ guilds }) {

    return (
        <div>
            <h1>Menu Component</h1>
            {guilds.map((guild, index) => (
                <div key={index}>
                    <li>{guild.name}</li>
                    <Link to={ `/dashboard/${guild.id}` } className="guild-link">View Dashboard</Link>
                </div>
            ))}
        </div>
    );
}