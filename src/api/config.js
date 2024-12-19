import axios from 'axios';

export const BASE_URL = "https://6760edc46be7889dc35f3604.mockapi.io/api/v1";

export const endpoints = {
  users: `${BASE_URL}/users`,
  user: (id) => `${BASE_URL}/users/${id}`
};

export const API = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    // Add other headers if needed
  }
});

export const fetchProfileData = async (userId) => {
  try {
    const response = await API.get(endpoints.user(userId)); // Use the correct endpoint
    if (response.status !== 200) {
      throw new Error('Network response was not ok');
    }
    return response.data;
  } catch (error) {
    console.error('Failed to fetch profile:', error);
    throw error;
  }
};

// Create a new user account
export const createUser = async (userData) => {
  const response = await axios.post(`${BASE_URL}/users`, userData);
  return response.data;
};

// Get user account details
export const getUser = async (userId) => {
  const response = await axios.get(`${BASE_URL}/users/${userId}`);
  return response.data;
};

// Update user account details
export const updateUser = async (userId, userData) => {
  const response = await axios.put(`${BASE_URL}/users/${userId}`, userData);
  return response.data;
};

// Delete user account
export const deleteUser = async (userId) => {
  const response = await axios.delete(`${BASE_URL}/users/${userId}`);
  return response.data;
};