import api from './api-global';

// Simple helper for making API calls.
// Usage: await callAPI('/endpoint/', { method: 'get' });
export const callAPI = async (endpoint, options = {}) => {
  const { method = 'get', ...config } = options;
  const response = await api.request({ url: "api/" + endpoint, method, ...config });
  return response.data;
};

export default callAPI;
