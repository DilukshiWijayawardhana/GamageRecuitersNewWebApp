import React from 'react'
import { Carousel } from "react-bootstrap";
import Handshake from "./../../assets/handshake.jpg";
import Networking from "./../../assets/networking.jpg";
import Growing from "./../../assets/Growing.jpg";
import Mind from "./../../assets/mind.jpg";
import Analysis from "./../../assets/analysis.jpg"

const CarouselSlide = () => {
  return (
    <div className='mt-40'>
    <Carousel>
    <Carousel.Item>
      <img style={{height:'60vh'}}
        className="d-block w-100"
        src={Handshake}
        alt="First slide"
      />
      <Carousel.Caption>
      <div className="elementor-slide-heading text-5xl text-left ">Experts with Insights in<br/> 
        <span className="second-heading-color elementor-slide-second-heading text-orange-600">Industry &amp; Roles</span><br/>
        <div className="elementor-slide-description text-base">More than 18 years in Executive Search</div>
        <button className="group relative bg-orange-600 text-white font-bold text-xl px-4 py-2 rounded-3xl border-4 w-auto transition-all hover:bg-transparent hover:border-orange-600">
            <a href="" className="elementor-button elementor-slide-button elementor-size-sm text-white group-hover:text-orange-600">
                Contact Us
            </a>
        </button>
      </div>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img style={{height:'60vh'}}
        className="d-block w-100"
        src={Networking}
        alt="Second slide"
        
      />

      <Carousel.Caption>
      <div className="elementor-slide-heading text-5xl text-left ">Networking<br/> 
        <span className="second-heading-color elementor-slide-second-heading text-amber-400">Above & Beyond</span><br/>
        <div className="elementor-slide-description text-base">Be assured, No stone remains unturned with us.</div>
        <button className="group relative bg-yellow-400 text-white font-bold text-xl px-4 py-2 rounded-3xl border-4 w-auto transition-all hover:bg-transparent hover:border-amber-400">
            <a href="" className="elementor-button elementor-slide-button elementor-size-sm text-white group-hover:text-amber-400">
                Contact Us
            </a>
        </button>
      </div>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img style={{height:'60vh'}}
        className="d-block w-100"
        src={Growing}
        alt="Third slide"
      />

<Carousel.Caption>
      <div className="elementor-slide-heading text-5xl text-left ">Transfominal<br/> 
        <span className="second-heading-color elementor-slide-second-heading text-amber-400">not Transactional</span><br/>
        <div className="elementor-slide-description text-base">Focused to continuous improvement</div>
        <button className="group relative bg-yellow-400 text-white font-bold text-xl px-4 py-2 rounded-3xl border-4 w-auto transition-all hover:bg-transparent hover:border-amber-400">
            <a href="" className="elementor-button elementor-slide-button elementor-size-sm text-white group-hover:text-amber-400">
                Contact Us
            </a>
        </button>
      </div>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img style={{height:'60vh'}}
        className="d-block w-100"
        src={Analysis}
        alt="Third slide"
      />

<Carousel.Caption>
      <div className="elementor-slide-heading text-5xl text-left ">Open minds,
        <span className="second-heading-color elementor-slide-second-heading text-amber-400">Open Doors</span><br/>
        <div className="elementor-slide-description text-base">Be assured, No stone remains unturned with us.</div>
        <button className="group relative bg-yellow-400 text-white font-bold text-xl px-4 py-2 rounded-3xl border-4 w-auto transition-all hover:bg-transparent hover:border-amber-400">
            <a href="" className="elementor-button elementor-slide-button elementor-size-sm text-white group-hover:text-amber-400">
                Join Us
            </a>
        </button>
      </div>
      </Carousel.Caption>
    </Carousel.Item>
    
    <Carousel.Item>
      <img style={{height:'60vh'}}
        className="d-block w-100"
        src={Mind}
        alt="Third slide"
      />

      <Carousel.Caption>
      <div className="elementor-slide-heading text-5xl text-left ">Partnering Your <br/> 
        <span className="second-heading-color elementor-slide-second-heading text-orange-600">Talent Growth &amp; Roles</span><br/>
        <div className="elementor-slide-description text-base">Unique in understanding your organization’s challenges</div>
        <button className="group relative bg-orange-600 text-white font-bold text-xl px-4 py-2 rounded-3xl border-4 w-auto transition-all hover:bg-transparent hover:border-orange-600">
            <a href="" className="elementor-button elementor-slide-button elementor-size-sm text-white group-hover:text-orange-600">
                Contact Us
            </a>
        </button>
      </div>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div>
  )
}

export default CarouselSlide