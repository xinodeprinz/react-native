import axios from 'axios';
import config from '../config';

axios.defaults.baseURL = config.baseURL;
axios.defaults.timeout = 30000;
axios.defaults.headers = {
    "X-Platform": 'Android',
    "X-App-Build-Number": '1.0.0',
};

axios.interceptors.request.use(request => {
    // console.log(request);
    // Edit request config
    return request;
}, error => {
    alert("An error occurred! Please try again.")
    // console.log(error); //delete at production
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    // console.log(response);
    // Edit response config
    return response;
}, error => {
    alert(error.response.data.message);
    // console.log(error);
    return Promise.reject(error);
});


export default axios;