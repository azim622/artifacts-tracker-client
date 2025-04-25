import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="bg-sky-100 dark:bg-gray-900 py-16 mb-10 rounded-xl px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10  items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://i.ibb.co.com/SxnpBVt/images-2.jpg"
            alt="Historical Artifacts"
            className="rounded-2xl shadow-lg"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
            Discover the Legacy of Human History
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            Our Historical Artifact Tracker is your digital gateway to exploring the rich stories behind ancient objects, cultural relics, and timeless pieces of history.
            Whether you're a student, researcher, or enthusiast — we make discovering history interactive and enjoyable.
          </p>
          <a
            href="/allArtifacts"
            className="inline-block px-5 py-2 rounded-md bg-white text-teal-600 font-medium hover:bg-teal-600 hover:text-white transition"
          >
            Explore Now
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
