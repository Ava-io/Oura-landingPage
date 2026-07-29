import { motion } from "framer-motion";
import s6i1 from "../../assets/or4-xray.jpg.avif";
import s6i2 from "../../assets/or4-dimple.jpg.avif";
import s6i3 from "../../assets/or4-materials.jpg.avif";
import s6i4 from "../../assets/stealth-finish.jpg.avif";

const Section6Component = () => {
  return (
    <div className="pt-[150px]">
      <div className="flex flex-col lg:flex-row justify-between px-4 sm:px-10 lg:px-[100px] gap-6 lg:gap-4">
        <div className="flex flex-col">
          <motion.span
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#706d68] text-3xl sm:text-4xl md:text-5xl lg:text-(length:--text-h2-base,5.25rem) font-sans leading-heading font-extralight lg:tracking-[-2px]"
          >
            Design is in
          </motion.span>
          <motion.em
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-[#706d68] font-serif font-extralight text-2xl sm:text-3xl md:text-4xl lg:text-(length:--text-h2-base,4.25rem) italic pl-0 sm:pl-16 lg:pl-28"
          >
            our DNA
          </motion.em>
        </div>

        <div className="max-w-full lg:max-w-md">
          <motion.p
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-[#706d68] text-sm sm:text-base leading-relaxed "
          >
            Oura is rooted in Finnish design philosophy — uniquely designed to
            pair with your mind and body. Each Oura Ring is made from
            aerospace-grade titanium, one of the strongest materials on earth.
            Years of testing guarantee they're comfortable for everyone, crafted
            to perfection, and long-lasting.
          </motion.p>
        </div>
      </div>

      {/* Image div */}
      <div className="pt-16 sm:pt-24 lg:pt-[150px] px-4 sm:px-8 lg:px-[100px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-end">
          {/* first image */}
          <div>
            <div className="flex flex-col gap-5">
              <div className="w-full  object-cover">
                <motion.img
                  src={s6i1}
                  alt=""
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="rounded-t-lg w-full h-auto"
                />
              </div>
              <div className="w-full h-[280px] sm:h-[350px] lg:h-[450px] ">
                <motion.img
                  src={s6i2}
                  alt=""
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Second image */}
          <div className="w-full h-[350px] sm:h-[450px] lg:h-[550px] ">
            <motion.img
              src={s6i3}
              alt=""
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="h-full w-full rounded-t-lg object-cover"
            />
          </div>

          {/* Third image */}
          <div className="w-full h-[320px] sm:h-[400px] lg:h-[500px] ">
            <motion.img
              src={s6i4}
              alt=""
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="h-full w-full rounded-t-lg object-cover"
            />
          </div>
        </div>
      </div>

      {/* Text after image div */}
      <div className="pt-12 sm:pt-20 lg:pt-37.5 px-4 sm:px-10 lg:px-25">
        <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-4 ">
          <div className="flex flex-col">
            <motion.span
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[#706d68] text-3xl sm:text-4xl md:text-5xl lg:text-(length:--text-h2-base,3.25rem) font-sans leading-normal font-extralight lg:tracking-[-2px]"
            >
              The more you wear it, the
              <br /> more personalized
            </motion.span>
            <motion.em
              initial={{ opacity: 0, x: 70 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-[#706d68] font-serif font-extralight text-2xl sm:text-3xl md:text-4xl lg:text-(length:--text-h2-base,3.25rem) italic pl-0 sm:pl-16 lg:pl-28"
            >
              your insights become
            </motion.em>
          </div>

          <div className="max-w-full lg:max-w-md">
            <motion.p
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-[#706d68] text-sm sm:text-base leading-relaxed "
            >
              No two days with Oura look the same. As you evolve, so does your
              membership — translating your data and lifestyle habits into
              deeply personal insights that power your lifelong health journey.
            </motion.p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Section6Component;
