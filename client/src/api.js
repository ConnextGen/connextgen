import axios from 'axios';

const url = 'http://connextgen.org';

export async function logIn(email, password) {
    return (await axios.post(`${url}/api/users/login`, { email, password })).data;
}

export async function signUp(firstName, lastName, school, email, password) {
    return (await axios.post(`${url}/api/users/signup`, { firstName, lastName, school, email, password })).data;
}

export async function getUser(id) {
    return (await axios.get(`${url}/api/users/${id}`).then(res => res.data));
}

export async function getProgress(id) {
    return (await axios.get(`${url}/api/users/${id}/progress`)).data;
}

export async function completeLesson(unit, lesson, id) {
    return (await axios.post(`${url}/api/users/${unit}/${lesson}`, { userId: id })).data;
}

export async function getCourse() {
    return (await axios.get(`${url}/api/course`)).data;
}

export async function getUnit(unit) {
    return (await axios.get(`${url}/api/course/${unit}`)).data;
}

export async function getLesson(unit, lesson) {
    return (await axios.get(`${url}/api/course/${unit}/${lesson}`)).data;
}

export async function getPreviousLesson(unit, lesson) {
    return (await axios.get(`${url}/api/course/${unit}/${lesson}/previous`)).data;
}

export async function getNextLesson(unit, lesson) {
    return (await axios.get(`${url}/api/course/${unit}/${lesson}/next`)).data;
}