import type { ReactElement } from "react";
import section5Image from "../../assets/data-so-accurate.jpg.avif";
import { motion } from "framer-motion";
import { FaBed, FaRegHeart, FaTemperatureHigh } from "react-icons/fa";
import { TbActivityHeartbeat } from "react-icons/tb";

interface Section5Array {
  value: string;
  title: string;
  description: string;
  icon: ReactElement;
}

const Section5Component = () => {
  const statsData: Section5Array[] = [
    {
      value: "99%",
      title: "Heart Rate Accuracy",
      description: "r² compared to ECG22",
      icon: <FaRegHeart />,
    },
    {
      value: "98%",
      title: "Heart Rate Variability Accuracy",
      description: "r² compared to ECG22",
      icon: <TbActivityHeartbeat />,
    },
    {
      value: "92%",
      title: "Body Temperature Accuracy",
      description: "r² compared to ECG22",
      icon: <FaTemperatureHigh />,
    },
    {
      value: "79%",
      title: "Sleep Tracking Accuracy",
      description: "r² compared to ECG22",
      icon: <FaBed />,
    },
  ];
  return (
    <div className="pt-8 sm:pt-12 lg:pt-[60px] relative">
      <div>
        <div className="w-full h-[300px] sm:h-[500px] lg:h-[850px] relative">
          <motion.img
            src={section5Image}
            alt=""
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="px-4 sm:px-6 lg:px-0 mt-0  lg:absolute lg:top-[50px] lg:left-[80px] flex flex-col items-start justify-center leading-tight">
          <motion.span
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#706d68] text-3xl lg:pt-12 sm:text-4xl md:text-5xl lg:text-(length:--text-h2-base,4.25rem) font-sans leading-heading font-extralight lg:tracking-[-2px]"
          >
            Data so accurate
          </motion.span>
          <motion.em
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-[#706d68] font-serif text-2xl sm:text-3xl md:text-4xl lg:text-(length:--text-h2-base,3.25rem) italic pl-0 sm:pl-16 lg:pl-40"
          >
            it's personal
          </motion.em>
        </div>
        <div className="px-4 sm:px-6 lg:px-0 mt-8 lg:mt-0 lg:absolute lg:bottom-[50px] lg:left-[80px]">
          <motion.p
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-[#706d68] text-sm sm:text-base leading-relaxed "
          >
            The finger provides the most accurate <br />
            reading of your heart rate, blood oxygen
            <br /> levels, temperature, and more.
          </motion.p>
        </div>

        <div className="px-4 sm:px-6 lg:px-0 mt-8 lg:mt-0 lg:absolute lg:right-[80px] lg:top-[110px] grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-col gap-4 lg:gap-7">
          {statsData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.15, duration: 0.5 }}
              className="flex flex-row gap-x-3  sm:gap-x-6 justify-between items-start p-4 sm:p-7 bg-[#1a1918]/50 rounded-lg"
            >
              <div className="flex flex-col gap-1">
                <span className="text-3xl sm:text-4xl lg:text-5xl text-[#F7F1E8] font-serif leading-tight font-extralight">
                  {item.value}
                </span>
                <span className="text-xs sm:text-sm text-[#F7F1E8] font-extralight leading-snug">
                  {item.title}
                </span>
                <span className="text-xs text-[#F7F1E8] font-extralight">
                  {item.description}
                </span>
              </div>
              <div className="pt-2 shrink-0">
                <span className="text-[#F7F1E8] text-xl sm:text-2xl leading-none">
                  {item.icon}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section5Component;
