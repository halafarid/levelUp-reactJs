import { apiUrl } from './config.json';
import axios from 'axios';

// Get All Courses (For Testing)
export function getAllCourses() {
    return axios.get(`${apiUrl}/courses`);
}

// Get All Free Courses
export function getFreeCourses(no, size) {
    return axios.get(`${apiUrl}/courses/free?pageNo=${no}&size=${size}`);
}

// Get All Paid Courses
export function getPaidCourses(no, size) {
    return axios.get(`${apiUrl}/courses/paid?pageNo=${no}&size=${size}`);
}

// Get Course By ID
export function getCourseById(id) {
    return axios.get(`${apiUrl}/courses/${id}`);
}

// Add => instructorId(current user Id), title, description, duration, payment, features(array), categoryId, levelId, materials(array of objects [{link, title}])
export function addCourse(course) {
    return axios.post(`${apiUrl}/courses`, course);
};

// Edit => title, description, duration, payment, features(array), categoryId, levelId, materials(array of objects [{link, title}])
export function updateCourse(id, course) {
    return axios.patch(`${apiUrl}/courses/${id}`, course);
};

// Delete Course
export function removeCourse(id) {
    return axios.delete(`${apiUrl}/courses/${id}`);
}

export function getReviews(cid) {
    return axios.get(`${apiUrl}/courses/${cid}/reviews`);
}

// Add a review on course.. passing courseID as parameter
export function addReview(cid) {
    return axios.post(`${apiUrl}/courses/${cid}/reviews`);
}

// Get all Materials({title, link}) in a course
export function getMaterials(cid) {
    return axios.get(`${apiUrl}/courses/${cid}/materials`);
}

// Edit the progress on the course when user start watching
export function handleProgress(cid) {
    return axios.patch(`${apiUrl}/courses/${cid}/progress`);
}
export function filterCourses(catsId, levelsId) {
    return axios.get(`${apiUrl}/categories/filters?catsId=${catsId}&levelsId=${levelsId}`);
}
