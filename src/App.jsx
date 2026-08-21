import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Contact from './pages/Contact';
import Education from './pages/Education';
import Header from './pages/Header';
import Home from './pages/Home';
import Internship from './pages/Internship';
import Project from './pages/Project';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/education' element={<Education/>}></Route>
        <Route path='/header' element={<Header/>}></Route>
        <Route path='/internship' element={<Internship/>}></Route>
        <Route path='/project' element={<Project/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;