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
      <div className="grid grid-cols-3 mt-[200px]">
        <div className=" gap-3 border-r-2 border-r-[#706d68]">
          <div className="flex flex-col text-center">
            <span className="lg:text-5xl text-[#706d68] font-thin font-serif text-5xl  leading-none">
              25+ PhDs
            </span>
            <span className="leading-normal whitespace-break-spaces text-[#706d68] font-normal font-sans text-2xs tracking-normal">
              working across an in-house <br />
              interdisciplinary science team.
            </span>
          </div>
        </div>

        {/* seccond div */}
        <div className="border-r-2 border-r-[#706d68]">
          <div className="flex flex-col gap-2 text-center">
            <span className="lg:text-5xl text-[#706d68] font-extralight font-serif text-5xl mb-2 leading-none">
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
          <span className="lg:text-5xl text-[#706d68] font-thin font-serif text-5xl mb-2 leading-none">
            Millions of Oura <br />
            Members
          </span>
          <span className="leading-normal whitespace-break-spaces text-[#706d68] font-normal font-sans text-2xs tracking-normal">
            trust Oura to translate their body's <br />
            messages into valuable, actionable <br /> insights.
          </span>
        </div>
      </div>

      <hr className="text-black/5 font-bold mt-[50px]" />
    </div>
  );
};

export default Section4Componnent;
