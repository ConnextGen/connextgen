import axios from 'axios';

export async function logIn(email, password) {
    return (await axios.post('http://localhost:3001/api/users/login', { email, password })).data;
}

export async function signUp(firstName, lastName, school, email, password) {
    return (await axios.post('http://localhost:3001/api/users', { firstName, lastName, school, email, password })).data;
}

export async function getUser(id) {
    return (await axios.get(`http://some-api.com/users/${id}`).then(res => res.data)).data;
}