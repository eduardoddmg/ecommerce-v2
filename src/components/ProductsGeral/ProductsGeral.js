import React from 'react';
import './productsgeral.css';
import {useNavigate} from 'react-router-dom'

const ProductsGeral = () => {

    let navigate = useNavigate();

    return (
        <>
        <h1 className='titulo_top_card'>Confira as nossas opções</h1>
        <section className='card_principal'>
            <button className='card' onClick={() => navigate('/ovo')}>
                <img src={require('../../assets/1.jpg')} alt="img_card" />
                <h1>Ovos</h1>
            </button>
            <button className='card' onClick={() => navigate('/bolo')}>
                <img src={require('../../assets/24.jpg')} alt="img_card" />
                <h1>Bolos</h1>
            </button>
        </section>
        </>
  )
}

export default ProductsGeral