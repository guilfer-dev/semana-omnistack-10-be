import axios from 'axios';

const api = axios.create(
    {
        baseURL: 'https://omnistack10-guilfer.herokuapp.com'
    }
)

export default api;