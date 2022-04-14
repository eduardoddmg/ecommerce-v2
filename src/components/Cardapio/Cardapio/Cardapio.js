import React from 'react'
import Ovo from '../Ovo/Ovo'
import Bolo from '../Bolo/Bolo'

const Cardapio = ({info, setInfo}) => {
  return (
    <div>
        <Ovo info={info} setInfo={setInfo} />
        <Bolo info={info} setInfo={setInfo} />
    </div>
  )
}

export default Cardapio