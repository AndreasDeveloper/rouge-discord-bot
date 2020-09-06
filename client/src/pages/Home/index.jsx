import React from 'react';
import { Button } from '@chakra-ui/core';

export function LandingPage(props) {
    const login = () => window.location.href = 'http://localhost:3001/api/auth/discord';
    return (
        <div>
            <h1 className="header-title">Rouge Discord Bot</h1>
            <Button id="loginBtn" variantColor="orange" onClick={ login }>Login</Button>
        </div>
    );
}