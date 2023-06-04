import { createContext, useState } from 'react'

const ProgressoContext = createContext()

const ProgressoProvider = ({ children }) => {
  const [progresso, setProgresso] = useState(0)

  // Função para atualizar o progresso
  const atualizarProgresso = novoProgresso => {
    setProgresso(novoProgresso)
  }

  return (
    <ProgressoContext.Provider value={{ progresso, atualizarProgresso }}>
      {children}
    </ProgressoContext.Provider>
  )
}

export { ProgressoContext, ProgressoProvider }
