import './App.css';
import React, { useEffect } from 'react'

import DashBoard from './component/DashBoard';
import Cart from './component/Cart';
import NavBar from './component/NavBar';
import Electronics from './component/Electronics';
import Jwelery from './component/Jwelery';
import MensClothing from './component/MensClothing';
import WomensClothing from './component/WomensClothing'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

import RootLayout from './component/RootLayout';
import WishList from './component/WishList';


function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<DashBoard />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/wishList' element={<WishList />} />
      <Route path='/electronics' element={<Electronics />} />
      <Route path='/jewelery' element={<Jwelery />} />
      <Route path='/mensclothing' element={<MensClothing />} />
      <Route path='/womensclothing' element={<WomensClothing />} />
    </Route>
  ))
  return (
    <>
      <RouterProvider router={router} />
    </>

  );
}

export default App;
