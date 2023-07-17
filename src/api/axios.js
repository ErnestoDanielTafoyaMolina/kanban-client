import axios from "axios";

const instance = axios.create({
    baseURL:'https://kanban-server-1s0x.onrender.com/api',
    withCredentials:true
});

export default instance;