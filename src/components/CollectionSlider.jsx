import React, { useRef } from 'react'
import Slider from "react-slick";
import watch1 from '../assets/Images/watch1.png'
import watch2 from '../assets/Images/watch2.png'
import watch3 from '../assets/Images/watch3.png'
import watch4 from '../assets/Images/watch4.png'
import watch6 from '../assets/Images/watch6.png'
import watch10 from '../assets/Images/wacth10.png'
function CollectionSlider() {
    let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        initialSlide: 0,
        autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 710,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
      };
  return (
    <>
    <div className='flex justify-between mt-6 '>
    <h3 className='text-2xl font-bold max-[420px]:text-xl'>Featured Collectibles</h3>
    <div className='space-x-6 flex items-center'>
    <i onClick={previous} class="fa-solid fa-arrow-left-long text-xl cursor-pointer"></i>  
    <i onClick={next} class="fa-solid fa-arrow-right-long  text-xl cursor-pointer"></i>
    </div>
  </div>
        <div className="slider-container mt-5">
      <Slider ref={slider => {
          sliderRef = slider;
        }} {...settings}>
        <div>
        <div className='flex justify-center'>
       <div className='h-80 w-56 max-[480px]:w-60 bg-slate-200 rounded-lg pb-4 space-y-3 flex flex-col justify-end  items-center'>
        <img src={watch3} width={100}   alt="" />
        <h3 className='text-black text-xl font-bold'>Zoro Mindsweep G</h3>
        <h2 className='text-lg text-gray-600'>$169</h2>
        <button  variant='contained' className='bg-lime-400 rounded-xl w-36 h-10 text-black font-bold'>Buy Now</button>
       </div>
       </div>
        </div>
        <div>
        <div className='flex justify-center'>
       <div className='h-80 w-56 bg-slate-200 rounded-lg pb-4 space-y-3 flex flex-col justify-end  items-center'>
        <img src={watch2} width={100} alt="" />
        <h3 className='text-black text-xl font-bold'>Romeleu Authentic</h3>
        <h2 className='text-lg text-gray-600'>$167</h2>
        <button  variant='contained' className='bg-lime-400 rounded-xl w-36 h-10 text-black font-bold'>Buy Now</button>
       </div>
       </div> 
        </div>
        <div>
        <div className='flex justify-center'>
       <div className='h-80 w-56 bg-slate-200 rounded-lg pb-4 space-y-3 flex flex-col justify-end  items-center'>
        <img src={watch1} width={100} alt="" />
        <h3 className='text-black text-xl font-bold'>Sierra Large Dial</h3>
        <h2 className='text-lg text-gray-600'>$166</h2>
        <button  variant='contained' className='bg-lime-400 rounded-xl w-36 h-10 text-black font-bold'>Buy Now</button>
       </div>
       </div>
        </div>
        
        <div>
        <div className='flex justify-center'>
       <div className='h-80 w-56 bg-slate-200 rounded-lg pb-4 space-y-3 flex flex-col justify-end  items-center'>
        <img src={watch4} width={160} alt="" />
        <h3 className='text-black text-xl font-bold'>BENYAR Luxury</h3>
        <h2 className='text-lg text-gray-600'>$172</h2>
        <button  variant='contained' className='bg-lime-400 rounded-xl w-36 h-10 text-black font-bold'>Buy Now</button>
       </div>
        </div>
        </div>
        <div>
        <div className='flex justify-center'>
       <div className='h-80 w-56 bg-slate-200 rounded-lg pb-4 space-y-3 flex flex-col justify-end  items-center'>
        <img src={watch6} width={160} alt="" />
        <h3 className='text-black text-xl font-bold'>Fire-Boltt Solace</h3>
        <h2 className='text-lg text-gray-600'>$199</h2>
        <button  variant='contained' className='bg-lime-400 rounded-xl w-36 h-10 text-black font-bold'>Buy Now</button>
       </div>
        </div>
        </div>
        <div>
        <div className='flex justify-center'>
       <div className='h-80 w-56 bg-slate-200 rounded-lg pb-4 space-y-3 flex flex-col justify-end  items-center'>
        <img src={watch10} width={160} alt="" />
        <h3 className='text-black text-xl font-bold'>Casio Men Leather</h3>
        <h2 className='text-lg text-gray-600'>$152</h2>
        <button  variant='contained' className='bg-lime-400 rounded-xl w-36 h-10 text-black font-bold'>Buy Now</button>
       </div>
        </div>
        </div>
      </Slider>
    </div>
        
    </>
  )
}

export default CollectionSlider