import React from 'react'
import watch5 from '../assets/Images/wacth5.png'
import wacth7 from '../assets/Images/wacth7.png'
import watch9 from '../assets/Images/watch9.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function LandingSlider() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2800,
    pauseOnHover: true,
    waitForAnimate: false,
    arrows: false,
  };
  return (
    
      <>
      <Slider className="custom-dots max-lg:h-[5]"  style={{height:'570px',width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}  {...settings}>
      <div className='space-y-10'>
      <div className='border border-teal-600 py-5 px-3 max-sm:py-2 max-sm:px-2 flex justify-between bg-teal-700 '>
       <div className='flex flex-col'>
        <h4 className='text-3xl max-sm:text-2xl font-bold'>SWISSTYLE Black</h4>
        <h5 className='text-xl text-gray-400'>$187</h5>
       </div>
      <div className='flex justify-center items-center'>
      <button  variant='contained' className='bg-lime-400 rounded-xl w-36 max-sm:w-28 h-10 text-black font-bold'>Buy Now</button>
      </div>
      </div>
        <div className=' justify-center flex'>
        <img  width={250} src={watch5} alt="" />
        </div>
      </div>
      <div className='space-y-10'>
      <div className='border border-teal-600 py-5 px-3 max-sm:py-2 max-sm:px-2 flex justify-between bg-teal-700 '>
       <div className='flex flex-col'>
        <h4 className='text-3xl max-sm:text-2xl font-bold'>Fire-Boltt Cobra</h4>
        <h5 className='text-xl text-gray-400'>$170</h5>
       </div>
      <div className='flex justify-center items-center'>
      <button  variant='contained' className='bg-lime-400 rounded-xl w-36 max-sm:w-28 h-10 text-black font-bold'>Buy Now</button>
      </div>
      </div>
        <div className=' justify-center flex'>
        <img  width={250} src={wacth7} alt="" />
        </div>
      </div>
      <div className='space-y-10'>
      <div className='border border-teal-600 py-5 px-3 max-sm:py-2 max-sm:px-2 flex justify-between bg-teal-700 '>
       <div className='flex flex-col'>
        <h4 className='text-3xl max-sm:text-2xl font-bold'>Fossil Flynn</h4>
        <h5 className='text-xl text-gray-400'>$190</h5>
       </div>
      <div className='flex justify-center items-center'>
      <button  variant='contained' className='bg-lime-400 rounded-xl w-36 max-sm:w-28 h-10 text-black font-bold'>Buy Now</button>
      </div>
      </div>
        <div className=' justify-center flex'>
        <img  width={250} src={watch9} alt="" />
        </div>
      </div>
    </Slider>
     </>
  )
}

export default LandingSlider