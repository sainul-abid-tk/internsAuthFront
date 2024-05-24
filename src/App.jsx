import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'
import Login from './pages/Authentication/Login'
import Signup from './pages/Authentication/Signup'
import Contact from './pages/Contact'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from 'react'
import { tokenAuthenticationContext } from './ContextAPI/TokenAuth'
function App() {
  const {isAuthorized,setIsAuthorized}=useContext(tokenAuthenticationContext)

  return (
    <>
      <ToastContainer  
          autoClose={2000}
          position="top-center"
          theme="colored"/>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/landing' element={isAuthorized?<LandingPage/>:<Login/>}/>
        <Route path='/contact' element={isAuthorized?<Contact/>:<Login/>}/>
      </Routes>
    </>
  )
}

export default App
