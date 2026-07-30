import { useState, useEffect, type ReactElement } from "react";
import slide1 from "../../assets/slide-1-sleep.jpg.avif";
import slide2 from "../../assets/slide-2-heart.jpg.avif";
import slide3 from "../../assets/slide-3-activity.jpg.avif";
import slide4 from "../../assets/slide-4-wellness.jpg.avif";
import slide5 from "../../assets/slide-5-womens.jpg.avif";
import slide6 from "../../assets/slide-6-stress.jpg.avif";
import { motion } from "framer-motion";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoMoonOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineFire } from "react-icons/hi";
import { RiFlowerLine, RiWomenLine } from "react-icons/ri";
import { GiMeditation } from "react-icons/gi";

interface Slide {
  image: string;
  icon: ReactElement;
  title: string;
  headingPlain: string;
  headingItalic: string;
}

const Section8Component = () => {
  const slides: Slide[] = [
    {
      image: slide1,
      icon: <IoMoonOutline />,
      title: "Sleep and Rest",
      headingPlain: "Wake up feeling",
      headingItalic: "truly rested",
    },
    {
      image: slide2,
      icon: <FaRegHeart />,
      title: "Heart Health",
      headingPlain: "Know your heart,",
      headingItalic: "inside and out",
    },
    {
      image: slide3,
      icon: <HiOutlineFire />,
      title: "Activity and Fitness",
      headingPlain: "Move more,",
      headingItalic: "recover smarter",
    },
    {
      image: slide4,
      icon: <RiFlowerLine />,
      title: "Wellness and Longevity",
      headingPlain: "Don't just live longer,",
      headingItalic: "live healthier",
    },
    {
      image: slide5,
      icon: <RiWomenLine />,
      title: "Women's Health",
      headingPlain: "Understand the ins & outs of",
      headingItalic: "women's health",
    },
    {
      image: slide6,
      icon: <GiMeditation />,
      title: "Stress",
      headingPlain: "Put your stress to",
      headingItalic: "the test",
    },
  ];

  const [visibleCount, setVisibleCount] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const maxIndex = Math.max(slides.length - visibleCount, 0);

  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  const goNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const goPrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="mt-8 sm:mt-12 px-4 sm:px-10 lg:px-25 bg-[#4b4741] rounded-b-[25px]">
      <div className="py-8 sm:py-12">
        <span className="text-white text-sm sm:text-base">
          EXPLORE WHAT IS POSSIBLE
        </span>
      </div>

      <div className="relative">
        {/* Viewport - clips everything outside the visible-image window */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-3 sm:gap-4"
            animate={{ x: `-${currentIndex * (100 / visibleCount)}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="shrink-0 h-70 sm:h-85 lg:h-100 relative"
                style={{ flexBasis: `${100 / visibleCount}%` }}
              >
                <img
                  src={slide.image}
                  alt=""
                  className="w-full h-full object-cover rounded-lg"
                />

                {/* Top pill badge */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex items-center gap-2 bg-[#1a1918]/50 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-full">
                  <span className="text-white text-sm sm:text-lg">
                    {slide.icon}
                  </span>
                  <span className="text-white text-xs sm:text-sm font-medium">
                    {slide.title}
                  </span>
                </div>

                {/* Bottom heading + arrow */}
                <div className="absolute bottom-0 left-0 w-full flex items-end justify-between p-4 sm:p-6 rounded-lg bg-linear-to-t from-black/60 via-black/10 to-transparent">
                  <p className="text-white text-base sm:text-xl lg:text-2xl leading-snug max-w-[70%] sm:max-w-[75%]">
                    {slide.headingPlain}{" "}
                    <em className="font-serif italic">{slide.headingItalic}</em>
                  </p>

                  <button className="shrink-0 bg-white rounded-full p-2 sm:p-3 hover:bg-gray-100 transition">
                    <IoIosArrowForward className="text-sm sm:text-lg -rotate-45" />
                  </button>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
        <hr className="text-white mt-8" />
        <div className="flex justify-end gap-3 mt-4 sm:mt-6 pb-6 sm:pb-8">
          {/* Left arrow */}
          <button
            onClick={goPrev}
            disabled={currentIndex === 0}
            className="bg-white rounded-full p-2.5 sm:p-3 shadow disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-100 transition"
          >
            <IoIosArrowBack className="text-lg sm:text-xl" />
          </button>

          {/* Right arrow */}
          <button
            onClick={goNext}
            disabled={currentIndex === maxIndex}
            className="bg-white/80 rounded-full p-2.5 sm:p-3 shadow disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white transition"
          >
            <IoIosArrowForward className="text-lg sm:text-xl" />
          </button>
        </div>
      </div>
      <hr className="text-white text-2xl" />
    </div>
  );
};

export default Section8Component;
