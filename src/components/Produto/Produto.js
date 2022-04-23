import React from "react";
import { useParams } from "react-router-dom";
import "./produto.css";
import Carrossel from "../Carrossel/Carrossel";

import {useEffect} from 'react'

const Produto = ({ info, setInfo, cart, setCart }) => {
  useEffect(() => {
    window.scrollTo(0,0);
  }, [])
  let params = useParams();
  return (
    <div>
      {info.map((produto, index) => {
        if (index + 1 === parseInt(params.id))
          return (
            <section key={index} className="principal">
              <section className="principal_img">
                <img
                  src={require(`../../assets/${parseInt(params.id)}.jpg`)}
                  alt="imagem"
                />
              </section>
              <section className="principal_info">
                <h2>{produto.nome}</h2>
                <p>{produto.descricao}</p>
                <p className="price">R${produto.preco}.00</p>
                <button
                  onClick={() => {
                    produto.quantidade++;
                    console.log(info);
                    setCart(() => info.filter((val) => val.quantidade > 0));
                  }}
                >
                  Adicionar no carrinho
                </button>
              </section>
            </section>
          );
      })}
      {/* <Carrossel info={info} setInfo={setInfo} /> */}
    </div>
  );
};

export default Produto;
