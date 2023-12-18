import React from 'react';
import{ FaUserGraduate ,FaTimes} from "react-icons/fa";
import { FaUserCog } from "react-icons/fa";
import { FaSitemap } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaAward } from "react-icons/fa";
import img1 from '../../../../public/img/re1.jpg';
import img2 from '../../../../public/img/re2.jpg';
import img3 from '../../../../public/img/re3.jpg';



const Plan = () => {
  return (
    <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-1 gap-4'>

          <h3 className='font-bold text-center text-5l md:text-4l' >BE A PART OF SOMETHING EXCEPTIONAL</h3>

          <p className='text-center' >We know how important your career is to you. It’s important to us too! In our journey with you, we ensure we help you reach your fullest potential.
          We are looking for candidates who have an entrepreneurial spirit and collaborative nature.</p>

          <div className='items-center m-auto'>
                <button className='p-2 text-black rounded-lg ring animate-pulse '>Join us</button>
          </div>
      {/* 1 st element  */}
          <div className='max-w-[1400px] m-auto py-4 px-2 grid lg:grid-cols-2 gap-4'>
            {/* Left Side */}

                    <div className='grid grid-cols-1 grid-rows-1 h-[60vh]'>
                        
                      <img
                        className='object-cover row-span-2 p-2 transition shadow w-half h-half'
                        src={img1}
                        alt='/'
                      />
                    </div>
        {/* Right Side */}
                  <div className='flex flex-col justify-center h-full'>
                     <h3 className='font-bold text-center text-5l md:text-4l' > Learning & Development </h3>
              
                   <div
                       className="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                   <h5
                    className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    Card title
                  </h5>
                      <p className="mb-4 text-base text-neutral-600 dark:text-neutral-500">
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </p>
              </div>
              
            </div>
          </div>

      {/* 2 nd element  */}
          <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
            {/* Left Side */}

                <div className='grid grid-cols-1 grid-rows-1 h-[60vh]'>
                    
                  <img
                    className='object-cover row-span-2 p-2 transition shadow w-half h-half'
                    src={img2}
                    alt='/'
                  />
                </div>
                {/* Right Side */}
                <div className='flex flex-col justify-center h-full'>
                  <h3 className='font-bold text-center text-5l md:text-4l' > Rewards </h3>
                  
                  <div
                  className="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <h5
                    className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    Card title
                  </h5>
                  <p className="mb-4 text-base text-neutral-600 dark:text-neutral-500">
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </p>
                </div>
              
            </div>
          </div>
      {/* 3 rd element  */}
          <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
            {/* Left Side */}

                <div className='grid grid-cols-1 grid-rows-1 h-[60vh]'>
                    
                  <img
                    className='object-cover row-span-2 p-2 transition shadow w-half h-half'
                    src= {img3}
                    alt='/'
                  />
                </div>
                {/* Right Side */}
                <div className='flex flex-col justify-center h-full'>
                  <h3 className='font-bold text-center text-5l md:text-4l' > Diversity </h3>
                  
                  <div
                  className="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <h5
                    className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    Card title
                  </h5>
                  <p className="mb-4 text-base text-neutral-600 dark:text-neutral-500">
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </p>
                </div>
                  
                </div>
          </div>

      {/* icons  */}
              
          <div className='max-w-[1400px] m-auto py-16 px-20 grid lg:grid-cols-5 gap-20 bg-cyan-100 shadow transition rounded'>

                <div className='grid grid-cols-1 grid-rows-1 h-[20vh]'>
                      
                      <FaUserGraduate 
                        className='object-cover w-full h-full row-span-2 '
                        
                      />

                    <p className='p-1'>
                      Career Development
                    </p>
                      
                    </div>

      {/* icons  */}     
              <div className='grid grid-cols-1 grid-rows-1 h-[20vh]'>
                
                            <FaUserCog 
                              className='object-cover w-full h-full row-span-2 '
                              
                            />

                          <p className='p-1 text-center'>
                            Skills develop
                          </p>
                            
              </div>
              
      {/* icons  */}     
                <div className='grid grid-cols-1 grid-rows-1 h-[20vh]'>
                
                      <FaSitemap
                        className='object-cover w-full h-full row-span-2 '
                        
                      />

                    <p className='p-1 text-center'>
                      Build network
                    </p>
                      
              </div>

      {/* icons  */}     
                <div className='grid grid-cols-1 grid-rows-1 h-[20vh]'>
                
                    <FaMoneyBillWave 
                      className='object-cover w-full h-full row-span-2 '
                      
                    />

                  <p className='p-1 text-center'>
                    Earn
                  </p>
                
              </div>

      {/* icons  */}     
                <div className='grid grid-cols-1 grid-rows-1 h-[20vh]'>
                
                      <FaAward 
                        className='object-cover w-full h-full row-span-2 '
                        
                      />

                    <p className='p-1 text-center'>
                      Trust
                    </p>
                      
               </div>

            </div>

    
    </div>
  );
};

export default Plan;