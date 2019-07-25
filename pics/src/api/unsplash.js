import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID ee758b02f42719b44226bc7eefcc4d53eaa3763d9ccb9c7013fc33981cbc9e1e'
    }
});