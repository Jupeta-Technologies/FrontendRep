import axios from "axios";

const APIManager = axios.create({
    baseURL:'https://jupeta-project.onrender.com/api',
    responseType:'json',
})

export default APIManager;