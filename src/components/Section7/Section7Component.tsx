import { motion, AnimatePresence } from "framer-motion";
import s7I1 from "../../assets/july.jpg.avif";
import s7i1 from "../../assets/july_app_ui-en.png.avif";
import s7I2 from "../../assets/august.jpg.avif";
import s7i2 from "../../assets/aug_app_ui-en.png.avif";
import Button from "../../shared/Button";
import { useState } from "react";
import firstLogo from "../../assets/womens-health-logo.png.avif";
import secondLogo from "../../assets/cnbc-disruptor-logo.png.avif";
import thirdLogo from "../../assets/webby-awards2-logo.png.avif";

interface Section7 {
  title: string;
  description: string;
  image: string;
}

const Section7Component = () => {
  const [backgroundImage, setBackgroundImage] = useState(s7I1);
  const [phoneImage, setPhoneImage] = useState(s7i1);
  const [activeMonth, setActiveMonth] = useState("July");

  const stats: Section7[] = [
    {
      title: "2024",
      description: "Best Sleep Tracker",
      image: firstLogo,
    },
    {
      title: "2024",
      description: "CNBC Disruptor 50 List",
      image: secondLogo,
    },
    {
      title: "2023",
      description: "Best App, Health and Wellness",
      image: thirdLogo,
    },
  ];
  return (
    <div className="relative pt-12 sm:pt-20 lg:pt-25">
      <div className="w-full h-75 sm:h-125 lg:h-212.5 relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={backgroundImage}
            src={backgroundImage}
            alt=""
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* phone image */}
        <div className="absolute inset-0 z-10 flex items-center justify-center -translate-y-8 sm:-translate-y-12 lg:-translate-y-16">
          <AnimatePresence mode="wait">
            <motion.img
              key={phoneImage}
              src={phoneImage}
              alt=""
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="w-35 sm:w-55 md:w-70 lg:w-87.5 h-auto object-contain"
            />
          </AnimatePresence>
        </div>

        {/* Buttons */}
        <div className="absolute bottom-6 sm:bottom-8 lg:bottom-10 left-1/2 -translate-x-1/2 z-20">
          <div className="w-55 sm:w-70 lg:w-[320px] rounded-full bg-[#1a1918]/20 p-2 sm:p-3 flex justify-between items-center">
            <Button
              className={`rounded-full px-3 py-2 sm:px-4 text-xs sm:text-sm lg:text-base transition-all duration-300 ${
                activeMonth === "July"
                  ? "bg-[#F7F1E8] text-black"
                  : "text-white hover:bg-[#F7F1E8] hover:text-black"
              }`}
              onClick={() => {
                setBackgroundImage(s7I1);
                setPhoneImage(s7i1);
                setActiveMonth("July");
              }}
            >
              July
            </Button>

            <Button
              className={`rounded-full px-3 py-2 sm:px-4 text-xs sm:text-sm lg:text-base transition-all duration-300 ${
                activeMonth === "August"
                  ? "bg-[#F7F1E8] text-black"
                  : "text-white hover:bg-[#F7F1E8] hover:text-black"
              }`}
              onClick={() => {
                setBackgroundImage(s7I2);
                setPhoneImage(s7i2);
                setActiveMonth("August");
              }}
            >
              August
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-12 px-25 flex flex-wrap justify-between gap-6 lg:gap-8">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.15, duration: 0.5 }}
            className="flex-1 min-w-70"
          >
            <div className="w-full bg-[#efeae2] px-6 py-6 rounded-xl">
              <div className="flex flex-col gap-1">
                <span className="text-2xs font-sans text-[#4e4a45]">
                  {item.title}
                </span>
                <span className="font-sans text-[#4e4a45] whitespace-nowrap">
                  {item.description}
                </span>
              </div>
              <hr className="mt-6 border-t border-[#4e4a45]/50" />
              <div className="mt-6 w-full h-12 flex items-center">
                <img
                  src={item.image}
                  alt=""
                  className="h-full w-auto object-contain"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Section7Component;
