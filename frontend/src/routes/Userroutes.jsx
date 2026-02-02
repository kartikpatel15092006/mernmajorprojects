import React from 'react'
import { Routes, Route } from 'react-router-dom'
import UserRegister from '../pages/UserRegister'
import UserLogin from '../pages/UserLogin'
import PartnerRegister from '../pages/PartnerRegister'
import PartnerLogin from '../pages/PartnerLogin'
import HOME from '../pages/general/home'
const Userroutes = () => {
  return (
    <Routes>
      <Route path='/user/register' element={<UserRegister/>} />
      <Route path='/user/login' element={<UserLogin/>} />
      <Route path='/food-partner/register' element={<PartnerRegister/>} />
      <Route path='/food-partner/login' element={<PartnerLogin/>} />
      <Route path='/' element={<HOME/>} />
    </Routes>
  )
}

export default Userroutes