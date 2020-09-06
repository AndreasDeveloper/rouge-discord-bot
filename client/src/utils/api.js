import axios from 'axios';

// Accessing auth route & sending the cookie
export function getUserDetails() {
    return axios.get('http://localhost:3001/api/auth', {
        withCredentials: true
    }); 
}

export function getGuilds() {
    return axios.get('http://localhost:3001/api/discord/guilds', {
        withCredentials: true
    }); 
}