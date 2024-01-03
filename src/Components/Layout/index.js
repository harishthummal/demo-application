import React from 'react'
import Navbar from '../Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from '../Dashboard'
import Users from '../Users'
import Login from '../Login'
import PrivateRoute from '../PrivateRoute'
import PublicRoute from '../PublicRoute'

export default function Layout() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/users' element={<Users/>} />
      </Route>
      <Route element={<PublicRoute/>}>
        <Route path='/login' element={<Login/>} />
      </Route>
        <Route path='*' element={<div>NOT FOUND</div>} />
    </Routes>
    </BrowserRouter>
  )
}
