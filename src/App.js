import logo from './logo.svg';
import './App.css';
import Esquerda from './componentes/Esquerda/ConteudoLateralEsquerda';
import Centro from './componentes/Centro/ConteudoCentral';
import Direita from "./componentes/Direita/ConteudoLateralDireita.js";
// JSX 

function App() {
  return (
    <>
      <Esquerda />

      <div className='conteudoCentral'>
        <Centro/>
      </div>
      
      <div className='conteudoLateralDireita'>
        <Direita/>
      </div>
    </>
  );
}

export default App;
