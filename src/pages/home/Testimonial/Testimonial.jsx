import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Aarav Sinha",
    image: "https://i.ibb.co.com/BHhqQqcg/photo-2024-12-03-19-23-15.jpg",
    feedback: "This platform helped me explore rare artifacts for my research. It's beautifully designed and super easy to use.",
  },
  {
    name: "Emily Turner",
    image: "https://i.ibb.co.com/LX9DFh5w/cea4ca03-9953-4766-a94c-b34230bc4c53.webp",
    feedback: "I love the interactive experience! Tracking history has never felt this engaging before.",
  },
  {
    name: "Mohammed Rahman",
    image: "https://i.ibb.co.com/MkWNmwbR/470203565-2390972847913826-3804411578746235717-n.jpg",
    feedback: "As a history teacher, I use this site regularly. It’s perfect for discovering artifacts with my students.",
  },
];

const Testimonial = () => {
  return (
    <section className="bg-white dark:bg-gray-800 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-12">
          What Our Users Say
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="w-full md:w-[30%] bg-sky-200 dark:bg-gray-700 rounded-2xl p-8 shadow-lg text-left"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full border-2 border-blue-500"
                />
                <h4 className="font-semibold text-lg text-gray-800 dark:text-white">
                  {testimonial.name}
                </h4>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                "{testimonial.feedback}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
