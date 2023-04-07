import { BASE_URL } from "../constants/constants";
import { apiServiceHandler } from "./api";

export const getProducts = () => {
  return apiServiceHandler(`${BASE_URL}/products`);
};
export const getProduct = (id) => {
  return apiServiceHandler(`${BASE_URL}/products/${id}`);
};
export const getCategories = (id) => {
  return apiServiceHandler(`${BASE_URL}/products/categories`);
};
export const getProductsByCategory = (category) => {
  return apiServiceHandler(`${BASE_URL}/products/category/${category}`);
};