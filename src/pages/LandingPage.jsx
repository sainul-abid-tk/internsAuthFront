
import React, { useState } from 'react'
import Drawer from '@mui/material/Drawer';
import { useNavigate } from 'react-router-dom';

import LandingSlider from '../components/LandingSlider';
import CollectionSlider from '../components/CollectionSlider';
import { toast } from 'react-toastify';
function LandingPage() {
  const navigate=useNavigate()
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
 const [isPageClicked,setIsPageClicked]=useState('products')
 const handleLogout=()=>{
  sessionStorage.removeItem('userDetails')
  sessionStorage.removeItem('token')
  toast.success('Log out successfull')
  setTimeout(() => {
    navigate('/')
  }, 2000);
}
//  drewer elements
const DrawerList = (
  <div style={{ width: '330px' }}  role="presentation" className='pt-3 px-5 bg-teal-500 h-full ' >
    <div className='flex justify-end '>
    <i class="fa-solid fa-xmark text-3xl text-lime-400 " onClick={toggleDrawer(false)}></i>
    </div>
    <div className='flex flex-col justify-between h-[95%] '>
    <div className='space-y-12 mt-12'>
      <div className='h-12 flex border-b items-center '>
        <p className='text-xl font-bold text-lime-400'>Products</p>
      </div>
      <div className='h-12 flex border-b items-center '>
        <p className='text-xl font-bold text-lime-400'>About</p>
      </div>
      <div onClick={()=>{navigate('/contact')}} className='h-12 flex border-b items-center '>
        <p className='text-xl font-bold text-lime-400'>Contact</p>
      </div>
      <div className='h-12 flex border-b items-center '>
        <p className='text-xl font-bold text-lime-400'><i class="fa-solid fa-cart-shopping text-lime-400 text-xl"></i>Cart</p>
      </div>
    </div>
    <p onClick={handleLogout} className='text-red-600 text-xl font-bold cursor-pointer '><i class="fa-solid fa-right-from-bracket "></i> Logout</p>

    </div>
  </div>
);

  return (
    <>
    <div className='min-h-screen text-white  bg-gradient-to-r from-teal-900 to-teal-700 ... overflow-y-hidden'>
      {/* Header */}
    <div className='flex justify-between px-12 max-[720px]:px-3 h-14 items-center'>
     <h3 onClick={()=>navigate('/landing')} className='text-2xl font-semibold text-lime-400 cursor-pointer'>D'Watch</h3>
     {/* large screen */}
     <div className='flex justify-between space-x-16 max-[720px]:hidden'>
      <div>
      <p onClick={()=>{setIsPageClicked('products')}} className='text-lg cursor-pointer'>Products</p>
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
    <div className='grid grid-cols-3 max-lg:grid-cols-1 '>
      {/* Tagline and details */}
     <div className='h-full w-full flex justify-center items-center col-span-2 max-lg:col-span-1 mt-8 mb-5'>
      <div className='w-[700px] max-lg:w-full max-lg:px-3'>
      <h1 className='text-6xl font-bold max-[420px]:text-5xl'>This is the time to turn yourself into a real man</h1>
      <h3 className='text-2xl font-bold mt-6 max-[420px]:text-xl'>Handipicked collection of <span className='text-lime-400'>premium</span> time keepers for all purpose and ages.</h3>
      {/* Featured collectribles..Cards */}
      <CollectionSlider/>
      </div>
     </div>
     {/* Watch preview */}
     <div style={{}} className='flex justify-center mt-8 pe-5 max-lg:px-3 h-[600px]'>
     <LandingSlider/>
     </div>
    </div>
    </div>
    </>
  )
}

export default LandingPage