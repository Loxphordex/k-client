import React from 'react'
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
          <h1 className="main-brand-logo">
            <Link to="/">
              <img src={logo} className="brand-image" alt="Pearegrine" />
            </Link>
          </h1>
          <Link to="/cart">
            <div className="cart-area" id="cart-area">
              {this.showIcon()}
              <ShoppingCartSimple size={30} color="black" />
            </div>
          </Link>
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
