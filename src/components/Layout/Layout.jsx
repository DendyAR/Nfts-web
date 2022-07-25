import React from 'react'
import Routers from '../../routers/Routers'
import Header from '../Headers/Header'
import Footer from '../Footer/Footer'

const Layout = (props) => {
  return (
    <>
    <Header/>
    <div>
        <Routers/>
    </div>
    <Footer/>
    </>
  )
}

export default Layout