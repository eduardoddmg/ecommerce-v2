import React from 'react';
import {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom'
import './carrinho.css';

const Carrinho = ({info, setInfo, cart, setCart}) => {
  const [precoTotal, setPrecoTotal] = useState(0);
  const [form, setForm] = useState(false);

  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');
  const [mensagem, setMensagem] = useState('');

  let navigate = useNavigate();
  
  useEffect(() => {
    let quantidade = 0;
    if (cart) for (let i of cart) quantidade += i.quantidade * i.preco
    setPrecoTotal(quantidade);
  }, [cart]);

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  const sendInfo = (e) => {
    e.preventDefault();
    let total = 0;
    for(let i of cart) total+=(i.quantidade*i.preco); 
    console.log({nome, sobrenome, telefone, endereco, mensagem});
    let message = '';
    message +=
    "nome: " +
      nome + " " + sobrenome +
      "\n" +
      "telefone: " +
      telefone +
      "\n" +
      "endereco: " +
      endereco +
      "\n" +
      "mensagem: " +
      mensagem +
      "\n" +
      "----------\n";
      for (let i of cart)
      {
        message += (i.quantidade+ 'x '+i.nome+'\n')
      }
      message+= '----------\n'
      message += "Total: R$" + total;
      message+= '\n';
      message = 'https://wa.me/5582996038479?text=' + message;
    message = message.replace(/ /gi, '%20');
    message = message.replace(/\n/gi, '%0a');
    console.log(message);
    setNome('');
    setSobrenome('');
    setEndereco('');
    setTelefone('');
    setMensagem('');
    window.location.href = message;
  }

  return (
    <div className="principal_container_carrinho">
      <section className="btn_compra back">
          <button className="btn_finalizar_compra back_btn" onClick={() => {
            navigate(-1);
          }}>
            {"<<"}
          </button>
      </section>
      <section className="container_carrinho">
      {cart &&
        cart.map((produto, index) => {
          return (
            <section className="principal_carrinho" key={index}>
              <section className="principal_carrinho_top">
                <img
                  src={require(`../../assets/${produto.id}.jpg`)}
                  alt="imagem"
                />
                <section className="principal_carrinho_text">
                  <h1>
                    {produto.quantidade}x {produto.nome}
                  </h1>
                  <section className="principal_carrinho_btn">
                    <button
                      className="btn_add"
                      onClick={() => {
                        for (let i of info)
                          if (produto.id === i.id) i.quantidade++;
                        setCart(() => info.filter((val) => val.quantidade > 0));
                      }}
                    >
                      +
                    </button>
                    <button
                      className="btn_rm"
                      onClick={() => {
                        for (let i of info)
                          if (produto.id === i.id) i.quantidade--;
                        setCart(() => info.filter((val) => val.quantidade > 0));
                      }}
                    >
                      X
                    </button>
                  </section>
                </section>
              </section>
            </section>
          );
        })}
      </section>

      {(!cart || cart.length === 0) && (
        <h1 className="info_carrinho_vazio">NÃO HÁ NADA NO SEU CARRINHO</h1>
      )}
      {cart && cart.length > 0 && (
        <>
          <h1 className="titulo_preco_final">Total: R${precoTotal}</h1>
          <section className="btn_compra">
            <button
              className="btn_finalizar_compra"
              onClick={(e) => {
                setForm(true);
              }}
            >
              Finalizar compra
            </button>
          </section>
        </>
      )}
      {(form && cart.length > 0) && (
        <>
          <form className="input">
            <h1>Envie seus dados</h1>
            <section className="line_two">
              <section className="input_line_two">
                <label>Nome</label>
                <input
                  type="text"
                  className="input_name"
                  placeholder="Nome..."
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
              </section>
              <section className="input_line_two">
                <label>Sobrenome</label>
                <input
                  type="text"
                  className="input_sobrename"
                  placeholder="Sobrenome..."
                  value={sobrenome}
                  onChange={(e) => setSobrenome(e.target.value)}
                />
              </section>
            </section>
            <section className="line_one">
              <div className="input_line_one">
                <label>Telefone</label>
                <input
                  type="tel"
                  className="input_email"
                  placeholder="Telefone..."
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                />
              </div>
            </section>
            <section className="line_one">
              <div className="input_line_one">
                <label>Endereco</label>
                <input
                  type="text"
                  className="input_email"
                  placeholder="Endereço..."
                  value={endereco}
                  onChange={(e) => setEndereco(e.target.value)}
                />
              </div>
            </section>
            <section className="line_one">
              <div className="input_line_one">
                <label>Observação</label>
                <textarea
                  className="input_text"
                  cols="30"
                  rows="10"
                  defaultValue=""
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                />
              </div>
            </section>
            <section className="btn_submit">
              <button type="submit" onClick={sendInfo}>Enviar</button>
            </section>
          </form>
        </>
      )}
    </div>
  );
}

export default Carrinho