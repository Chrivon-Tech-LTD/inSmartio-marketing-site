import axios from 'axios';

/**
 * Base URL comes from env so you can point at staging vs production
 * without touching code. Falls back to the docs host from your
 * screenshot for local dev.
 */
const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? 'https://insmartio.chrivon.tech/api';

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 15000,
});

// Surface a consistent, readable error message everywhere the client is used.
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const message =
      error?.response?.data?.message ??
      error?.message ??
      'Something went wrong. Please try again.';
    return Promise.reject(new Error(message));
  }
);

export default api;