import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CadastroPage from './pages/CadastroPage'
import HabitosPage from './pages/HabitosPage'
import Historico from './pages/Historico'
import Hoje from './pages/Hoje'
import LoginPage from './pages/LoginPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/cadastro" element={<CadastroPage />} />
          <Route path="/hoje" element={<Hoje />} />
          <Route path="/habitos" element={<HabitosPage />} />
          <Route path="/historico " element={<Historico />} />
          <Route path="/habitos" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
