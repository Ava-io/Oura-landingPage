import { motion } from "framer-motion";

const HeroComponent = () => {
  return (
    <div className="min-h-screen bg-cover bg-center flex items-center px-13">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto w-full px-6 py-16 md:py-24 lg:py-32"
      >
        {/* Heading */}
        <div className="space-y-2 md:space-y-4">
          <motion.span
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="block text-white font-semibold tracking-widest text-sm md:text-base"
          >
            WHY OURA
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-white font-light font-sans
                       text-5xl sm:text-6xl md:text-7xl lg:text-8xl
                       leading-none tracking-tight"
          >
            A first-of-its-kind
          </motion.h1>

          <motion.em
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="block text-white font-serif font-light
                       text-4xl sm:text-5xl md:text-6xl
                       ml-0 md:ml-24 lg:ml-40"
          >
            Smart ring
          </motion.em>
        </div>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-8 sm:mt-12 md:mt-16 lg:mt-20
           max-w-full sm:max-w-lg md:max-w-2xl
           text-white
           text-sm sm:text-base md:text-lg lg:text-xl
           leading-relaxed
           text-left"
        >
          Oura Ring is the first wearable designed to paint a truly holistic
          picture of your health. Born in Finland, our superior craftsmanship
          and human-centered philosophy give way to a wellness product loved by
          millions.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default HeroComponent;
