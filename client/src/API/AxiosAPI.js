import axios from 'axios';

const BASE_URL = 'https://fakestoreapi.com';
const GET_ALL_PRODUCTS = '/products';//'https://fakestoreapi.com/products';
const GET_CATEGERY = '/products/categories';
const ELECTRONICS = '';
const WOMENS_CLOTHING = '';
const MENS_CLOTHING = '';
const JWELLERY = '/products/category/jewelery';

export default {
    getAllProducts: () => axios.get(`${BASE_URL}${GET_ALL_PRODUCTS}`),
    getCategery: () => axios.get(`${BASE_URL}${GET_CATEGERY}`),
    getElectronics: () => axios.get(`${BASE_URL}${JWELLERY}`),
    getWomensClothing: () => axios.get(`${BASE_URL}${JWELLERY}`),
    getMensClothing: () => axios.get(`${BASE_URL}${JWELLERY}`),
    getJwellery: () => axios.get(`${BASE_URL}${JWELLERY}`),
}