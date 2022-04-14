import Navbar from "./components/Navbar/Navbar";
import './geral.css';
import data from './data.json';
import {useState, useEffect} from 'react';
import Cardapio from "./components/Cardapio/Cardapio/Cardapio"
import About from "./components/About/About"

function App() {
  const [info, setInfo]  = useState(data);
  return (
    <>
    <Navbar />
    <About />
    <Cardapio info={info} setInfo={setInfo} />
    </>
  );
}

export default App;
