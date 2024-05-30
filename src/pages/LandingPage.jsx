
import React from 'react'
import LandingSlider from '../components/LandingSlider';
import CollectionSlider from '../components/CollectionSlider';
function LandingPage() {
  
  return (
    <>
    <div className='min-h-screen text-white  bg-gradient-to-r from-teal-900 to-teal-700 ... overflow-y-hidden'>
      
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