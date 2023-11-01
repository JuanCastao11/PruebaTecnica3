import axios from "./axios.js";

export const recibirRol = () => axios.get('/roles')