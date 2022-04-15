import React from 'react'
import { FiShoppingBag } from "react-icons/fi";
import './navbar.css'
import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'


const Navbar = ({info, setInfo, quantidade, setQuantidade}) => {
useEffect(() => {
  info.map((val) => setQuantidade(val.quantidade + quantidade));
  console.log(info);
});
  return (
    <nav className="navbar">
      <section className="navbar_links">
        <section className="navbar_links_header">
          <Link to="/">LOGO</Link>
        </section>
        <section className="navbar_links_items">
          <Link to="/">HOME</Link>
          <Link to="/">PRODUCTS</Link>
          <Link to="/">ABOUT</Link>
          <Link to="/">CONTACT</Link>
        </section>
      </section>
      <section className="navbar_icons">
        <Link to="/carrinho" className='btn_bag'>
          <FiShoppingBag className="bag" />
          <p className='value_bag'>{quantidade}</p>
        </Link>
      </section>
    </nav>
  );
}

export default Navbar