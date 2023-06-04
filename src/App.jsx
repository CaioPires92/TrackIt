import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CadastroPage from './pages/CadastroPage'
import HabitosPage from './pages/HabitosPage'
import Historico from './pages/Historico'
import Hoje from './pages/Hoje'
import LoginPage from './pages/LoginPage'
import { UserProvider } from '../src/UserContext'
import { ProgressoProvider } from './ProgressoContext'
import { useState } from 'react'

function App() {
  const [data, setData] = useState([])

  const calcularProgresso = data => {
    const totalHabitos = data.length
    const habitosConcluidos = data.filter(item => item.done).length
    const progressoAtualizado = (habitosConcluidos / totalHabitos) * 100
    return progressoAtualizado.toFixed(0)
  }

  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <ProgressoProvider>
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/cadastro" element={<CadastroPage />} />
              <Route
                path="/hoje"
                element={
                  <Hoje
                    calcularProgresso={calcularProgresso}
                    data={data}
                    setData={setData}
                  />
                }
              />
              <Route
                path="/habitos"
                element={
                  <HabitosPage
                    calcularProgresso={calcularProgresso}
                    data={data}
                  />
                }
              />
              <Route
                path="/historico"
                element={
                  <Historico
                    calcularProgresso={calcularProgresso}
                    data={data}
                  />
                }
              />
            </Routes>
          </ProgressoProvider>
        </UserProvider>
      </BrowserRouter>
    </>
  )
}

export default App
