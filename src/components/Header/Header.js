import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import { cartScroll } from './cartScroll'
import { Link } from 'react-router-dom'
import { ShoppingCartSimple } from 'phosphor-react'
import logo from '../../images/Pear.png'
import './Header.css'

export default class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    window.onscroll = function() { cartScroll() }
  }

  render() {
    return (
      <header role="heading">
        <nav role="navigation" className="main-header-nav">
          <ul className="main-nav-links">
            <li>
              <h1 className="main-brand-logo">
                <Link to="/">
                  <img src={logo} className="brand-image" alt="Pearegrine" />
                </Link>
              </h1>
            </li>
            <li>
              <Link to="/gallery/sale">Sale</Link>
            </li>
            <li>
              <Link to="/gallery/arrivals">New Arrivals</Link>
            </li>
            <li>
              <Link to="/gallery/all">Clothing</Link>
            </li>
            <li>
              <Link to="/discover">Discover</Link>
            </li>
            <li>
              <Link to="/cart">
                <div className="cart-area" id="cart-area">
                  {this.showIcon()}
                  <ShoppingCartSimple size={30} color="black" />
                </div>
              </Link>
            </li>
          </ul>
          {/* <NavBar /> */}
        </nav>
      </header>
    )
  }

  showIcon = () => {
    const { cartCount } = this.props
    if (cartCount && cartCount > 0) {
      return (
        <div className="cart-count">{cartCount}</div>
      )
    }
  }
}
