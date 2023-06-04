import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CadastroPage from './pages/CadastroPage'
import HabitosPage from './pages/HabitosPage'
import Historico from './pages/Historico'
import Hoje from './pages/Hoje'
import LoginPage from './pages/LoginPage'
import { UserProvider } from '../src/UserContext'
import { ProgressoProvider } from './ProgressoContext'

function App() {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <ProgressoProvider>
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/cadastro" element={<CadastroPage />} />
              <Route path="/hoje" element={<Hoje />} />
              <Route path="/habitos" element={<HabitosPage />} />
              <Route path="/historico" element={<Historico />} />
            </Routes>
          </ProgressoProvider>
        </UserProvider>
      </BrowserRouter>
    </>
  )
}

export default App
