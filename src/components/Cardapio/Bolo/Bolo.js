import React from 'react';
import './bolo.css'
import { FiShoppingBag } from "react-icons/fi";

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
            <section className='card_item' key={index}>
              <img src={require(`../../../assets/${item.id}.jpg`)} alt="" />
              <section className="end_items">
                <section className="end_items_text">
                    <p>{item.nome}</p>
                    <p>R${item.preco},00</p>
                </section>
                <section className="end_items_btn">
                    <button><FiShoppingBag className="icon_bag" /></button>
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