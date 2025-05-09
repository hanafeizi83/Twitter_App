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
function App() {
  const { authUser } = useUser();
  return (
    <>
      <Toaster />
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route path='/' element={authUser ? <Home /> : <Navigate to='/login' />} />
          <Route path='/notification' element={authUser ? <Notification /> : <Navigate to='/login' />} />
          <Route path='/profile/:username' element={authUser ? <Profile /> : <Navigate to='/login' />} />
        </Route>
        <Route path='/login' element={!authUser ? <LoginPage /> : <Navigate to='/' />} />
        <Route path='/singup' element={!authUser ? <SignupPage /> : <Navigate to='/' />} />
      </Routes>
    </>
  )
}

export default App
