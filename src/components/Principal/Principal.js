import React from 'react'
import Cardapio from '../Cardapio/Cardapio/Cardapio'
import About from '../About/About'

const Principal = ({info, setInfo}) => {
  return (
    <div>
        <About />
        <Cardapio info={info} setInfo={setInfo} />
    </div>
  )
}

export default Principal