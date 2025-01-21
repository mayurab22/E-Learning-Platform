import React from 'react'
import Homepage from '../src/components/homepage/index'
import {Route ,Routes} from 'react-router-dom'
import Course from './components/courses/index'
import Contact from './components/contact/index'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/Course" element={<Course/>}/>
      <Route path="/Contact" element={<Contact/>}/>
    </Routes>
    
  )
}

export default App