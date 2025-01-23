import React from 'react'
import Navbar from '../homepage/navbar'
import Footer from '../homepage/footer'
import Content from './content'

export default function index() {
  return (
    <div>
        <Navbar/>
        <Content/>
        <Footer/>
    </div>
  )
}
