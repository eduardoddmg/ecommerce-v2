import React from 'react'
import './about.css';
import {
  FaCcAmazonPay,
  FaCcApplePay,
  FaCcPaypal
} from "react-icons/fa";

import {
  MdPayments,
  MdPayment
} from "react-icons/md";

const About = () => {
  return (
    <>
    <section className="principal_about_container">
      <section className="principal_about informacao">
        <section className="principal_text informacao_text">
          <h1>LOJA DE DOCES</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus,
            voluptatem labore quibusdam distinctio neque sit, reiciendis
            repellat aliquid aliquam nihil nulla exercitationem atque
            perferendis rerum molestias qui omnis? Architecto, odio!
          </p>
        </section>
        <section className="principal_informacao_icon">
          <FaCcAmazonPay />
          <FaCcApplePay />
          <FaCcPaypal />
          <MdPayment />
          <MdPayments />
        </section>
      </section>
      <section className="principal_about_container_img">
        <img src={require('../../assets/1.jpg')} alt="imagem" />
      </section>
    </section>
    </>
  );
}

export default About