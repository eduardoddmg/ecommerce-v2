import React from 'react'
import { FiShoppingBag } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import './navbar.css'
import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'


const Navbar = ({info, setInfo, quantidade, setQuantidade, cart, setCart, showMenu, setShowMenu}) => {

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if(showMenu) {
      window.document.body.style.overflowY = "hidden";
      window.scrollTo(0,0);
    }
    else 
    {
      window.document.body.style.overflowY = "auto";
    }
});

  return (
    <>
      <nav className="navbar">
        <section className="navbar_links">
          <section className="navbar_links_header">
            <button onClick={() => setShowMenu(!showMenu)}>
              <GiHamburgerMenu className="burger_icon" />
            </button>
            <Link to="/">LOGO</Link>
          </section>
          <section className="navbar_links_items">
            <Link to="/">
              Início
            </Link>
            <Link to="/produtos">
              Produtos
            </Link>
            <Link to="/contato">
              Contatos
            </Link>
          </section>
        </section>
        <section className="navbar_icons">
          <Link to="/carrinho" className="btn_bag">
            <FiShoppingBag className="bag" />
            <p className="value_bag">
              {cart && cart.length} {!cart && 0}
            </p>
          </Link>
        </section>
      </nav>
      {showMenu && (
        <NavbarMobile showMenu={showMenu} setShowMenu={setShowMenu} />
      )}
    </>
  );
}

const NavbarMobile = ({showMenu, setShowMenu}) => {
  return (
    <section className="items_navbar_mobile">
      <button className="close_navbar_mobile" onClick={() => setShowMenu(!showMenu)}>X</button>
      <section className="items_navbar_mobile_links">
        <Link to="/" onClick={() => setShowMenu(false)}>Início</Link>
        <Link to="/produtos" onClick={() => setShowMenu(false)}>Produtos</Link>
        <Link to="/contato" onClick={() => setShowMenu(false)}>Contatos</Link>
      </section>
    </section>
  );
}

export default Navbar