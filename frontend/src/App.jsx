import './App.css'
import LoginPage from './feature/auth/login/LoginPage'
import SignupPage from './feature/auth/signup/SignupPage'
import RightPanel from './ui/RightPanel'
import Sidebar from './ui/Sidebar'

function App() {
  return (
    <>
   <Sidebar />
   <RightPanel/>
    </>
  )
}

export default App
