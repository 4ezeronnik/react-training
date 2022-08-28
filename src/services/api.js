import axios from "axios";

axios.defaults.baseURL = 'https://6309cc5bf8a20183f776faeb.mockapi.io';

export const addMaterial = async (values) => {
    const response = await axios.post('/materials', values);
    return response.data;
};

export const getMaterials = async () => {
    const response = await axios.get('/materials');
    return response.data;
};

export const deleteMaterial = async id => {
  const response = await axios.delete(`/materials/${id}`);
  return response.data;
};