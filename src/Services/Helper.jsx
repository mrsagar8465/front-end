import axios from "axios";

// Base URL for the backend API
export const Base_URL = 'http://localhost:8080';

// Axios instance with the base URL
export const myAxios = axios.create({
    baseURL: Base_URL, // Corrected to `baseURL` for Axios configuration
});