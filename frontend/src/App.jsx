import { Route, Routes } from 'react-router-dom'
import './App.css'
import LoginPage from './feature/auth/login/LoginPage'
import SignupPage from './feature/auth/signup/SignupPage'
import Home from './pages/Home'
import AppLayout from './ui/AppLayout'
import Notification from './pages/Notification'
import Profile from './pages/Profile'
import { Toaster } from 'react-hot-toast'
function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/notification' element={<Notification />} />
          <Route path='/profile/:username' element={<Profile />} />
        </Route>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/singup' element={<SignupPage />} />
      </Routes>
    </>
  )
}

export default App
