import { Route, Routes } from 'react-router-dom'
import './App.css'
import LoginPage from './feature/auth/login/LoginPage'
import SignupPage from './feature/auth/signup/SignupPage'
import RightPanel from './ui/RightPanel'
import Sidebar from './ui/Sidebar'
import Home from './pages/Home'
import AppLayout from './ui/AppLayout'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route path='/' element={<Home />} />
          {/* <Route path='/notification' element={<Notification />} />
          <Route path='/profile/:username' element={<Profile />} /> */}
        </Route>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
      </Routes>
    </>
  )
}

export default App
