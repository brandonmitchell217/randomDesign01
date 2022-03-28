import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <div className="footLeft">
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
      <div className="footRight">
        <Link to="/contact">Let's Connect</Link>
        <span>Copyright &copy; 2022 </span>
      </div>
    </footer>
  )
}

export default Footer
