import * as React from "react"
import "./Navbar.css"
import Logo from "./Logo"
import { Routes, Route, Link, useParams } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className="navbar">
      <Logo />
      <Link to="/"><button className="nav-button">Home</button></Link>
      <a id="about-jump" href="#about"><button className="nav-button">About</button></a>
      <a id="contact-jump" href="#contact"><button className="nav-button">Contact Us</button></a>
    </nav>
    
  )
}
