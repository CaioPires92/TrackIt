import { useEffect } from 'react'
import { createContext } from 'react'
import { useState } from 'react'

const userContext = createContext()

export function UserProvider({ children }) {
  const [user, setUser] = useState({ data: null, isLogged: false })

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser({ data: JSON.parse(storedUser), isLogged: true })
    }
  }, [])

  console.log('user na Pagina UserContext', user)

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  )
}

export default userContext
