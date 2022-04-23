import React from 'react';
import { Link } from 'react-router-dom';
import './erro.css'

const Erro = () => {
  return (
    <section className='container_erro'>
      <p>Não há nenhuma página com essa rota</p>
      <h1>Error 404 :(</h1>
      <Link to='/'><button>Voltar</button></Link>
    </section>
  )
}

export default Erro