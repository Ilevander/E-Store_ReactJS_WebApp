// fetcher.js
const BASE_URL = "http://localhost:3001";

/**
 * A generic function for making HTTP requests.
 * @param {string} url - The relative endpoint URL.
 * @returns {Promise<{ errorMessage: string, data: any }>} - A promise that resolves to an object containing response data or an error message.
 */
export const fetcher = async (url) => {
  const responseObject = { errorMessage: '', data: [] };

  try {
    const response = await fetch(BASE_URL + url);

    if (!response.ok) {
      throw new Error(`HTTP Error ${response.status}`);
    }

    const responseData = await response.json();
    responseObject.data = responseData;
  } catch (err) {
    responseObject.errorMessage = err.message;
  }

  return responseObject;
}

/**
 * Fetches categories from the API.
 * @returns {Promise<{ errorMessage: string, data: any }>} - A promise that resolves to an object containing category data or an error message.
 */
export const getCategories = () => {
  return fetcher('/categories');
}

/**
 * Fetches products based on category ID from the API.
 * @param {number} id - The category ID.
 * @returns {Promise<{ errorMessage: string, data: any }>} - A promise that resolves to an object containing product data or an error message.
 */
export const getProducts = (id) => {
  return fetcher(`/products?catId=${id}`);
}

/**
 * Fetches product details by ID from the API.
 * @param {number} id - The product ID.
 * @returns {Promise<{ errorMessage: string, data: any }>} - A promise that resolves to an object containing product details or an error message.
 */
export const getProductById = (id) => {
  return fetcher(`/products/${id}`);
}

/**
 * Fetches products based on a query from the API.
 * @param {string} query - The search query.
 * @returns {Promise<{ errorMessage: string, data: any }>} - A promise that resolves to an object containing product data or an error message.
 */
export const getProductsByQuery = (query) => {
  return fetcher(`/products?q=${query}`);
}
