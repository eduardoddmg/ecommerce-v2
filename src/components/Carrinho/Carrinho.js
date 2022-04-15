import React from 'react'
import './carrinho.css'

const Carrinho = ({cart, setCart}) => {
  return (
    <div>
        {cart && cart.map((produto, index) => {
            return (
                <section className="principal" key={index}>
                    <h1>{produto.nome}</h1>
                    <h3>Quantidade: {produto.quantidade}</h3>
                    <img src={require(`../../assets/${produto.id}.jpg`)} alt="imagem" />
                </section>
            )
        })}
    </div>
  )
}

export default Carrinho