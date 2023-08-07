import axios from "axios";

const APIManager = axios.create({
    baseURL:'https://ec2-44-197-193-3.compute-1.amazonaws.com/api/',
    responseType:'json',
})

export default APIManager;