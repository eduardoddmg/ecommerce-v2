import React from 'react'
import Cardapio from '../Cardapio/Cardapio/Cardapio'
import About from '../About/About'
import ProductsGeral from '../ProductsGeral/ProductsGeral'
import Contato from '../Contato/Contato'

const Principal = ({info, setInfo, quantidade, setQuantidade, cart, setCart, showMenu, setShowMenu}) => {
  return (
    <div>
      {!showMenu && <>
        <About />
        <ProductsGeral />
        <Cardapio info={info} setInfo={setInfo} quantidade={quantidade} setQuantidade={setQuantidade} cart={cart} setCart={setCart}/>
        <Contato />
      </>}
    </div>
  )
}

export default Principal