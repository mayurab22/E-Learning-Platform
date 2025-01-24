import React, { useEffect } from 'react'
import Navbar from '../homepage/navbar'
import Footer from '../homepage/footer'
import Content1 from './content1'
import Content2 from './content2'
import Content3 from './content3'
import Content4 from './content4'
import Header from './header'



export default function Index() {

  useEffect(()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  },[])

  return (
    <div>
        <Navbar/>
        <Header/>
        <Content1/>
        <Content2/>
        <Content3/>
        <Content4/>
        <Footer/>
    </div>
  )
}
