import React from "react";

const Banner = () => {
  return (
    <div className="relative w-full">
      <div className="carousel w-full h-[500px]">
        {/* Slide 1 */}
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/Ws9Q5HT/IMG-5143.jpg"
            className="w-full h-[500px] object-cover"
            alt="Artifact 1"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center">
            <h2 className="text-4xl md:text-6xl text-white font-bold mb-4 drop-shadow-lg">
              Explore the Wonders of History
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl text-center mb-6">
              Discover ancient artifacts and learn about the rich heritage of civilizations past.
            </p>
            <a
              href="#explore"
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-lg hover:bg-blue-700 transition"
            >
              Explore Now
            </a>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle bg-white text-black shadow-md">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle bg-white text-black shadow-md">
              ❯
            </a>
          </div>
        </div>

        {/* Slide 2 */}
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/2tjZKJC/historical-artifact-display-stockcake.jpg"
            className="w-full h-[500px] object-cover"
            alt="Artifact 2"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center">
            <h2 className="text-4xl md:text-6xl text-white font-bold mb-4 drop-shadow-lg">
              Preserving History
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl text-center mb-6">
              Step into a world of discoveries and marvel at relics from the past.
            </p>
            <a
              href="#learn-more"
              className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-md shadow-lg hover:bg-yellow-600 transition"
            >
              Learn More
            </a>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle bg-white text-black shadow-md">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle bg-white text-black shadow-md">
              ❯
            </a>
          </div>
        </div>

        {/* Slide 3 */}
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/jvZ4gXn/images.jpg"
            className="w-full h-[500px] object-cover"
            alt="Artifact 3"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center">
            <h2 className="text-4xl md:text-6xl text-white font-bold mb-4 drop-shadow-lg">
              Unlock the Past
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl text-center mb-6">
              Unearth the secrets of ancient civilizations and their timeless treasures.
            </p>
            <a
              href="#discover"
              className="px-6 py-3 bg-green-600 text-white font-semibold rounded-md shadow-lg hover:bg-green-700 transition"
            >
              Discover More
            </a>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle bg-white text-black shadow-md">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle bg-white text-black shadow-md">
              ❯
            </a>
          </div>
        </div>

        {/* Slide 4 */}
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/55JJp1b/shutterstock-1065318299-1.jpg"
            className="w-full h-[500px] object-cover"
            alt="Artifact 4"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center">
            <h2 className="text-4xl md:text-6xl text-white font-bold mb-4 drop-shadow-lg">
              Timeless Treasures
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl text-center mb-6">
              Celebrate the beauty and ingenuity of our ancestors through their artifacts.
            </p>
            <a
              href="#join-us"
              className="px-6 py-3 bg-red-600 text-white font-semibold rounded-md shadow-lg hover:bg-red-700 transition"
            >
              Join Us
            </a>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle bg-white text-black shadow-md">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle bg-white text-black shadow-md">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
