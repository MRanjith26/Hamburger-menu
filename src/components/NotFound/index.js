// Write your code here
import './index.css'
import Header from '../Header'

const NotFound = () => (
  <>
    <Header />
    <div className="none-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/not-found-img.png "
        alt="not found"
        className="none-image"
      />
      <h1 className="none-title">Lost Your Way?</h1>
      <p className="none-text">
        Sorry, we cannot find that page. You will find lots to explore on the
        home page
      </p>
    </div>
  </>
)
export default NotFound
