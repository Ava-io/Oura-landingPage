import {
  FaCcApplePay,
  FaCcMastercard,
  FaCcPaypal,
  FaCcVisa,
  FaGooglePay,
} from "react-icons/fa";
import { LiaCcAmex } from "react-icons/lia";

const FooterComponents = () => {
  return (
    <div className="bg-[#232221] p-2 px-25 mt-12">
      <div className="justify-between flex items-center">
        <div>
          <span className="text-white text-4xl ">Oura</span>
        </div>
        <div className="flex gap-2">
          <span className="text-4xl text-white">
            <FaCcPaypal />
          </span>
          <span className="text-4xl text-white">
            <FaCcApplePay />
          </span>
          <span className="text-4xl text-white">
            <FaGooglePay />
          </span>
          <span className="text-4xl text-white">
            <FaCcVisa />
          </span>
          <span className="text-4xl text-white">
            <FaCcMastercard />
          </span>
          <span className="text-4xl text-white">
            <LiaCcAmex />
          </span>
        </div>
      </div>


      <div className="mt-10">
<footer>
    
</footer>
      </div>
    </div>
  );
};

export default FooterComponents;
