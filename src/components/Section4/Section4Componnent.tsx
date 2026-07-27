import { motion } from "framer-motion";

const Section4Componnent = () => {
  return (
    <div className="mt-[250px]">
      <div className="flex flex-col gap-5 items-center justify-center">
        <div className="items-center flex justify-center gap-4">
          <motion.em
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-[#706d68] font-serif font-extralight
                 text-5xl sm:text-5xl md:text-6xl lg:text-8xl  "
          >
            12+ years
          </motion.em>
          <motion.span
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#706d68] font-extralight text-5xl sm:text-5xl md:text-6xl lg:text-8xl"
          >
            of experience
          </motion.span>
        </div>

        <div>
          <motion.span
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#706d68] font-extralight text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
          >
            and research
          </motion.span>
        </div>
      </div>


      {/* seconnd div in section4 */}
      <div></div>
    </div>
  );
};

export default Section4Componnent;
