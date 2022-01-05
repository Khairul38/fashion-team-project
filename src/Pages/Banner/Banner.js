import React from 'react';
import banner1 from '../../Images/banner-slider.jpg'
import banner2 from '../../Images/banner-slider-2.jpg'
import banner3 from '../../Images/banner-slider-3.jpg'
import sliderText from '../../Images/slider-text-2.png'
import sliderText3 from '../../Images/slider-text.png'
import sliderText2 from '../../Images/slider-text-3.png'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="slider-1 carousel-item active">
                    <img height="450px" className="d-block w-100" src={banner3} alt="third slide"/>
                <div className="carousel-caption text-center text-black d-block ">
                <img className="w-50" src={sliderText3} alt="" />
                    <p className="text-white fw-bold mb-2"><i>the wooboom clothing summer collection is back at half price</i></p>
                    <Link to="/explore">
                         <button className="btn btn-outline-light my-3 mb-5">Discover Now</button>
                    </Link>
                </div>
              
                </div>
                <div className="slider-2 carousel-item">
                <img height="450px" className="d-block w-100" src={banner2} alt="Second slide"/>
                <div className="carousel-caption  text-center text-black d-block col-md-4 col-6">
                <img className="w-100" src={sliderText2} alt="" />
            
                    <p className="text-muted fw-bold mb-2">the wooboom spring collection is back at half price. </p>
                    <Link to="/explore">
                         <button className="btn btn-outline-light my-3 mb-5">Discover Now</button>
                    </Link>
                </div>
                </div>
                <div className="slider-3 carousel-item">
                <img height="450px" className="d-block w-100" src={banner1} alt="First slide"/>
                <div className="carousel-caption  text-center text-black d-block col-md-4 col-6">
                <img className="w-100" src={sliderText} alt="" />
                    <p className="text-white fw-bold mb-2">the wooboom jacket collection is back at half price. </p>
                    <Link to="/explore">
                         <button className="btn btn-outline-light my-3 mb-5">Discover Now</button>
                    </Link>

                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
        </div>
        </div>
    );
};

export default Banner;

