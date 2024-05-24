import { Button, Drawer, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Footer from '../components/Footer';
import menImg from '../assets/Images/men.jpg'
function Contact() {
  const navigate=useNavigate()
  const [isPageClicked,setIsPageClicked]=useState('contact')
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const handleLogout=()=>{
    sessionStorage.removeItem('userDetails')
    sessionStorage.removeItem('token')
    toast.success('Log out successfull')
    setTimeout(() => {
      navigate('/')
    }, 2000);
  }
  const DrawerList = (
    <div style={{ width: '330px' }}  role="presentation" className='pt-3 px-5 bg-white shadow-xl h-full ' >
      <div className='flex justify-end '>
      <i class="fa-solid fa-xmark text-3xl text-lime-400 " onClick={toggleDrawer(false)}></i>
      </div>
      <div className='flex flex-col justify-between h-[95%]'>
      <div className='space-y-12 mt-12'>
        <div className='h-12 flex border-b items-center '>
          <p onClick={()=>{navigate('/landing')}} className='text-xl font-bold text-lime-400'>Products</p>
        </div>
        <div className='h-12 flex border-b items-center '>
          <p className='text-xl font-bold text-lime-400'>About</p>
        </div>
        <div onClick={()=>{navigate('/contact')}} className='h-12 flex border-b items-center '>
          <p className='text-xl font-bold text-lime-400'>Contact</p>
        </div>
        <div className='h-12 flex border-b items-center '>
          <p className='text-2xl font-bold text-lime-400'><i class="fa-solid fa-cart-shopping text-lime-400 text-xl"></i>Cart</p>
        </div>
      </div>
      <p onClick={handleLogout} className='text-red-600 text-xl font-bold cursor-pointer '><i class="fa-solid fa-right-from-bracket "></i> Logout</p>
  
      </div>
    </div>
  );
  return (
    <>
     {/* Header */}
     <div className='flex justify-between px-12 max-[720px]:px-3 h-14 items-center'>
     <h3 onClick={()=>navigate('/landing')}  className='text-2xl font-semibold text-lime-400 cursor-pointer'>D'Watch</h3>
     {/* large screen */}
     <div className='flex justify-between space-x-16 max-[720px]:hidden'>
      <div>
      <p onClick={()=>{
        setIsPageClicked('products')
        navigate('/landing')
      }} className='text-lg cursor-pointer'>Products</p>
      <div className={isPageClicked=='products'&&'h-1 bg-lime-400 w-full rounded-lg'}></div>
      </div>
      <div>
      <p onClick={()=>{setIsPageClicked('about')}} className='text-lg cursor-pointer'>About</p>
      <div className={isPageClicked=='about'&&'h-1 bg-lime-400 w-full rounded-lg'}></div>
      </div>
      <div>
      <p onClick={()=>{
        setIsPageClicked('contact')
        navigate('/contact')
      }} className='text-lg cursor-pointer'>Contact</p>
      <div className={isPageClicked=='contact'&&'h-1 bg-lime-400 w-full rounded-lg'}></div>
      </div>
      <div>
      <p onClick={()=>{setIsPageClicked('cart')}} className='text-lg cursor-pointer'><i class="fa-solid fa-cart-shopping text-lime-400 text-xl"></i></p>
      <div className={isPageClicked=='cart'&&'h-1 bg-lime-400 w-full rounded-lg'}></div>
      </div>
      <i onClick={handleLogout} class="fa-solid fa-right-from-bracket text-red-600 text-2xl cursor-pointer"></i>
     </div>
     <div className='hidden max-[720px]:block'>
     <i onClick={toggleDrawer(true)} class="fa-solid fa-bars text-lime-400 text-2xl"></i>
      <Drawer  anchor='right' open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
    </div>
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