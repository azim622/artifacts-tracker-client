import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full h-1/4">
        <div id="slide1" className="carousel-item relative w-full h-1/4">
          <img
            src="https://i.ibb.co.com/Ws9Q5HT/IMG-5143.jpg"
            className="w-full "
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full h-1/4">
          <img
            src="https://i.ibb.co.com/2tjZKJC/historical-artifact-display-stockcake.jpg"
            className="w-full "
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full h-1/4">
          <img
            src="https://i.ibb.co.com/jvZ4gXn/images.jpg"
            className="w-full  "
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full h-1/4">
          <img
            src="https://i.ibb.co.com/55JJp1b/shutterstock-1065318299-1.jpg"
            className="w-full  "
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle ">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
