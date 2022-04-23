import React from 'react';
import './bolo.css'
import { FiShoppingBag } from "react-icons/fi";
import { Link } from 'react-router-dom';
import {useEffect} from 'react'

const Bolo = ({info, setInfo, quantidade, setQuantidade, cart, setCart}) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
              <Link to={`/produto/${item.id}`}>
                <img src={require(`../../../assets/${item.id}.jpg`)} alt="" />
              </Link>
              <section className="end_items">
                <section className="end_items_text">
                  <p>{item.nome}</p>
                  <p style={{fontWeight: 'bold'}}>R${item.preco},00</p>
                </section>
                <section className="end_items_btn">
                  <button
                    onClick={() => {
                      item.quantidade++;
                      console.log(info);
                      setCart(() => info.filter((val) => val.quantidade > 0));
                      setQuantidade(cart.length);
                    }}
                  >
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