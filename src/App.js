import Navbar from "./components/Navbar/Navbar";
import './geral.css';
import data from './data.json';
import {useState, useEffect} from 'react';
import Produto from './components/Produto/Produto'
import { Routes, Route } from "react-router-dom";
import Erro from "./components/erro/Erro";
import Principal from "./components/Principal/Principal";
import Carrinho from "./components/Carrinho/Carrinho";
import Footer from "./components/Footer/Footer";
import Ovo from "./components/Cardapio/Ovo/Ovo";
import Bolo from "./components/Cardapio/Bolo/Bolo";
import Contato from "./components/Contato/Contato";

function App() {
  const [info, setInfo]  = useState(data);
  const [cart, setCart] = useState(null);
  const [quantidade, setQuantidade] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  let tamanho = window.innerWidth;

  useEffect(() => console.log(window.innerWidth));
  
  return (
    <>
      <Navbar
        info={info}
        setInfo={setInfo}
        quantidade={quantidade}
        setQuantidade={setQuantidade}
        cart={cart}
        setCart={setCart}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Principal
              info={info}
              setInfo={setInfo}
              quantidade={quantidade}
              setQuantidade={setQuantidade}
              cart={cart}
              setCart={setCart}
              showMenu={showMenu}
              setShowMenu={setShowMenu}
            />
          }
        />
        <Route
          path="/produto/:id"
          element={
            <Produto
              info={info}
              setInfo={setInfo}
              cart={cart}
              setCart={setCart}
            />
          }
        />
        <Route
          path="/ovo"
          element={
            <Ovo
              info={info}
              setInfo={setInfo}
              quantidade={quantidade}
              setQuantidade={setQuantidade}
              cart={cart}
              setCart={setCart}
            />
          }
        />
        <Route
          path="bolo"
          element={
            <Bolo
              info={info}
              setInfo={setInfo}
              quantidade={quantidade}
              setQuantidade={setQuantidade}
              cart={cart}
              setCart={setCart}
            />
          }
        />
        <Route
          path="/carrinho"
          element={
            <Carrinho
              info={info}
              setInfo={setInfo}
              cart={cart}
              setCart={setCart}
            />
          }
        />
        <Route path="/contato" element={<Contato />} />
        <Route
          path="/produtos"
          element={
            <Principal
              info={info}
              setInfo={setInfo}
              quantidade={quantidade}
              setQuantidade={setQuantidade}
              cart={cart}
              setCart={setCart}
            />
          }
        />
        <Route path="*" element={<Erro />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
