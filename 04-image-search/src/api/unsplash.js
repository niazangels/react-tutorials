import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 62e2948b1a20f1cc68df2633be8503e15f83bcf6b00035dabba3c8eeac03eb4c'
    }
})