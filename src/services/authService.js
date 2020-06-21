import { apiUrl } from './config.json';
import axios from 'axios';

export function Login(account) {
    return axios.post(`${apiUrl}/users/login`, account);
}

export function Register(account) {
    return axios.post(`${apiUrl}/users/registeration`, account);
}

export function LogOut() {
    localStorage.removeItem('JWT');
}