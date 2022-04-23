import React from 'react';
import './footer.css';
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer_principal">
      <div className="footer_principal_div">
        <h2>Contact Info</h2>
        <a href="#">PHONE: Toll Free (123) 456-7890</a>
        <a href="#">EMAIL: mail@ecommerce.com</a>
        <a href="#">ADDRESS: 123 Street Name, City, Egypt</a>
        <a href="#">Mon - Sun / 9:00 AM - 8:00 PM</a>
      </div>
      <div className="footer_principal_div">
        <h2>Cardapio</h2>
        <a href="#">Ovo de páscoa</a>
        <a href="#">Bolo</a>
        <a href="#">Doces</a>
        <a href="#">Variados</a>
      </div>
      <div className="footer_principal_div">
        <h2>My Account</h2>
        <a href="#">About Us</a>
        <a href="#">Returns</a>
        <a href="#">Custom Service</a>
        <a href="#">Terms and Condition</a>
      </div>
      <div className="footer_principal_icons">
        <a href="#"><FaFacebook /></a>
        <a href="#"><FaWhatsapp /></a>
        <a href="#"><FaInstagram /></a>
      </div>
      <div className="footer_principal_text">
        <p>Todos os direitos reservados</p>
      </div>
    </div>
  );
}

export default Footer