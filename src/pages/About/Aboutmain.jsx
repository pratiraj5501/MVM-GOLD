import React from 'react'
import Prampara from './Prampara'
import About from './About'
import { Link } from 'react-router-dom'
import img1 from "../../assets/logo.png"

const Aboutmain = () => {
  return (
    <div>
        
    <nav className="bg-transparent p-4">
      <div className="container mx-auto flex items-center">
        <Link to="/">
        <img
          src={img1}
          alt="Logo"
          className="h-12 w-auto"
        />
        </Link>
      </div>
    </nav>
        <About/>
      <Prampara/>
    </div>
  )
}

export default Aboutmain
