import React from "react";

const UnicSection = () => {
  return (
    <div>
      <section class="container mx-auto p-6 my-10 bg-gradient-to-r from-blue-500 to-teal-400 rounded-lg shadow-lg">
        <h2 class="text-3xl text-center text-white font-semibold mb-6">
          Artifact of the Week
        </h2>

        <div class="flex flex-col items-center sm:flex-row justify-between">
          {/* <!-- Artifact Image --> */}
          <div class="w-full sm:w-1/2 mb-6 sm:mb-0">
            <img
              src="https://i.ibb.co.com/D9Qrw1P/Rosetta-Stone.jpg"
              alt="Rosetta Stone"
              class="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* <!-- Artifact Details --> */}
          <div class="w-full sm:w-1/2 sm:pl-6">
            <h3 class="text-2xl text-white font-bold mb-4">Rosetta Stone</h3>
            <p class="text-lg text-white mb-4">
              An ancient Egyptian stele that helped decipher hieroglyphs.
            </p>
            <p class="text-md text-white mb-6">
              The Rosetta Stone provided the key to understanding ancient
              Egyptian hieroglyphs, unlocking the secrets of ancient Egypt.
            </p>

            {/* <!-- Learn More Button --> */}
            <a
              href="/login"
              class="px-6 py-2 bg-white text-teal-600 rounded-lg hover:bg-teal-600 hover:text-white transition duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UnicSection;
