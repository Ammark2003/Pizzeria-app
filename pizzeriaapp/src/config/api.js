const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000';

export const API_ENDPOINTS = {
  PIZZAS: `${API_BASE_URL}/api/pizzas`,
  INGREDIENTS: `${API_BASE_URL}/api/ingredients`,
  CART: `${API_BASE_URL}/api/cart`,
};

export default API_BASE_URL;
