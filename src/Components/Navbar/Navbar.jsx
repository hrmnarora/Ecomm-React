import React from 'react'
import "./Navbar.css"
import rocket from "../../assets/rocket.png";
import star from "../../assets/glowing-star.png";
import idButton from "../../assets/id-button.png";
import memo from "../../assets/memo.png";
import order from "../../assets/package.png";
import lock from "../../assets/locked.png";
import LinkWithIcon from './LinkWithIcon';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="align_center navbar">
        <div className='align_center'>
            <h1 className="navbar-heading ">CartWish</h1>
            <form className="navbar-form align_center">
                <input className='navbar-search' placeholder='Search' type="text" />
                <button className="search-button" type='submit'>Search</button>
            </form>
        </div>
        <div className="align_center navbar-links">
          <LinkWithIcon title="Home" link="/" emoji={rocket}/>
          <LinkWithIcon title="Products" link="/products" emoji={star}/>
          <LinkWithIcon title="LogIn" link="/login" emoji={idButton}/>
          <LinkWithIcon title="SignUp" link="/signup" emoji={memo}/>
          <LinkWithIcon title="My Orders" link="/myorders" emoji={order}/>
          <LinkWithIcon title="Logout" link="/logout" emoji={lock}/>
          <NavLink to="/cart" className="align_center">
            Cart <p className="align_center cart-counts">0</p>
          </NavLink>
        </div>
    </nav>
  )
}

export default Navbar