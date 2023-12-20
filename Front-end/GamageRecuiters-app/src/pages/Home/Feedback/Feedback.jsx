import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';

import Avator1 from "../../../assets/Avator/avator1.jpg";
import Avator2 from "../../../assets/Avator/avator2.jpg";
import Avator3 from "../../../assets/Avator/avator3.jpg";
import Avator4 from "../../../assets/Avator/avator4.jpg";
import Avator5 from "../../../assets/Avator/avator5.jpg";
import Avator6 from "../../../assets/Avator/avator6.jpg";
import Avator7 from "../../../assets/Avator/avator7.jpg";
import Avator8 from "../../../assets/Avator/avator8.jpg";
import Avator9 from "../../../assets/Avator/avator9.jpg";
import Avator10 from "../../../assets/Avator/avator10.jpg";
import Avator11 from "../../../assets/Avator/avator11.jpg";

import "./Feedback.css";

const Feedback = () => {
  const middleSlideIndex = 5;

  return (
    <div className=' bg-neutral-300'>
    <div className="testimonial--container-box ml-7">
        <div className="testimonial--container">
          <h2 className="industries--section--heading mt-10">Customer Feedback</h2>
        </div>
      </div>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 4,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper justify-start"
        initialSlide={middleSlideIndex}  
        style={{ width: '100vw' }} 
        loop={true} 
        autoplay={{ delay: 2000, disableOnInteraction: false }}    
      >
        <SwiperSlide>
          <img src={Avator1} className='rounded-t-lg'/>
          <div className="info bg-gray-500 text-zinc-50 rounded-b-lg">
            <p className=' text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique</p>
            <h5 className='text-center font-bold '>Kristin Watson</h5>
            <h6 className=' text-center font-semibold'>Louis Vuitton</h6>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img src={Avator2}className='rounded-t-lg'/>
          <div className="info bg-gray-500 text-zinc-50 rounded-b-lg">
            <p className=' text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique</p>
            <h5 className='text-center font-bold '>Kristin Watson</h5>
            <h6 className=' text-center font-semibold'>Louis Vuitton</h6>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img src={Avator3}className='rounded-t-lg'/>
          <div className="info bg-gray-500 text-zinc-50 rounded-b-lg">
            <p className=' text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique</p>
            <h5 className='text-center font-bold '>Kristin Watson</h5>
            <h6 className=' text-center font-semibold'>Louis Vuitton</h6>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img src={Avator4}className='rounded-t-lg'/>
          <div className="info bg-gray-500 text-zinc-50 rounded-b-lg">
            <p className=' text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique</p>
            <h5 className='text-center font-bold '>Kristin Watson</h5>
            <h6 className=' text-center font-semibold'>Louis Vuitton</h6>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img src={Avator5}className='rounded-t-lg'/>
          <div className="info bg-gray-500 text-zinc-50 rounded-b-lg">
            <p className=' text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique</p>
            <h5 className='text-center font-bold '>Kristin Watson</h5>
            <h6 className=' text-center font-semibold'>Louis Vuitton</h6>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <img src={Avator6}className='rounded-t-lg'/>
          <div className="info bg-gray-500 text-zinc-50 rounded-b-lg">
            <p className=' text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique</p>
            <h5 className='text-center font-bold '>Kristin Watson</h5>
            <h6 className=' text-center font-semibold'>Louis Vuitton</h6>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img src={Avator7}className='rounded-t-lg'/>
          <div className="info bg-gray-500 text-zinc-50 rounded-b-lg">
            <p className=' text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique</p>
            <h5 className='text-center font-bold '>Kristin Watson</h5>
            <h6 className=' text-center font-semibold'>Louis Vuitton</h6>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img src={Avator8}className='rounded-t-lg'/>
          <div className="info bg-gray-500 text-zinc-50 rounded-b-lg">
            <p className=' text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique</p>
            <h5 className='text-center font-bold '>Kristin Watson</h5>
            <h6 className=' text-center font-semibold'>Louis Vuitton</h6>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img src={Avator9}className='rounded-t-lg'/>
          <div className="info bg-gray-500 text-zinc-50 rounded-b-lg">
            <p className=' text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique</p>
            <h5 className='text-center font-bold '>Kristin Watson</h5>
            <h6 className=' text-center font-semibold'>Louis Vuitton</h6>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img src={Avator10}className='rounded-t-lg'/>
          <div className="info bg-gray-500 text-zinc-50 rounded-b-lg">
            <p className=' text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique</p>
            <h5 className='text-center font-bold '>Kristin Watson</h5>
            <h6 className=' text-center font-semibold'>Louis Vuitton</h6>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img src={Avator11}className='rounded-t-lg'/>
          <div className="info bg-gray-500 text-zinc-50 rounded-b-lg">
            <p className=' text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique</p>
            <h5 className='text-center font-bold '>Kristin Watson</h5>
            <h6 className=' text-center font-semibold'>Louis Vuitton</h6>
          </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
  )
}

export default Feedback