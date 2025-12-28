import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

const handleNetworkError = (error) => {
  console.error('Network error:', error);
};

// Wrapper function for API calls with standardized error handling
export const handleAPIError = async (apiCall) => {
  try {
    const response = await apiCall();
    return response.data;
  } catch (error) {
    handleNetworkError(error);
    return [];
  }
};

export default api;