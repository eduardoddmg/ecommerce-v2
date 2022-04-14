import React from 'react';
import './ovo.css'
import { FiShoppingBag } from "react-icons/fi";

const Ovo = ({info, setInfo}) => {
  return (
      <>
        <section className="titulo">
        <div className='linha'></div>
          <h1 className='title'>Ovo de Páscoa</h1>
        <div className='linha'></div>
      </section>
    <section className="items">
      {info.map((item, index) => {
        if (item.categoria == "ovo de pascoa")
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

export default Ovo