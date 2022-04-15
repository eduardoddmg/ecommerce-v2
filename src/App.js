import Navbar from "./components/Navbar/Navbar";
import './geral.css';
import data from './data.json';
import {useState, useEffect} from 'react';
import Produto from './components/Produto/Produto'
import { Routes, Route } from "react-router-dom";
import Erro from "./components/erro/Erro";
import Principal from "./components/Principal/Principal";
import Carrinho from "./components/Carrinho/Carrinho";

function App() {
  const [info, setInfo]  = useState(data);
  const [cart, setCart] = useState(null);
  const [quantidade, setQuantidade] = useState(0);

  useEffect(() => {
    console.log(cart);
  });

  return (
    <>
    <Navbar info={info} setInfo={setInfo} quantidade={quantidade} setQuantidade={setQuantidade} />
    <Routes>
      <Route path="/" element={<Principal info={info} setInfo={setInfo} quantidade={quantidade} setQuantidade={setQuantidade} cart={cart} setCart={setCart} />} />
      <Route path="/produto/:id" element={<Produto info={info} setInfo={setInfo} />} />    
      <Route path="/carrinho" element={<Carrinho cart={cart} setCart={setCart} />} /> 
      <Route path="*" element={<Erro />} />  
    </Routes>
    </>
  );
}

export default App;
