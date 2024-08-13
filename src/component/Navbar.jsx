import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import logo from './assets/logo.png'
import carticon from './assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../contextApi/ShopContext'
import drop_down_nav from './assets/dropdown_icon.png'
import {useNavigate} from 'react-router-dom'


function Navbar() {
  const navigate = useNavigate()
  const [manue, setmanue] = useState("shops")
  const { counttotalItem } = useContext(ShopContext)
  const navRef = useRef()

  const drop_down_toggle = (e) => {
    navRef.current.classList.toggle("nav-manue-visible")
    e.target.classList.toggle("open")
  }

  return (
    <>
      <header>
        <nav className="bav-bar">
          <div className="nav-logo">
            <img src={logo} alt="" />
            <p>ShopzyPlace</p>
          </div>
          <img className='nav-drop-down' onClick={drop_down_toggle} src={drop_down_nav} alt="" />
          <ul className="nav-manue" ref={navRef}>
            <li onClick={() => { setmanue("shops") }}> <Link style={{ textDecoration: 'none' }} to='/'>SHOP</Link>  {manue === "shops" ? <hr /> : <></>}</li>
            <li onClick={() => { setmanue("mens") }}><Link style={{ textDecoration: 'none' }} to='/mens'>MEN</Link> {manue === "mens" ? <hr /> : <></>}</li>
            <li onClick={() => { setmanue("womens") }}><Link style={{ textDecoration: 'none' }} to='/womens'>WOMEN</Link> {manue === "womens" ? <hr /> : <></>}</li>
            <li onClick={() => { setmanue("kids") }}><Link style={{ textDecoration: 'none' }} to='/kids'>KIDS</Link> {manue === "kids" ? <hr /> : <></>}</li>
          </ul>
          <div className="nav-login-cart">
            {localStorage.getItem('token') ? <button onClick={()=>{localStorage.removeItem('token');navigate('/login') }}> logout</button> :<Link to='/login'> <button>Login</button></Link> }
            <Link to='/carts'> <img src={carticon} alt="" /></Link>
            <div className="cart-count">{counttotalItem()}</div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar
