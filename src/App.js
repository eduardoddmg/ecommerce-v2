import Navbar from "./components/Navbar/Navbar";
import './geral.css';
import data from './data.json';
import {useState, useEffect} from 'react';
import Produto from './components/Produto/Produto'
import { Routes, Route } from "react-router-dom";
import Erro from "./components/erro/Erro";
import Principal from "./components/Principal/Principal";

function App() {
  const [info, setInfo]  = useState(data);
  const [quantidade, setQuantidade] = useState(0);

  useEffect(() => console.log(info));
  return (
    <>
    <Navbar info={info} setInfo={setInfo} quantidade={quantidade} setQuantidade={setQuantidade} />
    <Routes>
      <Route path="/" element={<Principal info={info} setInfo={setInfo} />} />
      <Route path="/:id" element={<Produto info={info} setInfo={setInfo} />} />    
      <Route path="*" element={<Erro />} />    
    </Routes>
    </>
  );
}

export default App;
