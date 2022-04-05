import React from 'react'
import { Link } from 'react-router-dom'
import Border1 from '../../assets/images/border.png'

const HomeServices = () => {
  return (
    <section className="homeServices">
      <header>
        <div className="border">
          <img src={Border1} alt="border" />
        </div>
        <div className="border2">
          <img src={Border1} alt="border" />
        </div>
        <h2>Lorem Ipsum Dolor Sit</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
          praesentium ea blanditiis.
        </p>
        <div className="ctas">
          <Link to="/" className="cta">
            Lorem Ipsum
          </Link>
          <Link to="/" className="cta">
            Lorem Ipsum
          </Link>
        </div>
      </header>
      <div className="serviceBox">
        <div className="service">
          <h3>Basic</h3>
          <span>$19.99/Mo</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
            libero quae omnis.
          </p>
          <Link to="/" className="serviceLink">
            Lorem Ipsum
          </Link>
        </div>
        <div className="service">
          <h3>Plus</h3>
          <span>$39.99/Mo</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
            libero quae omnis.
          </p>
          <Link to="/" className="serviceLink">
            Lorem Ipsum
          </Link>
        </div>
        <div className="service">
          <h3>Premium</h3>
          <span>$49.99/Mo</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
            libero quae omnis.
          </p>
          <Link to="/" className="serviceLink">
            Lorem Ipsum
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HomeServices
