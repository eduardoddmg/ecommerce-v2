import React from 'react'
import { FiShoppingBag } from "react-icons/fi";
import './navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <section className="navbar_links">
        <section className="navbar_links_header">
          <a href="#">LOGO</a>
        </section>
        <section className="navbar_links_items">
          <a href="#">HOME</a>
          <a href="#">PRODUCTS</a>
          <a href="#">ABOUT</a>
          <a href="#">CONTACT</a>
        </section>
      </section>
      <section className="navbar_icons">
        <button className='btn_bag'>
          <FiShoppingBag className="bag" />
          <p className='value_bag'>1</p>
        </button>
      </section>
    </nav>
  );
}

export default Navbar