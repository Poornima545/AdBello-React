import axios from 'axios';

const API_URL = 'http://localhost:8080/users';

export const createUser = async (data) => {
    return await axios.post(API_URL, data);
}

export const getUsers = async () => {
    return await axios.get(API_URL);
}

export const updateUser = async (id, updateData) => {
    return await axios.put(`${API_URL}/${id}`, updateData);
}

export const deleteUser = async (id) => {
    return await axios.delete(`${API_URL}/${id}`);
}
