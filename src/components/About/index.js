// Write your code here
import './index.css'
import Header from '../Header'

const About = () => (
  <>
    <Header />
    <div className="About-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
        alt="about"
        className="mobile-image"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
        alt="about"
        className="desktop-image"
      />
    </div>
  </>
)
export default About
