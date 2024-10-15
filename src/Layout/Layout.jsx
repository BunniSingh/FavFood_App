import React from 'react'
import Navbar from '../static/Navbar/Navbar';
import Footer from '../static/Footer/Footer';
import { Outlet } from 'react-router-dom';
const Layout = () => {
  return (
    <div>
        <Navbar/>
            <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout