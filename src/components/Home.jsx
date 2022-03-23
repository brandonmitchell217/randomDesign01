import { Link } from 'react-router-dom'
import landingComp from '../assets/images/laptop1.png'
import landingPhone from '../assets/images/phone1.png'
import netflix from '../assets/images/netflix.png'
import microsoft from '../assets/images/microsoft.png'
import google from '../assets/images/google.png'
import spotify from '../assets/images/spotify.png'
import '../index.css'

const Home = () => {
  return (
    <section className="home">
      <div className="cover">
        <div className="topLeft">
          <h1>Lorem Ipsum Dolor</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            ex ratione neque? Ullam, quaerat!
          </p>
          <div className="ctas">
            <Link to="/" className="cta">
              Lorem Ipsum
            </Link>
            <Link to="/" className="cta">
              Lorem Ipsum
            </Link>
          </div>
        </div>
        <div className="bottomRight">
          <img src={landingComp} alt="Computer" className="comp1" />
          <img src={landingPhone} alt="Phone" className="phone1" />
        </div>
      </div>
      <div className="companies">
        <img src={netflix} alt="" />
        <img src={microsoft} alt="" />
        <img src={google} alt="" />
        <img src={spotify} alt="" />
      </div>
    </section>
  )
}

export default Home
