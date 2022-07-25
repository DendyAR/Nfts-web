import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Wallet from '../pages/Wallet'
import NftDetails from '../pages/NftDetails'
import Create from '../pages/Create'
import SellerProfile from '../pages/SellerProfile'
import EditProfile from '../pages/EditProfile'
import Market from '../pages/Market'


const Routers = () => {
  return <Routes>
    <Route path='/' element={<Navigate to="/home"/>}/>
    <Route path='/home' element={<Home/>} />
    <Route path='/market' element={<Market/>} />
    <Route path='/create' element={<Create/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/edit-profile' element={<EditProfile/>} />
    <Route path='/seller-profile' element={<SellerProfile/>} />
    <Route path='/wallet' element={<Wallet/>} />
    <Route path='/market/:id' element={<NftDetails/>} />
  </Routes>
}

export default Routers