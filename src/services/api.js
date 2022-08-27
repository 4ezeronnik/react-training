import axios from "axios";

axios.defaults.baseURL = 'https://6309cc5bf8a20183f776faeb.mockapi.io';

export const addMaterial = async (values) => {
    const response = await axios.post('/materials', values);
    return response.data;
};