import React from "react";

const UnicSection = () => {
  return (
    <section className="container mx-auto p-6 md:p-10 mb-14 bg-gradient-to-r from-blue-600 to-teal-500 rounded-2xl shadow-lg">
      <h2 className="text-2xl md:text-3xl text-center text-white font-semibold mb-8">
        🌟 Artifact of the Week
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2">
          <div className="h-[280px] md:h-[300px] w-full overflow-hidden rounded-xl shadow-md">
            <img
              src="https://i.ibb.co/D9Qrw1P/Rosetta-Stone.jpg"
              alt="Rosetta Stone"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
            Rosetta Stone
          </h3>
          <p className="text-white mb-2">
            A historic key that unlocked the secrets of ancient Egyptian language.
          </p>
          <p className="text-sm text-blue-100 mb-4">
            The Rosetta Stone helped scholars decipher hieroglyphs, revealing the stories
            and culture of ancient Egypt like never before.
          </p>
          <a
            href="/allArtifacts"
            className="inline-block px-5 py-2 rounded-md bg-white text-teal-600 font-medium hover:bg-teal-600 hover:text-white transition"
          >
            Learn More →
          </a>
        </div>
      </div>
    </section>
  );
};

export default UnicSection;
