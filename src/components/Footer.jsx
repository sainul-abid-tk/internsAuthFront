import React from 'react'
import { useNavigate } from 'react-router-dom'

function Footer() {
    const navigate=useNavigate()
  return (
    <div className='p-2 grid grid-cols-5 max-lg:grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 mt-10' >
        <div className='col-span-2 max-lg:col-span-1 space-y-4 mb-3'>
        <h3 className='text-2xl font-semibold text-lime-400'>D'Watch</h3>
        <div className='flex space-x-5'>
        <i class="fa-brands fa-facebook text-blue-800 text-2xl cursor-pointer"></i>
        <i class="fa-brands fa-linkedin text-blue-800 text-2xl"></i>
        <i class="fa-brands fa-youtube text-red-600 text-2xl"></i>
        <i class="fa-brands fa-instagram text-pink-400 text-2xl"></i>
        </div>
        </div>
        <div className='space-y-3 mb-3'>
            <h4 className='text-lg font-bold'>Pages</h4>
            <h5 onClick={()=>navigate('/landing')} className='cursor-pointer'>Products</h5>
            <h5 onClick={()=>navigate('/contact')} className='cursor-pointer'>Contact</h5>
            <h5 onClick={()=>navigate('/landing')} className='cursor-pointer'>Cart</h5>
            <h5 onClick={()=>navigate('/landing')} className='cursor-pointer'>About</h5>
        </div>
        <div className='space-y-3 mb-3'>
            <h4 className='text-lg font-bold '>Pages</h4>
            <h5 onClick={()=>navigate('/landing')} className='cursor-pointer'>Products</h5>
            <h5 onClick={()=>navigate('/contact')} className='cursor-pointer'>Contact</h5>
            <h5 onClick={()=>navigate('/landing')} className='cursor-pointer'>Cart</h5>
            <h5 onClick={()=>navigate('/landing')} className='cursor-pointer'>About</h5>
        </div>
        <div className='space-y-3 mb-3'>
            <h4 className='text-lg font-bold '>Pages</h4>
            <h5 onClick={()=>navigate('/landing')} className='cursor-pointer'>Products</h5>
            <h5 onClick={()=>navigate('/contact')} className='cursor-pointer'>Contact</h5>
            <h5 onClick={()=>navigate('/landing')} className='cursor-pointer'>Cart</h5>
            <h5 onClick={()=>navigate('/landing')} className='cursor-pointer'>About</h5>
        </div>
    </div>
  )
}

export default Footer