import { useState, useRef } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ringImage1 from "../../assets/coop-ring-header.jpg";
import ringImage2 from "../../assets/or4-card.jpg";
import { GoArrowRight } from "react-icons/go";
import ouraRing from "../../assets/or4-ceramic-midnight-angle.png.avif";
import ouraCharger from "../../assets/or5-charger.png.avif";
import healthnavImage from "../../assets/why-oura-card.jpg.avif";
import { MdKeyboardArrowRight, MdOutlineScience } from "react-icons/md";
import { IoMoonOutline, IoPersonOutline } from "react-icons/io5";
import { RiFireLine, RiWomenFill } from "react-icons/ri";
import { FaHandHoldingHeart, FaTired } from "react-icons/fa";
import { BsHeartPulse } from "react-icons/bs";
import { BiBowlRice } from "react-icons/bi";
import experienceNavImage from "../../assets/pop-gen4-long-term-health-en-2.jpg.avif";
import { SiZenbrowser } from "react-icons/si";
import { GrIntegration } from "react-icons/gr";
import Button from "../../shared/Button";
import { HiMenu, HiX } from "react-icons/hi";

// Reusable animation variants
const dropdownVariants = {
  hidden: { opacity: 0, y: -8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, ease: "easeOut" },
  },
  exit: { opacity: 0, y: -8, transition: { duration: 0.18, ease: "easeIn" } },
};

const mobileMenuVariants = {
  hidden: { opacity: 0, y: -16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
  exit: { opacity: 0, y: -16, transition: { duration: 0.2, ease: "easeIn" } },
};

const accordionVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.2, ease: "easeInOut" },
  },
};

const NavComponent = () => {
  const [isOpen, setIsOpen] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const timeoutRef = useRef<number | null>(null);
  const [mobileSection, setMobileSection] = useState<string | null>(null);

  const toggleMobileSection = (section: string) => {
    setMobileSection((prev) => (prev === section ? null : section));
  };

  const openMenu = (menu: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(menu);
  };

  const closeMenu = () => {
    timeoutRef.current = window.setTimeout(() => {
      setIsOpen(null);
    }, 150);
  };

  return (
    <div>
      <header className="bg-[#F7F1E8] shadow-md font-sans relative">
        <nav className=" flex  items-center justify-between px-30  py-4 ">
          <div className="">
            <h1 className="text-4xl ">Oura</h1>
          </div>
          <div className="flex-1 flex justify-center">
            <ul className="hidden lg:flex items-center gap-12">
              <div
                onMouseEnter={() => openMenu("shop")}
                onMouseLeave={closeMenu}
              >
                <li>
                  <Link
                    to=""
                    className={`flex items-center border-b-2  transition-all duration-500 gap-2 ${isOpen === "shop" ? "border-black " : "border-transparent hover:underline"}`}
                  >
                    <span className="text-[#4e4a45]">Shop</span>
                    <motion.span
                      animate={{ rotate: isOpen === "shop" ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      {isOpen !== "shop" && <IoIosArrowDown />}
                    </motion.span>
                  </Link>
                </li>

                <AnimatePresence>
                  {isOpen === "shop" && (
                    <motion.div
                      // variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="absolute left-0 top-full w-full z-50 rounded-b-3xl bg-[#F7F1E8] p-8 shadow-xl "
                    >
                      <div className="flex gap-6 w-full justify-center">
                        <div className="relative overflow-hidden group rounded-3xl cursor-pointer w-[300px] h-[192px]">
                          <img
                            src={ringImage1}
                            alt=""
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 flex items-end p-6 justify-between">
                            <span className="text-[#4e4a45] text-2xl">
                              Oura Ring 5
                            </span>
                            <div className="bg-white p-3 rounded-full">
                              <GoArrowRight />
                            </div>
                          </div>
                        </div>

                        <div className="relative overflow-hidden group rounded-3xl cursor-pointer w-[300px] h-[192px]">
                          <img
                            src={ringImage2}
                            alt=""
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 flex items-end p-6 justify-between">
                            <span className="text-[#4e4a45] text-2xl">
                              Oura Ring 4
                            </span>
                            <div className="bg-white p-3 rounded-full">
                              <GoArrowRight />
                            </div>
                          </div>
                        </div>

                        <div className="w-[240px] flex flex-col justify-center gap-5 px-2">
                          <ul className="flex flex-col gap-4">
                            <li className="group flex gap-3 items-center cursor-pointer">
                              <img
                                src={ouraRing}
                                alt=""
                                className="size-8 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1"
                              />
                              <span className="whitespace-nowrap text-[#4e4a45] transition-colors duration-300 group-hover:text-[#99948d]">
                                Oura Ring 4 Ceramic
                              </span>
                            </li>
                            <li className="group flex gap-3 items-center cursor-pointer">
                              <img
                                src={ouraCharger}
                                alt=""
                                className="size-8 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1"
                              />
                              <span className="whitespace-nowrap text-[#4e4a45] transition-colors duration-300 group-hover:text-[#99948d]">
                                Oura Ring 5 Charger
                              </span>
                            </li>
                            <li className="group flex gap-3 items-center cursor-pointer">
                              <img
                                src={ouraCharger}
                                alt=""
                                className="size-8 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1"
                              />
                              <span className="whitespace-nowrap text-[#4e4a45] transition-colors duration-300 group-hover:text-[#99948d]">
                                Oura Ring 4 Charger
                              </span>
                            </li>
                            <li className="group flex gap-3 items-center cursor-pointer pt-2 border-t border-white/20">
                              <button className="rounded-full p-1 bg-white transition-transform duration-300 group-hover:scale-110">
                                <span>
                                  <GoArrowRight className="text-2xl text-[#4e4a45]" />
                                </span>
                              </button>
                              <span className="whitespace-nowrap text-[#4e4a45] transition-colors duration-300 group-hover:text-[#99948d]">
                                Shop all products
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* NavLink2- health-features */}
              <div
                onMouseEnter={() => openMenu("health-features")}
                onMouseLeave={closeMenu}
              >
                <li>
                  <Link
                    to=""
                    className={`flex items-center border-b-2 transition-all duration-500 gap-2 ${isOpen === "health-features" ? "border-black" : "border-transparent hover:underline"}`}
                  >
                    <span className="text-[#4e4a45]">Health Features</span>
                    <motion.span
                      animate={{
                        rotate: isOpen === "health-features" ? 180 : 0,
                      }}
                      transition={{ duration: 0.25 }}
                    >
                      {isOpen !== "health-features" && <IoIosArrowDown />}
                    </motion.span>
                  </Link>
                </li>

                <AnimatePresence>
                  {isOpen === "health-features" && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="absolute left-0 top-full w-full z-50 rounded-b-3xl bg-[#F7F1E8] p-8 shadow-xl "
                    >
                      <div className="flex gap-6 max-w-7xl mx-auto justify-center">
                        <div className="relative overflow-hidden group rounded-3xl cursor-pointer w-[300px] h-[192px]">
                          <img
                            src={healthnavImage}
                            alt=""
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 flex items-end p-6 justify-between">
                            <span className="text-[#4e4a45] text-2xl">
                              Why Oura
                            </span>
                            <div className="bg-white p-3 rounded-full">
                              <GoArrowRight />
                            </div>
                          </div>
                        </div>

                        <div className="w-[220px] flex flex-col justify-start gap-5 px-2">
                          <ul className="flex flex-col gap-4">
                            <Link to="">
                              <li className="group flex gap-3 items-center cursor-pointer">
                                <span className="text-2xl text-[#4e4a45] transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                                  <MdOutlineScience />
                                </span>
                                <span className="whitespace-nowrap text-[#4e4a45] transition-colors duration-300 group-hover:text-[#99948d]">
                                  Science and Research
                                </span>
                              </li>
                            </Link>

                            <Link to="">
                              <li className="group flex gap-3 items-center cursor-pointer">
                                <span className="text-2xl text-[#4e4a45] transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                                  <IoMoonOutline />
                                </span>
                                <span className="whitespace-nowrap text-[#4e4a45] transition-colors duration-300 group-hover:text-[#99948d]">
                                  Sleep and Rest
                                </span>
                              </li>
                            </Link>

                            <Link to="">
                              <li className="group flex gap-3 items-center cursor-pointer">
                                <span className="text-2xl text-[#4e4a45] transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                                  <RiWomenFill />
                                </span>
                                <span className="whitespace-nowrap text-[#4e4a45] transition-colors duration-300 group-hover:text-[#99948d]">
                                  Women's Health
                                </span>
                              </li>
                            </Link>
                            <Link to="">
                              <li className="group flex gap-3 items-center cursor-pointer">
                                <span className="text-2xl text-[#4e4a45] transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                                  <FaTired />
                                </span>

                                <span className="whitespace-nowrap text-[#4e4a45] transition-colors duration-300 group-hover:text-[#99948d]">
                                  Stress
                                </span>
                              </li>
                            </Link>
                          </ul>
                        </div>

                        <div className="w-[220px] flex flex-col justify-start gap-5 px-2">
                          <ul className="flex flex-col gap-4">
                            <Link to="">
                              <li className="group flex gap-3 items-center cursor-pointer ">
                                <span className="text-2xl text-[#4e4a45] transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                                  <BsHeartPulse />
                                </span>
                                <span className="whitespace-nowrap text-[#4e4a45] transition-colors duration-300 group-hover:text-[#99948d]">
                                  Heart Health
                                </span>
                              </li>
                            </Link>

                            <Link to="">
                              <li className="group flex gap-3 items-center cursor-pointer">
                                <span className="text-2xl text-[#4e4a45] transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                                  <RiFireLine />
                                </span>
                                <span className="whitespace-nowrap text-[#4e4a45] transition-colors duration-300 group-hover:text-[#99948d]">
                                  Activity and Movement
                                </span>
                              </li>
                            </Link>

                            <Link to="">
                              <li className="group flex gap-3 items-center cursor-pointer">
                                <span className="text-2xl text-[#4e4a45] transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                                  <BiBowlRice />
                                </span>

                                <span className="whitespace-nowrap text-[#4e4a45] transition-colors duration-300 group-hover:text-[#99948d]">
                                  Metabolic Health
                                </span>
                              </li>
                            </Link>
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* NavLink3-Experience */}
              <div
                onMouseEnter={() => openMenu("experience")}
                onMouseLeave={closeMenu}
              >
                <li>
                  <Link
                    to=""
                    className={`flex items-center border-b-2 transition-all duration-500 gap-2 ${isOpen === "experience" ? "border-black" : "border-transparent hover:underline "}`}
                  >
                    <span className="text-[#4e4a45]">Experience</span>
                    <motion.span
                      animate={{ rotate: isOpen === "experience" ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      {isOpen !== "experience" && (
                        <IoIosArrowDown className="text-[#4e4a45]" />
                      )}
                    </motion.span>
                  </Link>
                </li>

                <AnimatePresence>
                  {isOpen === "experience" && (
                    <motion.div
                      // variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="absolute left-0 top-full w-full z-50 rounded-b-3xl bg-[#F7F1E8] p-8 shadow-xl "
                    >
                      <div className="flex gap-6 w-full justify-center">
                        <div className="relative overflow-hidden group rounded-3xl cursor-pointer w-[300px] h-[192px]">
                          <img
                            src={experienceNavImage}
                            alt=""
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 flex items-end p-6 justify-between">
                            <span className="text-[#4e4a45] text-2xl">
                              Why Oura
                            </span>
                            <div className="bg-white p-3 rounded-full">
                              <GoArrowRight />
                            </div>
                          </div>
                        </div>

                        <div className="w-[240px] flex flex-col justify-center gap-5 px-2">
                          <ul className="flex flex-col gap-4">
                            <Link to="">
                              <li className="group flex gap-3 items-center cursor-pointer">
                                <span className="text-2xl text-[#4e4a45] transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                                  <IoPersonOutline />
                                </span>
                                <span className="whitespace-nowrap text-[#4e4a45] transition-colors duration-300 group-hover:text-[#99948d]">
                                  Oura Membership
                                </span>
                              </li>
                            </Link>

                            <Link to="">
                              <li className="group flex gap-3 items-center cursor-pointer">
                                <span className="text-2xl text-[#4e4a45] transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                                  <SiZenbrowser />
                                </span>
                                <span className="whitespace-nowrap text-[#4e4a45] transition-colors duration-300 group-hover:text-[#99948d]">
                                  Sizing Guide
                                </span>
                              </li>
                            </Link>

                            <Link to="">
                              <li className="group flex gap-3 items-center cursor-pointer">
                                <span className="text-2xl text-[#4e4a45] transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                                  <GrIntegration />
                                </span>
                                <span className="whitespace-nowrap text-[#4e4a45] transition-colors duration-300 group-hover:text-[#99948d]">
                                  Integrations
                                </span>
                              </li>
                            </Link>
                            <Link to="">
                              <li className="group flex gap-3 items-center cursor-pointer">
                                <span className="text-2xl text-[#4e4a45] transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                                  <FaHandHoldingHeart />
                                </span>

                                <span className="whitespace-nowrap text-[#4e4a45] transition-colors duration-300 group-hover:text-[#99948d]">
                                  Oura Member Care
                                </span>
                              </li>
                            </Link>
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <li>
                <Link to="" className="flex items-center gap-2">
                  <span className="text-[#4e4a45]">For Organizations</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center ">
              <button className="rounded-full flex border border-gray-300 p-2 hover:bg-[#99948d] hover:border-black">
                <AiOutlineShoppingCart className="text-2xl text-[#4e4a45]" />
              </button>
            </div>

            <div className="lg:hidden">
              <Button
                className="lg:hidden"
                onClick={() => setModalOpen(!modalOpen)}
                aria-label={modalOpen ? "Close Menu" : "Open Menu"}
                aria-expanded={modalOpen}
              >
                {modalOpen ? (
                  <HiX
                    size={28}
                    className="bg-[#9b968e] border rounded-md border-white/5 text-[#4e4a45]"
                  />
                ) : (
                  <HiMenu size={28} className="text-[#4e4a45]" />
                )}
              </Button>
            </div>
          </div>
          {/* Responsive Hamburger */}
          <AnimatePresence>
            {modalOpen && (
              <motion.div
                variants={mobileMenuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="lg:hidden absolute top-16 left-0 w-full bg-[#F7F1E8] flex flex-col items-center gap-6 py-6 z-50"
              >
                {/* Shop */}
                <div className="w-full flex flex-col items-center">
                  <button
                    onClick={() => toggleMobileSection("shop")}
                    className="flex gap-1 items-center group hover:text-[#99948d] duration-75 "
                  >
                    <span className="group-hover:text-[#99948d] duration-300 text-[#4e4a45]">
                      Shop
                    </span>
                    <motion.span
                      animate={{ rotate: mobileSection === "shop" ? 90 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="group-hover:text-[#99948d]"
                    >
                      <MdKeyboardArrowRight />
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {mobileSection === "shop" && (
                      <motion.ul
                        variants={accordionVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="flex flex-col items-center gap-4 mt-3 overflow-hidden"
                      >
                        <li className="group flex gap-2 items-center cursor-pointer">
                          <img
                            src={ouraRing}
                            alt=""
                            className="size-6 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1"
                          />
                          <span className="text-[#4e4a45] transition-colors duration-300 group-hover:text-[#99948d]">
                            Oura Ring 4 Ceramic
                          </span>
                        </li>
                        <li className="group flex gap-2 items-center cursor-pointer">
                          <img
                            src={ouraCharger}
                            alt=""
                            className="size-6 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1"
                          />
                          <span className="text-[#4e4a45] transition-colors duration-300 group-hover:text-[#99948d]">
                            Oura Ring 5 Charger
                          </span>
                        </li>
                        <li className="group flex gap-2 items-center cursor-pointer">
                          <img
                            src={ouraCharger}
                            alt=""
                            className="size-6 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1"
                          />
                          <span className="text-[#4e4a45] transition-colors duration-300 group-hover:text-[#99948d]">
                            Oura Ring 4 Charger
                          </span>
                        </li>
                        <li className="group flex gap-2 items-center cursor-pointer pt-2 border-t border-white/20">
                          <button className="rounded-full p-1 bg-white transition-transform duration-300 group-hover:scale-110">
                            <GoArrowRight className="text-lg text-[#4e4a45]" />
                          </button>
                          <span className="text-[#4e4a45] transition-colors duration-300 group-hover:text-[#99948d]">
                            Shop all products
                          </span>
                        </li>
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>

                {/* Health Features */}
                <div className="w-full flex flex-col items-center">
                  <button
                    onClick={() => toggleMobileSection("health-features")}
                    className="flex gap-1 items-center group hover:text-[#99948d] duration-75"
                  >
                    <span className="group-hover:text-[#99948d] duration-300 text-[#4e4a45]">
                      Health Features
                    </span>
                    <motion.span
                      animate={{
                        rotate: mobileSection === "health-features" ? 90 : 0,
                      }}
                      transition={{ duration: 0.25 }}
                      className="group-hover:text-[#99948d]"
                    >
                      <MdKeyboardArrowRight />
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {mobileSection === "health-features" && (
                      <motion.ul
                        // variants={accordionVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="flex flex-col items-center gap-4 mt-3 overflow-hidden"
                      >
                        <Link to="">
                          <li className="group flex gap-2 items-center cursor-pointer">
                            <span className="text-xl text-[#4e4a45] transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                              <MdOutlineScience />
                            </span>
                            <span className="text-[#4e4a45] transition-colors duration-300 group-hover:text-[#99948d]">
                              Science and Research
                            </span>
                          </li>
                        </Link>
                        <Link to="">
                          <li className="group flex gap-2 items-center cursor-pointer">
                            <span className="text-xl text-[#4e4a45] transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                              <IoMoonOutline />
                            </span>
                            <span className="text-[#4e4a45] transition-colors duration-300 group-hover:text-[#99948d]">
                              Sleep and Rest
                            </span>
                          </li>
                        </Link>
                        <Link to="">
                          <li className="group flex gap-2 items-center cursor-pointer">
                            <span className="text-xl text-[#4e4a45] transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                              <RiWomenFill />
                            </span>
                            <span className="text-[#4e4a45] transition-colors duration-300 group-hover:text-[#99948d]">
                              Women's Health
                            </span>
                          </li>
                        </Link>
                        <Link to="">
                          <li className="group flex gap-2 items-center cursor-pointer">
                            <span className="text-xl text-[#4e4a45] transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                              <FaTired />
                            </span>
                            <span className="text-[#4e4a45] transition-colors duration-300 group-hover:text-[#99948d]">
                              Stress
                            </span>
                          </li>
                        </Link>
                        <Link to="">
                          <li className="group flex gap-2 items-center cursor-pointer">
                            <span className="text-xl text-[#4e4a45] transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                              <BsHeartPulse />
                            </span>
                            <span className="text-[#4e4a45] transition-colors duration-300 group-hover:text-[#99948d]">
                              Heart Health
                            </span>
                          </li>
                        </Link>
                        <Link to="">
                          <li className="group flex gap-2 items-center cursor-pointer">
                            <span className="text-xl text-[#4e4a45] transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                              <RiFireLine />
                            </span>
                            <span className="text-[#4e4a45] transition-colors duration-300 group-hover:text-[#99948d]">
                              Activity and Movement
                            </span>
                          </li>
                        </Link>
                        <Link to="">
                          <li className="group flex gap-2 items-center cursor-pointer">
                            <span className="text-xl text-[#4e4a45] transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                              <BiBowlRice />
                            </span>
                            <span className="text-[#4e4a45] transition-colors duration-300 group-hover:text-[#99948d]">
                              Metabolic Health
                            </span>
                          </li>
                        </Link>
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>

                {/* Experience */}
                <div className="w-full flex flex-col items-center">
                  <button
                    onClick={() => toggleMobileSection("experience")}
                    className="flex gap-1 items-center group hover:text-[#99948d] duration-75"
                  >
                    <span className="group-hover:text-[#99948d] duration-300 text-[#4e4a45]">
                      Experience
                    </span>
                    <motion.span
                      animate={{
                        rotate: mobileSection === "experience" ? 90 : 0,
                      }}
                      transition={{ duration: 0.25 }}
                      className="group-hover:text-[#99948d]"
                    >
                      <MdKeyboardArrowRight />
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {mobileSection === "experience" && (
                      <motion.ul
                        // variants={accordionVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="flex flex-col items-center gap-4 mt-3 overflow-hidden"
                      >
                        <Link to="">
                          <li className="group flex gap-2 items-center cursor-pointer">
                            <span className="text-xl text-[#4e4a45] transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                              <IoPersonOutline />
                            </span>
                            <span className="text-[#4e4a45] transition-colors duration-300 group-hover:text-[#99948d]">
                              Oura Membership
                            </span>
                          </li>
                        </Link>
                        <Link to="">
                          <li className="group flex gap-2 items-center cursor-pointer">
                            <span className="text-xl text-[#4e4a45] transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                              <SiZenbrowser />
                            </span>
                            <span className="text-[#4e4a45] transition-colors duration-300 group-hover:text-[#99948d]">
                              Sizing Guide
                            </span>
                          </li>
                        </Link>
                        <Link to="">
                          <li className="group flex gap-2 items-center cursor-pointer">
                            <span className="text-xl text-[#4e4a45] transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                              <GrIntegration />
                            </span>
                            <span className="text-[#4e4a45] transition-colors duration-300 group-hover:text-[#99948d]">
                              Integrations
                            </span>
                          </li>
                        </Link>
                        <Link to="">
                          <li className="group flex gap-2 items-center cursor-pointer">
                            <span className="text-xl text-[#4e4a45] transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                              <FaHandHoldingHeart />
                            </span>
                            <span className="text-[#4e4a45] transition-colors duration-300 group-hover:text-[#99948d]">
                              Oura Member Care
                            </span>
                          </li>
                        </Link>
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>

                {/* For Organizations - plain link, no dropdown */}
                <div className="w-full flex flex-col items-center">
                  <Link
                    to=""
                    className="flex gap-1 items-center group hover:text-[#99948d] duration-75"
                  >
                    <span className="group-hover:text-[#99948d] duration-300 text-[#4e4a45]">
                      For Organizations
                    </span>
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>
    </div>
  );
};

export default NavComponent;
