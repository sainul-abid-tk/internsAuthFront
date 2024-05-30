import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'
import Login from './pages/Authentication/Login'
import Signup from './pages/Authentication/Signup'
import Contact from './pages/Contact'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext} from 'react'
import {  userRoleResponseContext } from './ContextAPI/TokenAuth'
import AdHome from './Admin/AdHome'
import NotFound from './pages/NotFound'
import Header from './components/Header'
function App() {
  const location = useLocation();
  const {userRoleResponse,setUserRoleResponse}=useContext(userRoleResponseContext)
  return (
    <>
      <ToastContainer  
          autoClose={1500}
          position="top-center"
          theme="colored"/>
          {(userRoleResponse==='user'&&location.pathname!="/adhome")&&<Header />}
      <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/signup' element={<Signup/>}/>
          {userRoleResponse==='user'?
          <>
          <Route path='/landing' element={<LandingPage/>}/>
          <Route path='/contact' element={<Contact/>}/>
          </>:
          userRoleResponse==='admin'?
          // Admin Pages
           <>
          <Route path='/adhome' element={<AdHome/>}/>
          </>
          :
          <Route path='/*' element={<NotFound/>}/>
          }
      </Routes>
    </>
  )
}

export default App
