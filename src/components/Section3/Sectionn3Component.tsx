import { motion } from "framer-motion";
import s3i1 from "../../assets/relaxed.jpeg.avif";
import s3i2 from "../../assets/restored.jpeg.avif";
import s3i3 from "../../assets/lifestyle-3.jpg.avif";

import relaxedImage from "../../assets/why_oura_relaxed_ui-en.png.avif";

const Sectionn3Component = () => {
  const imageVariants = {
    rest: { y: 0, transition: { duration: 0.7, ease: "easeInOut" } },
    hover: { y: "-50%", transition: { duration: 0.7, ease: "easeInOut" } },
  };

  const revealVariants = {
    rest: { y: "100%", transition: { duration: 0.7, ease: "easeInOut" } },
    hover: { y: "0%", transition: { duration: 0.7, ease: "easeInOut" } },
  };

  return (
    <div className="lg:px-[100px] lg:mt-[100px] px-4 sm:px-8 mt-16 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {/* Image card */}
        <motion.div
          initial="rest"
          whileHover="hover"
          className="h-[400px] sm:h-[500px] lg:h-[800px] relative overflow-hidden rounded-lg"
        >
          <motion.img
            variants={imageVariants}
            src={s3i1}
            alt=""
            className="absolute inset-0 h-full w-full object-cover rounded-lg"
          />

          <div className="absolute top-4 z-10 left-4 px-4 py-2 flex items-center bg-[#241e19]/50 rounded-full">
            <span className="text-white text-xs font-medium">Restored</span>
          </div>

          {/* Reveal card - slides up to fill the freed half */}
          <motion.div
            variants={revealVariants}
            className="absolute bottom-0 left-0 w-full h-[calc(50%-8px)] rounded-t-lg rounded-b-2xl overflow-hidden bg-[#f0ece4]"
          >
            <img
              src={relaxedImage}
              alt=""
              className="w-full h-full object-center rounded-lg"
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial="rest"
          whileHover="hover"
          className="h-[400px] sm:h-[500px] lg:h-[800px] relative overflow-hidden rounded-lg"
        >
          <motion.img
            variants={imageVariants}
            src={s3i2}
            alt=""
            className="absolute inset-0 h-full w-full object-cover rounded-lg"
          />

          <div className="absolute top-4 z-10 left-4 px-4 py-2 flex items-center bg-[#241e19]/50 rounded-full">
            <span className="text-white text-xs font-medium">Relaxed</span>
          </div>

          {/* Reveal card - slides up to fill the freed half */}
          <motion.div
            variants={revealVariants}
            className="absolute bottom-0 left-0 w-full h-[calc(50%-8px)] rounded-t-lg rounded-b-2xl overflow-hidden bg-[#f0ece4]"
          >
            <img
              src={relaxedImage}
              alt=""
              className="w-full h-full object-center rounded-lg"
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial="rest"
          whileHover="hover"
          className="h-[400px] sm:h-[500px] lg:h-[800px] relative overflow-hidden rounded-lg"
        >
          <motion.img
            variants={imageVariants}
            src={s3i3}
            alt=""
            className="absolute inset-0 h-full w-full object-cover rounded-lg"
          />

          <div className="absolute top-4 z-10 left-4 px-4 py-2 flex items-center bg-[#241e19]/50 rounded-full">
            <span className="text-white text-xs font-medium">Engaged</span>
          </div>

          {/* Reveal card - slides up to fill the freed half */}
          <motion.div
            variants={revealVariants}
            className="absolute bottom-0 left-0 w-full h-[calc(50%-8px)] rounded-t-lg rounded-b-2xl overflow-hidden bg-[#f0ece4]"
          >
            <img
              src={relaxedImage}
              alt=""
              className="w-full h-full object-center rounded-lg"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Sectionn3Component;
