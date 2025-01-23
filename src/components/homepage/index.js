import React from 'react'
import Navbar from './navbar'
import Header from './header'
import Features from './features'
import Content from './content'
import Steps from './steps'
import Pricing from './pricing'
import Stats from './stats'
import Footer from './footer'


export default function index() {
  return (
    <div>
        <Navbar/>
        <Header/>
        <Features/>
        <Content/>
        <Steps/>
        <Pricing/>
        <Stats/>
        <Footer/>
    </div>
  )
}
