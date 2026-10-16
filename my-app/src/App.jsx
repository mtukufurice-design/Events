import LandingPage from './pages/LandingPage/LandingPage'
import Login from './pages/Auth/Login/Login'
import SignUp from './pages/Auth/SignUp/SignUp'
import UserDashboard from './pages/UserDashboard/UserDashboard'
import AdminDashboard from './pages/AdminDashboard/AdminDashboard'
import { authRequest } from './authApi'
import { useState } from 'react'

function App() {
  const [page, setPage] = useState('landing')
  const [account, setAccount] = useState(null)
  const [notice, setNotice] = useState('')

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
    return <Login onNavigate={navigate} notice={notice} />
  }

  if (page === 'signup') {
    return <SignUp onNavigate={navigate} />
  }

  if (page === 'dashboard') {
    return <UserDashboard onNavigate={navigate} onLogout={logout} userEmail={account?.email} />
  }

  if (page === 'adminDashboard') {
    return <AdminDashboard account={account} onLogout={logout} />
  }

  return <LandingPage onNavigate={navigate} />
}

export default App