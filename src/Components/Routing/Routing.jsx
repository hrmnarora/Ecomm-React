import React from 'react'
import {Routes, Route} from "react-router-dom"
import HomePage from '../Home/HomePage';
import ProductsPage from '../Products/ProductsPage';
import SingleProductPage from '../SingleProduct/SingleProductPage';
import CartPage from '../Cart/CartPage';
import MyOrder from '../MyOrder/MyOrder';
import LoginPage from '../Authentication/LoginPage';
import SignupPage from '../Authentication/SignupPage';

const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/products' element={<ProductsPage/>}/>
        <Route path='/products/:id' element={<SingleProductPage/>}/>
        <Route path='/signup' element={<SignupPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/myorders' element={<MyOrder/>}/>
    </Routes>
  )
}

export default Routing