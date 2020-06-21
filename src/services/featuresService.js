import { apiUrl } from './config.json';
import axios from 'axios';

// Beginner, Intermediate, Advanced
export function getAllLevels() {
    return axios.get(`${apiUrl}/levels`);
};

export function getAllCategories() {
    return axios.get(`${apiUrl}/categories`);
};

// Search
export function search() {
    return axios.get(`${apiUrl}/search`);
};
export function searchByInstructors() {
    return axios.get(`${apiUrl}/search/instructors`);
};

export function searchByCourses() {
    return axios.get(`${apiUrl}/search/courses`);
};

export function searchByJobs() {
    return axios.get(`${apiUrl}/search/jobs`);
};

// Filters
