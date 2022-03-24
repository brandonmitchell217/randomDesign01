import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import '../../index.css'
import SocialTech from '../../assets/images/socialTech.jpg'
import HomeTech from '../../assets/images/homeTech.jpg'
import Comp2 from '../../assets/images/laptop2.png'
import Phone2 from '../../assets/images/phone2.png'

const HomeAbout = () => {
  return (
    <section className="homeAbout">
      <h2>Lorem Ipsum Dolor</h2>
      <div className="feature">
        <div className="bottomLeft">
          <h3>Purus sit amet luctus</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
            ducimus mollitia magnam quas impedit minus hic atque dignissimos
            veniam cum temporibus amet, ipsa eveniet repudiandae reiciendis quis
            minima laboriosam laborum omnis fuga.
          </p>
          <Link to="/" className="featureLnk">
            Get Started
            <FaArrowRight className="arrow" />
          </Link>
        </div>
        <div className="topRight">
          <img src={SocialTech} alt="Social" className="featureImg" />
        </div>
      </div>
      <div className="feature">
        <div className="bottomLeft">
          <h3>Purus sit amet luctus</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
            ducimus mollitia magnam quas impedit minus hic atque dignissimos
            veniam cum temporibus amet, ipsa eveniet repudiandae reiciendis quis
            minima laboriosam laborum omnis fuga.
          </p>
          <Link to="/" className="featureLnk">
            Get Started
            <FaArrowRight className="arrow" />
          </Link>
        </div>
        <div className="topRight">
          <img src={HomeTech} alt="Home" className="featureImg" />
        </div>
      </div>
      <div className="aboutBottom">
        <h2>Lorem Ipsum Dolor Sit Amet</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          commodi sit amet!
        </p>
        <Link to="/" className="aboutCta">
          Lorem Ipsum
        </Link>
        <img src={Comp2} alt="Laptop" className="comp2" />
        <img src={Phone2} alt="Phone" className="phone2" />
      </div>
    </section>
  )
}

export default HomeAbout
