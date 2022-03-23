import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navigation = () => {
  const [open, setOpen] = useState(false)
  function burgerMenu() {
    const navList = document.querySelector('.navList')
    if (!open) {
      setOpen(!open)
      navList.style.transform = 'translateY(0)'
    } else {
      setOpen(!open)
      navList.style.transform = 'translateY(100%)'
    }
  }

  return (
    <nav>
      <Link index to="/" className="logo">
        Lorem Ipsum
      </Link>
      <FaBars className="burger" open={open} onClick={burgerMenu} />
      <div className="navList" open={open}>
        <FaTimes className="close" open={open} onClick={burgerMenu} />
        <Link to="/services" className="menuItem">
          Services
        </Link>

        <Link to="/about" className="menuItem">
          About
        </Link>

        <Link to="/contact" className="menuItem">
          Contact
        </Link>

        <Link to="/" className="buy menuItem">
          Buy Now
        </Link>

        <Outlet />
      </div>
    </nav>
  )
}

export default Navigation
