import React from 'react'
import {slids} from '../data/Data'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import Slider from "react-slick";

function HomeSlide() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="container-fluid py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-md-12 col-lg-7">
              <h4 className="mb-3 text-secondary">100% Organic Foods</h4>
              <h1 className="mb-5 display-3 text-primary">
                Organic Veggies & Fruits Foods
              </h1>
              <div className="position-relative mx-auto">
              <input
                className="form-control border-2 border-secondary w-75 py-3 px-4 rounded-pill"
                type="number"
                placeholder="Search"
              />
              <button
                type="submit"
                className="btn btn-primary border-2 border-secondary py-3 px-4 position-absolute rounded-pill text-white h-100"
                style={{ top: "0", right: "25%" }}
              >
                Submit Now
              </button>
            </div>
        
              </div>
              <div className='col-md-12 col-lg-5'>
              <div  id="carouselId" className='carousel slide position-relative '  data-bs-ride="carousel">  
              <div className='carrousel-inner' role='listbox'>
              <Slider {...settings}>
              {
                 slids.map((val,index)=>(
                  <div className='carrousel-item rounded' key={index}>
                  <img src={val.slide_img} alt={val.slide_img} className='img-fluid w-100 bg-secondary rounded'></img>
                  <Link
                  href="#"
                  className="btn px-4 py-2 text-white rounded"
                >
                  {val.category}
                </Link>
                  </div>
                  
                  ))
              }
              </Slider>
              </div>
              </div>
              </div>
    </div>
    </div>
    </div>
  )
}

export default HomeSlide