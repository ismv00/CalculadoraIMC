import { useState } from 'react';
import './app.css';

export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [mensagem, setMensagem] = useState('');

  function calcularImc() {
   const alt = altura / 100;
   const imc = (peso / (alt * alt)).toFixed(2)

    if(imc < 18.6) {
      setMensagem('Você está abaixo do peso! Seu IMC: ' + imc)
    }else if (imc >= 18.6 && imc < 24.9) {
      setMensagem('Você está com o peso normal! Seu IMC: ' + imc)
    }else if (imc >= 24.9 && imc < 29.9) {
      setMensagem('Alerta! Você está levemente acima do peso! Seu IMC: ' + imc)
    }else if(imc > 29.9) {
      setMensagem('Cuidado! Você entrou em obesidade! Seu IMC: ' + imc)
    }
    
  }

  return( 
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular seu IMC</span>

      <div className="area-input">
        <input 
          type="text" 
          placeholder="Peso em (kg) Ex: 99 " 
          value={peso} 
          onChange={(e) => setPeso(e.target.value)}
        />
        <input 
          type="text" 
          placeholder="Altura em (cm) Ex: 180 "
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />
        <button onClick={calcularImc}>Calcular</button>
      </div>

      <h2>{mensagem}</h2>
    </div>
  )
}