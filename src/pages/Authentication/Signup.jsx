import { Button, IconButton } from '@mui/material'
import React, { useState } from 'react'
import authImg from '../../assets/Images/authImg.png'
import { Visibility, VisibilityOff } from '@mui/icons-material';
import apple from '../../assets/Images/icons8-apple-50.png'
import facebook from '../../assets/Images/icons8-facebook-48.png'
import google from '../../assets/Images/icons8-google-48.png'
import { useNavigate } from 'react-router-dom';
import { signUpAPI } from '../../services/allAPI';
import { toast } from 'react-toastify';

function Signup() {
    const navigate=useNavigate()
    const [showPassword, setShowPassword] = useState(false);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  }
  const [userDetails,setUserDetails]=useState({
    username:'',
    email:'',
    password:'',
    confirmPassword:''
  })
  const handleSignup=async(e)=>{
    e.preventDefault()
    const {username,email,password,confirmPassword}=userDetails
    
    if(!username || !email || !password || !confirmPassword){
      toast.warn("please fill the form!!!")
    }else{
      if(confirmPassword===password){
        const result=await signUpAPI(userDetails)
        console.log(result);
        if(result.status===200){
          toast.success('Signup successfull!!')
          setTimeout(() => {
            setUserDetails({
              username:'',
              email:'',
              password:''
            })
            navigate('/')
          }, 2000);
          
        }else{
          toast.info(result.response.data);
        }
      }else{
        toast.info('please check your passwords!')
      }
     
    }
  }

  return (
    <>
    {/* Header */}
    <div className='flex justify-start px-5 h-14 items-center'>
    <h3 className='text-2xl font-semibold text-lime-400'>D'Watch</h3>
    </div>
    <div className='min-h-screen grid grid-cols-2  max-lg:grid-cols-1'>
     {/* Form */}
     <div className='flex justify-center max-lg:order-2 flex-col items-center'>
       <div className='space-y-8'>
       <h1 className='text-3xl font-bold text-center'>Sign Up</h1>
        <form onSubmit={(e)=>handleSignup(e)} className='flex flex-col space-y-8 w-[400px] max-sm:w-[350px]'>
        <div className='h-14 bg-blue-100  flex items-center rounded-lg px-4'>
          <input value={userDetails.username} onChange={(e)=>setUserDetails({...userDetails,username:e.target.value})} type="text" className='bg-blue-100 h-12 w-full outline-none text-lg' placeholder='Enter username' />
         </div>
         <div className='h-14 bg-blue-100  flex items-center rounded-lg px-4'>
          <input value={userDetails.email} onChange={(e)=>setUserDetails({...userDetails,email:e.target.value})} type="text" className='bg-blue-100 h-12 w-full outline-none text-lg' placeholder='Enter email' />
         </div>
         <div className='h-14 bg-blue-100  flex items-center justify-between rounded-lg px-4 '>
          <input value={userDetails.password} onChange={(e)=>setUserDetails({...userDetails,password:e.target.value})} type={showPassword==='password'?'text':'password'} className='bg-blue-100 h-12 w-full outline-none text-lg' placeholder='password' />
          <IconButton
                  aria-label="toggle password visibility"
                  onClick={()=>showPassword=='password'?setShowPassword("null"):setShowPassword('password')}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword==='password' ? <VisibilityOff /> : <Visibility />}
                </IconButton>
         </div>
         <div className='h-14 bg-blue-100  flex items-center justify-between rounded-lg px-4 '>
          <input value={userDetails.confirmPassword} onChange={(e)=>setUserDetails({...userDetails,confirmPassword:e.target.value})} type={showPassword=='confirmPassword'?'text':'password'} className='bg-blue-100 h-12 w-full outline-none text-lg' placeholder='Confirm password' />
          <IconButton
                  aria-label="toggle password visibility"
                  onClick={()=>showPassword=='confirmPassword'?setShowPassword("null"):setShowPassword('confirmPassword')}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword=='confirmPassword' ? <VisibilityOff /> : <Visibility />}
                </IconButton>
         </div>
         <Button type='submit' variant='contained' style={{backgroundColor:'rgb(30 70 175 ))'}} className='bg-blue-800 h-12'>Register</Button>
        </form>
        <p className='text-center text-gray-500'>Or continue with</p>
        <div className='flex space-x-6 justify-center'>
          <img src={facebook} width={30} height={30} alt="" />
          <img src={apple} width={30} height={30} alt="" />
          <img src={google} width={30} height={30} alt="" />
        </div>
       </div>
    </div>
     {/* Description */}
     <div className='flex  max-lg:order-1  max-md:flex-col-reverse max-lg:static  max-lg:justify-center relative items-center max-md:mb-8'>
       <div className='-mt-32 max-lg:mt-0'>
       <h1 className='text-5xl max-sm:text-4xl font-bold mb-5'>Sign Up to</h1>
       <h2 className='text-4xl max-sm:text-2xl mb-10'>Lorem Ipsm is simply</h2>
       <h3 className='text-lg '>If you already have an account register <br /> You can <span onClick={()=>{navigate('/')}} className='text-blue-400  cursor-pointer'>Login here !</span> </h3>
       <h1></h1>
       </div> 
       <img className='absolute max-lg:static right-0 bottom-0' width={300} src={authImg} alt="" />
     </div> 
     </div>
    </>
  )
}

export default Signup