// Write your code here
import './index.css'
import Header from '../Header'

const Home = () => (
  <>
    <Header />
    <div className="Home-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
        alt="home"
        className="mobile-image"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
        alt="home"
        className="desktop-image"
      />
    </div>
  </>
)
export default Home
