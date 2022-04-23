import React from 'react';
import './contato.css'

const Contato = () => {
  return (
    <section className="contato">
      <h1>Contato</h1>
      <form className="input">
        <section className="line_two">
          <section className="input_line_two">
            <label>Nome</label>
            <input type="text" className="input_name" placeholder="Nome..." />
          </section>
          <section className="input_line_two">
            <label>Sobrenome</label>
            <input
              type="text"
              className="input_sobrename"
              placeholder="Sobrenome..."
            />
          </section>
        </section>
        <section className="line_one">
          <div className="input_line_one">
            <label>Email</label>
            <input type="email" className="input_email" placeholder="Email..." />
          </div>
        </section>
        <section className="line_one">
          <div className="input_line_one">
            <label>Mensagem</label>
            <textarea className='input_text' cols="30" rows="10" defaultValue="" />
          </div>
        </section>
        <section className="btn_submit">
          <button type="submit">Enviar</button>
        </section>
      </form>
    </section>
  );
}

export default Contato