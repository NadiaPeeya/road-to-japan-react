import React from 'react';
import logo1 from '../../images/japan3.png'
import logo from '../../images/japan.png'
import logo2 from '../../images/japan4.png'

const Carousel = () => {
    return (
<div className="container mx-auto carousel-style w-50 h-50 my-5">
<div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={logo1} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className="fw-bolder fs-3">Way To Japan</h5>
        <p className="fw-bolder fs-3">Choose The Place You Want To Travel!!</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={logo2} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      <h5 className="fw-bolder fs-3">Way To Japan</h5>
        <p className="fw-bolder fs-3">Choose The Place You Want To Travel!!</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={logo} className="d-block w-100 h-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      <h5 className="fw-bolder fs-3">Way To Japan</h5>
        <p className="fw-bolder fs-3">Choose The Place You Want To Travel!!</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
    );
};

export default Carousel;