import React from 'react'
import Cardapio from '../Cardapio/Cardapio/Cardapio'
import About from '../About/About'

const Principal = ({info, setInfo, quantidade, setQuantidade, cart, setCart}) => {
  return (
    <div>
        <About />
        <Cardapio info={info} setInfo={setInfo} quantidade={quantidade} setQuantidade={setQuantidade} cart={cart} setCart={setCart}/>
    </div>
  )
}

export default Principal