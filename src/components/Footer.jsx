import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <div className="topLeft">
        <Link to="/" className="logo">
          Lorem Ipsum
        </Link>
        <div className="social">
          <Link to="/">
            <FaFacebook />
          </Link>
          <Link to="/">
            <FaInstagram />
          </Link>
          <Link to="/">
            <FaLinkedin />
          </Link>
        </div>
      </div>
      <div className="topRight">
        <Link to="/contact">Let's Connect</Link>
        <span>2022 Copyright</span>
      </div>
    </footer>
  )
}

export default Footer
