import {
  FaFacebook,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const HomeContact = () => {
  return (
    <section className="homeContact">
      <div className="contactForm">
        <h3>Get in touch</h3>
        <form>
          <input type="text" placeholder="Enter your name" />
          <input type="text" placeholder="Enter your email" />
          <input type="text" placeholder="Message" id="message" />
          <input
            type="submit"
            name=""
            id="contactSubmit"
            placeholder="Submit"
          />
        </form>
      </div>
      <div className="contactInfo">
        <div>
          <Link to="/" className="lnk address">
            <FaHome className="faI" />
            <span>
              1111 Random Way <br />
              Random, Pl 00000
            </span>
          </Link>
        </div>
        <div>
          <Link to="/" className="lnk number">
            <FaPhoneAlt className="faI" />
            <span>111 - 111 - 1234</span>
          </Link>
        </div>
      </div>
      <div className="contactCo">
        <Link index to="/" className="logo">
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
    </section>
  )
}

export default HomeContact
