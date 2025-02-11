import React from "react";

const Banner = () => {
  return (
    <div className="relative w-full">
      <div className="carousel w-full h-[550px]">
        {/* Slide 1 */}
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/Ws9Q5HT/IMG-5143.jpg"
            className="w-full h-[550px] object-cover"
            alt="Artifact 1"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-4">
            <h2 className="text-5xl md:text-6xl text-white font-bold mb-4 drop-shadow-lg">
              Explore the Wonders of History
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl">
              Discover ancient artifacts and learn about the rich heritage of civilizations past.
            </p>
            
          </div>
          <div className="absolute inset-x-5 top-1/2 flex -translate-y-1/2 justify-between">
            <a href="#slide4" className="btn btn-circle bg-white text-black shadow-lg">❮</a>
            <a href="#slide2" className="btn btn-circle bg-white text-black shadow-lg">❯</a>
          </div>
        </div>

        {/* Slide 2 */}
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/2tjZKJC/historical-artifact-display-stockcake.jpg"
            className="w-full h-[550px] object-cover"
            alt="Artifact 2"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-4">
            <h2 className="text-5xl md:text-6xl text-white font-bold mb-4 drop-shadow-lg">
              Preserving History
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl">
              Step into a world of discoveries and marvel at relics from the past.
            </p>
            
          </div>
          <div className="absolute inset-x-5 top-1/2 flex -translate-y-1/2 justify-between">
            <a href="#slide1" className="btn btn-circle bg-white text-black shadow-lg">❮</a>
            <a href="#slide3" className="btn btn-circle bg-white text-black shadow-lg">❯</a>
          </div>
        </div>

        {/* Slide 3 */}
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/jvZ4gXn/images.jpg"
            className="w-full h-[550px] object-cover"
            alt="Artifact 3"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-4">
            <h2 className="text-5xl md:text-6xl text-white font-bold mb-4 drop-shadow-lg">
              Unlock the Past
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl">
              Unearth the secrets of ancient civilizations and their timeless treasures.
            </p>
           
          </div>
          <div className="absolute inset-x-5 top-1/2 flex -translate-y-1/2 justify-between">
            <a href="#slide2" className="btn btn-circle bg-white text-black shadow-lg">❮</a>
            <a href="#slide4" className="btn btn-circle bg-white text-black shadow-lg">❯</a>
          </div>
        </div>

        {/* Slide 4 */}
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/55JJp1b/shutterstock-1065318299-1.jpg"
            className="w-full h-[550px] object-cover"
            alt="Artifact 4"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-4">
            <h2 className="text-5xl md:text-6xl text-white font-bold mb-4 drop-shadow-lg">
              Timeless Treasures
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl">
              Celebrate the beauty and ingenuity of our ancestors through their artifacts.
            </p>
            
          </div>
          <div className="absolute inset-x-5 top-1/2 flex -translate-y-1/2 justify-between">
            <a href="#slide3" className="btn btn-circle bg-white text-black shadow-lg">❮</a>
            <a href="#slide1" className="btn btn-circle bg-white text-black shadow-lg">❯</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
