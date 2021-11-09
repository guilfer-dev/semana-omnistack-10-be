import { useEffect, useState } from 'react';
import api from './services/api'
import DevItem from './components/DevItem'
import DevForm from './components/DevForm'

import './App.css';
import './Main.css';
import './global.css'
import './Sidebar.css'

function App() {

  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const res = await api.get('/devs')
      setDevs(res.data)
    }
    loadDevs();

  }, [])

  async function handleAddDev(data) {
    try {
      const res = await api.post('/devs', data);
      setDevs([...devs, res.data]);
    }
    catch (err) {
      alert("Usuário não encontrado")
    }
  }


  return (
    <div className="App">
      <aside>
        <strong>
          Cadastrar
        </strong>
        <DevForm onSubmit={handleAddDev} />
      </aside >
      <main>
        <ul>
          {devs.map(dev => <DevItem key={dev._id} dev={dev}></DevItem>)}
        </ul>
      </main>
    </div >
  );
}

export default App;
