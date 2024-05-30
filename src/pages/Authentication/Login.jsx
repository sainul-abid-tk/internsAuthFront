import { Button, IconButton } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import authImg from '../../assets/Images/authImg.png'
import { Visibility, VisibilityOff } from '@mui/icons-material';
import apple from '../../assets/Images/icons8-apple-50.png'
import facebook from '../../assets/Images/icons8-facebook-48.png'
import google from '../../assets/Images/icons8-google-48.png'
import { useNavigate } from 'react-router-dom';
import { googleLoginAPI, loginAPI } from '../../services/allAPI';
import {decrypt} from 'n-krypta'
import {toast} from 'react-toastify'
import {userRoleResponseContext } from '../../ContextAPI/TokenAuth';
import { useGoogleLogin} from '@react-oauth/google';
function Login() {
  const {userRoleResponse,setUserRoleResponse}=useContext(userRoleResponseContext)
    const navigate=useNavigate()
    const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [userDetails,setUserDetails]=useState({
    email:'',
    password:'',
    username:'',
    profilePic:''
  })
  // navigation Details
  const navigationDetails=(existingUser)=>{
    const role=existingUser?.role
    if(role==='admin'){
    setTimeout(() => {
      setUserRoleResponse(role)
      navigate('/adhome')
    }, 1500);
    }else{
    setTimeout(() => {
      setUserRoleResponse(role)
      navigate('/landing')
    }, 1500);
    }
  }
  // normal login
  const handleLogin=async(e)=>{
    e.preventDefault()
    const {email,password}=userDetails
    if( !email || !password){
      toast.warning("please fill the form!!!")
    }else{
      const result=await loginAPI(userDetails)
      if(result.data){
        toast.success('login successfull!!')
        const existingUser=result.data.existingUser
        const encryptedPassword=result?.data.existingUser.password
        existingUser.password=decrypt(`${encryptedPassword}`,'Aabi1234')
        sessionStorage.setItem('userDetails',JSON.stringify(result.data.existingUser))
        sessionStorage.setItem('token',JSON.stringify(result.data.token))
        navigationDetails(existingUser)
      }else{
        toast.error("Invalid Entry!!");
      }
    }
  }
  // google login
  const googleLogin = 
  useGoogleLogin({
    onSuccess: tokenResponse =>{ 
      const accessToken=tokenResponse?.access_token
      fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
  headers: {
    'Authorization': `Bearer ${accessToken}`
  }
})
.then(response => response.json())
.then(async data => {
  // Extract email and username from the response
  console.log(data);
  const userData={
    email:data.email,
    username:data.name,
    profilePic:data.picture    
  }
  
    const result=await googleLoginAPI(userData)
    console.log(result);
    if(result.data){
      const existingUser=result.data.existingUser
      sessionStorage.setItem('userDetails',JSON.stringify(existingUser))
      sessionStorage.setItem('token',JSON.stringify(result.data.token))
      navigationDetails(existingUser)
    }else{
      toast.warn(result.response.data)
    }
})
.catch(error => {
  console.error('Error fetching user info:', error);
})
    }
  });

  useEffect(()=>{
    sessionStorage.removeItem('userDetails')
    sessionStorage.removeItem('token')
  },[])
  return (
    <>
    {/* Header */}
    <div className='flex justify-start px-5 h-14 items-center'>
    <h3 className='text-2xl font-semibold text-lime-400'>D'Watch</h3>
    </div>
    <div className='min-h-screen grid grid-cols-2  max-lg:grid-cols-1'>
        {/* Description */}
     <div className='flex justify-center items-center px-7 relative max-md:flex-col-reverse max-md:mb-8 max-md:justify-start max-lg:static  max-md:items-start max-md:px-4 '>
       <div className='-mt-32 max-lg:mt-0 w-full '>
       <h1 className='text-5xl max-sm:text-4xl font-bold mb-5'>Sign in to</h1>
       <h2 className='text-4xl max-sm:text-2xl mb-10 whitespace-nowrap'>Lorem Ipsm is simply</h2>
       <h3 className='text-lg '>If you don't have an account register <br /> You can <span onClick={()=>{navigate('/signup')}} className='text-blue-500 cursor-pointer'>Register here !</span> </h3>
       </div> 
       <div className='flex justify-center items-center w-full'>
       <img className='absolute max-lg:static right-0 bottom-0' width={300} src={authImg} alt="" />
       </div>
     </div>
     {/* Form */}
     <div className='flex justify-center flex-col items-center'>
       <div className='space-y-8'>
       <h1 className='text-3xl font-bold'>Sign in</h1>
        <form onSubmit={(e)=>handleLogin(e)} className='flex flex-col space-y-8 w-[400px] max-sm:w-[350px]'>
         <div className='h-14 bg-blue-100  flex items-center rounded-lg px-4'>
          <input value={userDetails.email} onChange={(e)=>setUserDetails({...userDetails,email:e.target.value})} type="text" className='bg-blue-100 h-12 w-full outline-none text-lg' placeholder='Enter email' />
         </div>
         <div>
         <div className='h-14 bg-blue-100  flex items-center justify-between rounded-lg px-4'>
          <input value={userDetails.password} onChange={(e)=>setUserDetails({...userDetails,password:e.target.value})} type={showPassword?'text':'password'} className='bg-blue-100 h-12 w-full outline-none text-lg' placeholder='password' />
          <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
         </div>
         <p className='text-blue-500 text-end cursor-pointer'>Forgot password?</p>
         </div>
         <Button type='submit'  variant='contained' style={{backgroundColor:'rgb(30 70 175 ))'}} className='bg-blue-800 h-12'>Login</Button>
        </form>
        <p className='text-center text-gray-500'>Or continue with</p>
        <div  className='flex   justify-center space-x-5 w-full'>
          <img src={facebook} width={30} height={30} alt="" />
          <img src={apple} width={30} height={30} alt="" />
          <img onClick={googleLogin} className='cursor-pointer' src={google} width={30} height={30} alt="" />
          </div>
        </div>
       </div>
    </div>    
     </>
  )
}

export default Login