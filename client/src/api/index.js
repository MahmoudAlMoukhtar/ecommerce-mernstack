import axios from "axios";

const API = axios.create({
  baseURL: "https://e-commer-mernstack.vercel.app/api",
  //baseURL: "http://localhost:3001/api",
});
API.interceptors.request.use(req => {
  if (localStorage.getItem("userEcommerce")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("userEcommerce")).token
    }`;
  }

  return req;
});
//CRUD POSTS
export const fetchPosts = () => API.get("/posts");
export const fetchPostById = id => API.get(`/posts/${id}`);
//export const likePost = id => API.patch(`/posts/${id}/likePost`);

//AUTH Operation
export const signin = formData => API.post("/user/signin", formData);
export const signup = formData => API.post("/user/signup", formData);
export const updateProfile = (id, updates) =>
  API.put(`/user/updateProfile/${id}`, updates);
//products
export const fetchProducts = () => API.get("/products");
export const fetchProductById = id => API.get(`/products/${id}`);
//cart
export const createCart = () => API.post("/cart");
export const updateCart = updates => API.put("/cart", updates);
export const emptyCart = () => API.patch("/cart");
export const fetchCart = () => API.get("/cart");
export const deleteProductById = id => API.delete(`/cart/${id}`);
//payment
export const createPay = data => API.post("/payment", data);
//order
export const createOrder = order => API.post(`/orders`, order);
