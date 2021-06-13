import axios from 'axios';

const fetchClient = () => {

    let instance = axios.create({
        timeout: 10 * 60 * 1000,
    });


    return instance;
};

const client = fetchClient();


export default client;