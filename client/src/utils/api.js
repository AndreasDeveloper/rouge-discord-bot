import axios from 'axios';

// Accessing auth route & sending the cookie
export function getUserDetails() {
    return axios.get('http://localhost:3001/api/auth', {
        withCredentials: true
    }); 
}

// Get mutual bot guilds
export function getGuilds() {
    return axios.get('http://localhost:3001/api/discord/guilds', {
        withCredentials: true
    }); 
}

// Get guild configuration
export function getGuildConfig(guildId) {
    return axios.get(`http://localhost:3001/api/discord/guilds/${guildId}/config`, { 
        withCredentials: true
    });
}

// Update the prefix
export function updateGuildPrefix(guildId, prefix) {
    axios.put(`http://localhost:3001/api/discord/guilds/${guildId}/prefix`, {
        prefix
    }, {
        withCredentials: true
    });
}