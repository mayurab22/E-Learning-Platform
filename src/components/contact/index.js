import React from 'react'
import Details from './details'
import Navbar from '../homepage/navbar'
import Header from './header'
import Footer from '../homepage/footer'

export default function index() {
  return (
    <div>
        <Navbar/>
        <Header/>
        <Details/>
        <Footer/>
    </div>
  )
}
