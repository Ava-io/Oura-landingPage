import { motion } from "framer-motion";
import s7I1 from "../../assets/july.jpg.avif";
import s7i1 from "../../assets/july_app_ui-en.png.avif";
import s7I2 from "../../assets/august.jpg.avif";
import s7i2 from "../../assets/aug_app_ui-en.png.avif";

const Section7Component = () => {
  return (
    <div className="pt-[100px] relative">
      <div className="w-full h-[300px] sm:h-[500px] lg:h-[850px] relative">
        <motion.img
          src={s7I1}
          alt=""
          initial={{ opacity: 1, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="lg:absolute inset-0 flex items-center justify-center">
        <motion.img
          src={s7i1}
          alt=""
          initial={{ opacity: 1, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-[200px] h-[300px] sm:w-[280px] sm:h-[420px] lg:w-[400px] lg:h-[600px] object-cover"
        />
      </div>
    </div>
  );
};

export default Section7Component;
