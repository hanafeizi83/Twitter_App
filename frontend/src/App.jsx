import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import LoginPage from './feature/auth/login/LoginPage'
import SignupPage from './feature/auth/signup/SignupPage'
import Home from './pages/Home'
import AppLayout from './ui/AppLayout'
import Notification from './pages/notification/Notification'
import Profile from './pages/profile/Profile'
import { Toaster } from 'react-hot-toast'
import useUser from './hook/useUser'
import ProtecteRoute from './ui/ProtecteRoute'
function App() {
  const { authUser } = useUser();
  return (
    <>
      <Toaster />
      <Routes>
        <Route path='/' element={<ProtecteRoute>
          <AppLayout />
        </ProtecteRoute>}>
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
