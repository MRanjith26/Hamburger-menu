// Write your code here
import {Link} from 'react-router-dom'

import './index.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import Popup from 'reactjs-popup'

const Header = () => (
  <nav className="nav-bar">
    <div className="nav-container">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
          className="logo"
        />
      </Link>

      <Popup
        modal
        trigger={
          // eslint-disable-next-line jsx-a11y/control-has-associated-label
          <button
            type="button"
            className="icon-button"
            data-testid="hamburgerIconButton"
          >
            <GiHamburgerMenu className="menu-icon" />
          </button>
        }
      >
        {close => (
          <div className="popup-container">
            <nav className="close-nav">
              <button
                type="button"
                className="icon-button"
                onClick={() => close()}
                data-testid=" closeButton"
              >
                <IoMdClose className="close-icon" />
              </button>
            </nav>
            <div className="popup-card">
              <ul className="popup-menu">
                <li>
                  <Link to="/" className="item-card">
                    <AiFillHome className="menu-icon" />
                    <h1 className="menu-text">Home</h1>
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="item-card">
                    <BsInfoCircleFill className="menu-icon" />
                    <h1 className="menu-text">About</h1>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </Popup>
    </div>
  </nav>
)

export default Header
