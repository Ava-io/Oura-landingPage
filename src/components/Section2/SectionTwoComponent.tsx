import { motion } from "framer-motion";

const SectionTwoComponent = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-2 items-center pt-[200px] lg:pt-[150px] md:pt-[100px] sm:pt-[20px]"
      >
        <span
          className="text-[#5e5a54] font-extralight font-sans
               text-5xl sm:text-6xl md:text-7xl lg:text-8xl
               leading-none tracking-tight"
        >
          88% of Oura Members
        </span>

        <div className="flex flex-wrap items-baseline gap-2 md:gap-4">
          <span
            className="text-[#5e5a54] font-extralight font-sans
                 text-5xl sm:text-6xl md:text-7xl lg:text-8xl
                 leading-none tracking-tight"
          >
            see their
          </span>

          <motion.em
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-[#5e5a54] font-serif font-extralight
                 text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
          >
            health improve
          </motion.em>
        </div>
      </motion.div>
      {/* down */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex items-start mt-32 flex-col lg:flex-row justify-between gap-8  px-6 sm:px-12 md:px-20 lg:px-[100px]"
      >
        {/* left and right */}
        {/* left */}
        <div className="flex flex-col">
          <motion.span
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#706d68] font-extralight text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Rooted in wellness,
          </motion.span>

          <motion.em
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-[#706d68] font-serif font-extralight
                 text-5xl sm:text-5xl md:text-6xl lg:text-7xl pl-8 sm:pl-16 md:pl-32 lg:pl-[250px]"
          >
            not burnout.
          </motion.em>
        </div>

        {/* right */}
        <div>
          <motion.p
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="
                     max-w-2xl
                     text-[#706d68]
                     text-base sm:text-lg md:text-xl
                     lg:text-[15px] font-sans
                     leading-relaxed
                     text-left pl-0 sm:pl-8 md:pl-16 lg:pl-[100px]"
          >
            As Oura evolves, we remain rooted in Nordic wellness principles —
            that a healthy life is not one of extremes but one of balance. In a
            time of more stress and more hustle, Oura helps you tune in to what
            matters to create lifelong, sustainable wellbeing.
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionTwoComponent;
