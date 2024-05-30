import { Button,TextField } from '@mui/material'
import React from 'react'
import Footer from '../components/Footer';
import menImg from '../assets/Images/men.jpg'
function Contact() {

  return (
    <>
     
    {/* Main page */}
    <div className=' min-h-screen py-3 grid grid-cols-2 max-lg:grid-cols-1 max-lg:flex max-lg:flex-col-reverse max-lg:px-2'>
     <div className='flex justify-center items-center px-5 max-lg:px-0 '>
      <div className='space-y-4 w-full '>
      <h1 className='text-5xl font-bold'>Contact Us</h1>
      <h1 className='text-2xl'>Subheading for description or instructions</h1>
      {/* form */}
      <form className='space-y-3'>
        <div className='grid grid-cols-2 w-full space-x-10 max-md:space-x-0 max-md:grid-cols-1 max-md:space-y-3'>
          <div className='flex flex-col space-y-2'>
            <label className='font-bold'>First name</label>
            <TextField   id="outlined-basic" label="Jane" variant="outlined" />
          </div>
          <div className='flex flex-col space-y-2'>
            <label className='font-bold'>First name</label>
            <TextField id="outlined-basic" label="Smitherton" variant="outlined" />
          </div>
        </div>
        <div className='flex flex-col space-y-2'>
            <label className='font-bold'>Email adress</label>
            <TextField type='email'   id="outlined-basic" label="email@janesfakedomain.net" variant="outlined"  />
          </div>
          <div className='flex flex-col space-y-2'>
            <label className='font-bold'>Your message</label>
            <TextField multiline rows={4}   id="outlined-basic" label="Enter your question or message" variant="outlined"  />
          </div>
          <Button style={{backgroundColor:'rgb(21, 21, 48)'}} variant='contained' className='w-full mt-4'>Submit</Button>
      </form>
      </div>
     </div>
     <div className='flex justify-center items-center mb-6'>
      <img src={menImg} width={420}  className='rounded-lg max-lg:w-auto' alt="" />
     </div>
    </div>

    <Footer/>
    
    </>
  )
}

export default Contact