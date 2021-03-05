import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com', 
    headers: {
        Authorization: 'Client-ID Td4p-P39ZJdP1Y8xvbl8YKQSRgJUy1yx21pBegzasG0' 
    }
})