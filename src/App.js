import './App.css'

import React,{ useState } from 'react'

export default function App() {

  const [ peso, setPeso ] = useState('')
  const [ altura, setAltura ] = useState('')
  const [ mensagem, setMensagem ] = useState('')

  function calcularImc() {
    const altM2 = altura/100
    const imc = peso / (altM2 * altM2)

    if( imc < 18.5 ){

      setMensagem('Alerta de magreza - imc: ' + imc.toFixed(2))

    }else if( imc >= 18.5 && imc <= 24.9 ){

      setMensagem('Normal - imc: ' + imc.toFixed(2))

    }else if( imc >= 24.9 &&  imc <= 30.0 ){

      setMensagem('Sobrepeso - imc: ' + imc.toFixed(2))

    }else if( imc > 30.0){

      setMensagem('Alerta de obesidade - imc: ' + imc.toFixed(2))

    }


    
  }

  return (
    <div className="app">
      <h1>Calculadora imc</h1>
      <span>Vamos calcular seu imc</span>
      <input 
        type="text"
        placeholder="Seu peso (kg) Ex: 74"
        value={peso}
        onChange = { event => setPeso(event.target.value)}
      ></input>
      <input 
        type="text"
        placeholder="Sua altura (cm) Ex: 174"
        value={altura}
        onChange = { event => setAltura(event.target.value)}
      ></input>

      <button
        onClick = {calcularImc}
      >
      Calcular
      </button>

      <h2
      >{mensagem}</h2>
    </div>

    
  )
}