import React from 'react'
import Ovo from '../Ovo/Ovo'
import Bolo from '../Bolo/Bolo'

const Cardapio = ({info, setInfo, quantidade, setQuantidade, cart, setCart}) => {
  return (
    <div>
      <Ovo
        info={info}
        setInfo={setInfo}
        quantidade={quantidade}
        setQuantidade={setQuantidade}
        cart={cart}
        setCart={setCart}
      />
      <Bolo
        info={info}
        setInfo={setInfo}
        quantidade={quantidade}
        setQuantidade={setQuantidade}
        cart={cart}
        setCart={setCart}
      />
    </div>
  );
}

export default Cardapio