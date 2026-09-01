import { useState } from 'react'
import './App.css'

function App() {
  const [nome, setNome] = useState('');
  const [equipamento, setEquipamento] = useState('');
  const [potencia, setPotencia] = useState('');
  const [horasDia, setHorasDia] = useState('');
  const [diasMes, setDiasMes] = useState('');
  const [tarifa, setTarifa] = useState('');

  const [consumo, setConsumo] = useState(null);
  const [custo, setCusto] = useState(null);
  const [classificacao, setClassificacao] = useState('');
  const [mensagem, setMensagem] = useState('');

  return (
    <main>
      <h1>Simulador de Consumo de Energia</h1>
      <p>Descubra quanto um equipamento consome por mês.</p>

      <div>
        <label htmlFor="nome">Nome do usuário:</label>
        <input
          id='nome'
          type="text"
          placeholder='Digite seu nome'
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="equipamento">Equipamento:</label>
        <input 
          id='equipamento'
          type="text"
          placeholder='Exemplo: geladeira'
          value={equipamento}
          onChange={(e) => setEquipamento(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="potencia">Potência em watts:</label>
        <input
          id='potencia'
          type="number"
          min="1"
          placeholder='Exemplo: 300'
          value={potencia}
          onChange={(e) => setPotencia(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="horasDia">Horas utilizadas por dia:</label>
        <input
          id='horasDia'
          type="number"
          min="0"
          max="24"
          step="0.5"
          value={horasDia}
          onChange={(e) => setHorasDia(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="diasMes">Dias utilizados no mês:</label>
        <input
          id='diasMes'
          type="number"
          min="1" max="31"
          value={diasMes}
          onChange={(e) => setDiasMes(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="tarifa">Tarifa de energia por kWh:</label>
        <input
          id='tarifa'
          type="number"
          min="0" step="0.01"
          placeholder='Exemplo: 1.10'
          value={tarifa}
          onChange={(e) => setTarifa(e.target.value)}
        />
      </div>

      <button type='submit'>Calcular consumo</button>
    </main>
  )
}

export default App;