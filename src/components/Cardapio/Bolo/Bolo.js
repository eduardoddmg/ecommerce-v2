import React from 'react';
import './bolo.css'
import { FiShoppingBag } from "react-icons/fi";
import { Link } from 'react-router-dom'

const Bolo = ({info, setInfo}) => {
  return (
      <>
      <section className="titulo">
        <div className='linha'></div>
          <h1 className='title'>Bolos</h1>
        <div className='linha'></div>
      </section>
    <section className="items">
      {info.map((item, index) => {
        if (item.categoria === "bolo")
          return (
            <section className="card_item" key={index}>
              <Link to={`/${item.id}`}>
                <img src={require(`../../../assets/${item.id}.jpg`)} alt="" />
              </Link>
              <section className="end_items">
                <section className="end_items_text">
                  <p>{item.nome}</p>
                  <p>R${item.preco},00</p>
                </section>
                <section className="end_items_btn">
                  <button onClick={() => item.quantidade++}>
                    <FiShoppingBag className="icon_bag" />
                  </button>
                </section>
              </section>
            </section>
          );
        })}
    </section>
        </>
  );
}

export default Bolo