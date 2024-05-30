import React, {  useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const NotFound = () => {
  const navigate = useNavigate();
  const unAuthorizedroute=()=>{
    toast.info('Access denied,Go back!!')
    setTimeout(() => {
      const role=JSON.parse(sessionStorage.getItem('userDetails'))?.role
     if(role){
      role==='user'?navigate('/landing'):navigate('/adhome')
     }else{
      navigate('/')
     }
    }, 1500);
  }
  useEffect(() => {
    unAuthorizedroute()
  }, []);
};

export default NotFound;
