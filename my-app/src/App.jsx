import LandingPage from './pages/LandingPage/LandingPage'
import Login from './pages/Auth/Login/Login'
import SignUp from './pages/Auth/SignUp/SignUp'
import UserDashboard from './pages/UserDashboard/UserDashboard'
import AdminDashboard from './pages/AdminDashboard/AdminDashboard'
import { authRequest } from './authApi'
import { useState, useEffect } from 'react'

function App() {
  const [page, setPage] = useState('landing')
  const [account, setAccount] = useState(null)
  const [notice, setNotice] = useState('')
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('app-theme') || 'black-blue-red'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('app-theme', theme)
  }, [theme])

  function toggleTheme() {
    setTheme((prev) => (prev === 'black-blue-red' ? 'default' : 'black-blue-red'))
  }

  function navigate(nextPage, nextAccount, nextNotice = '') {
    if (nextAccount) setAccount(nextAccount)
    setNotice(nextNotice)
    setPage(nextPage)
  }

  async function logout() {
    const token = localStorage.getItem('authToken')
    try {
      if (token) await authRequest('logout', { token })
    } finally {
      localStorage.removeItem('authToken')
      setAccount(null)
      setPage('landing')
    }
  }

  if (page === 'login') {
    return <Login onNavigate={navigate} notice={notice} theme={theme} onToggleTheme={toggleTheme} />
  }

  if (page === 'signup') {
    return <SignUp onNavigate={navigate} theme={theme} onToggleTheme={toggleTheme} />
  }

  if (page === 'dashboard') {
    return (
      <UserDashboard
        onNavigate={navigate}
        onLogout={logout}
        userEmail={account?.email}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
    )
  }

  if (page === 'adminDashboard') {
    return (
      <AdminDashboard
        account={account}
        onLogout={logout}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
    )
  }

  return <LandingPage onNavigate={navigate} theme={theme} onToggleTheme={toggleTheme} />
}

export default App