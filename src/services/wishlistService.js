import { apiUrl } from './config.json';
import axios from 'axios';

export function getAllWishlist() {
    return axios.get(`${apiUrl}/wishlist`);
};

// Add or Delete Course in Wishlist.. by passing course id in parameter
export function handleWishlist(id) {
    return axios.post(`${apiUrl}/users/wishlist/${id}`);
}