import { apiUrl } from './config.json';
import axios from 'axios';

// Get All Users (instructors, users) (For Testing)
export function getAllUsers() {
    return axios.get(`${apiUrl}/users`);
};

// Get current user with his own courses and enrolled courses
export function getProfile() {
    return axios.get(`${apiUrl}/users/profile`);
}

// Get another user with his own courses
export function getUserById(id) {
    return axios.get(`${apiUrl}/users/profile/${id}`);
}

// Edit => fullName, email, password, job: {title, description}
export function updateUser(id, user) {
    return axios.patch(`${apiUrl}/users/${id}`, user);
}

// Deactivate account
export function removeUser(id) {
    return axios.delete(`${apiUrl}/user/${id}`);
}

// Follow and unFollow user by passing his id
export function handleFollows(id) {
    return axios.post(`${apiUrl}/users/${id}/follows`);
}

// Get all following of current user
export function getFollowing() {
    return axios.get(`${apiUrl}/users/following`);
}

// Get all followers of current user
export function getFollowers() {
    return axios.get(`${apiUrl}/users/followers`);
}

// User start enrolling in a course (free or after payment).. passing the courseID in parameter
export function enrollCourse(cid) {
    return axios.post(`${apiUrl}/users/payments/${cid}`);
}