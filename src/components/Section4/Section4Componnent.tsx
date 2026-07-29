import { motion } from "framer-motion";

const Section4Componnent = () => {
  return (
    <div className="mt-24 sm:mt-32 lg:mt-[250px] px-4 sm:px-8 lg:px-[100px]">
      <div className="flex flex-col gap-5 items-center justify-center">
        <div className="items-center flex flex-wrap justify-center gap-2 sm:gap-4 text-center">
          <motion.em
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-[#706d68] font-serif font-extralight
               text-3xl sm:text-4xl md:text-6xl lg:text-8xl  "
          >
            12+ years
          </motion.em>
          <motion.span
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#706d68] font-extralight text-2xl sm:text-3xl md:text-5xl lg:text-7xl"
          >
            of experience
          </motion.span>
        </div>

        <div>
          <motion.span
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#706d68] font-extralight text-2xl sm:text-3xl md:text-5xl lg:text-7xl"
          >
            and research
          </motion.span>
        </div>
      </div>

      {/* seconnd div in section4 */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-4 mt-20 sm:mt-32 lg:mt-[200px]">
        <div className=" gap-3 sm:border-r-2 sm:border-r-[#706d68] pb-8 sm:pb-0">
          <div className="flex flex-col text-center">
            <span className="text-3xl sm:text-4xl lg:text-5xl text-[#706d68] font-thin font-serif leading-none">
              25+ PhDs
            </span>
            <span className="leading-normal whitespace-break-spaces text-[#706d68] font-normal font-sans text-2xs tracking-normal">
              working across an in-house <br />
              interdisciplinary science team.
            </span>
          </div>
        </div>

        {/* seccond div */}
        <div className="sm:border-r-2 sm:border-r-[#706d68] pb-8 sm:pb-0">
          <div className="flex flex-col gap-2 text-center">
            <span className="text-3xl sm:text-4xl lg:text-5xl text-[#706d68] font-thin font-serif leading-none">
              4 Generations
            </span>
            <span className="leading-normal whitespace-break-spaces text-[#706d68] font-normal font-sans text-2xs tracking-normal">
              with each one smarter, lighter,
              <br /> and more durable than the last.
            </span>
          </div>
        </div>

        {/* third div */}
        <div className="flex flex-col gap-2 text-center">
          <span className="text-3xl sm:text-4xl lg:text-5xl text-[#706d68] font-thin font-serif leading-none">
            Millions of Oura <br />
            Members
          </span>
          <span className="leading-normal whitespace-break-spaces text-[#706d68] font-normal font-sans text-2xs tracking-normal">
            trust Oura to translate their body's <br />
            messages into valuable, actionable <br /> insights.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Section4Componnent;
