import React from 'react';
import { Button } from '@chakra-ui/core';

export function LandingPage(props) {
    const login = () => window.location.href = 'http://localhost:3001/api/auth/discord';
    return (
        <Button variantColor="orange" onClick={ login }>Login</Button>
    );
}