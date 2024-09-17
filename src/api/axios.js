import axios from 'axios';

const api = axios.create({
    baseURL: 'https://hp-api.herokuapp.com/api/',
    timeout: 10000,
});

export const getStudents = async () => {
    try {
        const response = await api.get('characters/students');
        return response.data;
    } catch (error) {
        console.error('Error fetching students', error);
        throw error;
    }
};

export default api;
