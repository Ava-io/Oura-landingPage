import { motion } from "framer-motion";
import s3i1 from "../../assets/relaxed.jpeg.avif";
import s3i2 from "../../assets/restored.jpeg.avif";
import s3i3 from "../../assets/lifestyle-3.jpg.avif";

const Sectionn3Component = () => {
  return (
    <div className="lg:px-[100px] mt-[100px]">
      <div className="grid grid-cols-3 gap-4 relative">
        <div className="relative h-[1050px] group">
          {/* Image */}
          <div className="h-[800px] relative overflow-hidden rounded-lg">
            <img
              src={s3i1}
              alt=""
              className="absolute inset-0 h-full w-full object-cover rounded-lg transition-transform duration-700 ease-in-out group-hover:-translate-y-32"
            />

            <div className="absolute top-4 left-4 px-4 py-2 flex items-center bg-[#241e19]/50 rounded-full">
              <span className="text-white text-xs font-medium">Restored</span>
            </div>
          </div>

          {/* Content Card */}
          <div className="mt-4 rounded-2xl bg-[#241e19] p-8 opacity-0 -translate-y-8 transition-all duration-700 group-hover:opacity-100 group-hover:translate-y-0">
            <h2 className="text-white text-4xl font-semibold mb-4">Restored</h2>

            <p className="text-gray-300 mb-6">
              Your body is recovering effectively from your activity today.
              That's awesome. Keep it up!
            </p>

            <button className="rounded-full bg-white px-6 py-3 text-black">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sectionn3Component;
