
/**
 * SaathiCare Backend Connector
 * 
 * In a production environment, you would set your BACKEND_URL in your environment variables.
 * This service handles the low-level fetch logic, including attaching Auth tokens.
 */

const BASE_URL = 'https://api.saathicare.ai'; // Placeholder for your actual Node.js/Firebase endpoint

interface RequestOptions extends RequestInit {
  data?: any;
}

export const apiRequest = async (endpoint: string, options: RequestOptions = {}) => {
  const token = localStorage.getItem('saathicare_token');
  
  const headers = new Headers(options.headers || {});
  headers.set('Content-Type', 'application/json');
  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }

  const config: RequestInit = {
    ...options,
    headers,
  };

  if (options.data) {
    config.body = JSON.stringify(options.data);
  }

  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, config);
    
    if (response.status === 401) {
      // Handle expired session
      localStorage.removeItem('saathicare_token');
      window.location.hash = '/login';
      throw new Error('Session expired. Please login again.');
    }

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || 'Something went wrong');
    }

    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};
