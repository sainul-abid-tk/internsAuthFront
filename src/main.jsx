import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import TokenAuth from './ContextAPI/TokenAuth.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId='275372381355-mdakemqp9s22jgvuft4j3cgcspg41eqm.apps.googleusercontent.com'>
    <BrowserRouter>
    <TokenAuth>
    <App />
    </TokenAuth>
    </BrowserRouter>
    </GoogleOAuthProvider>
  </React.StrictMode>,
)
