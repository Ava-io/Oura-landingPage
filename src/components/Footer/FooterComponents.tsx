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
          <footer className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {/* Our Company */}
              <div>
                <h3 className="text-white font-semibold mb-6">Our Company</h3>

                <ul className="space-y-4 text-[#c5c0ba]">
                  <li className="hover:text-white cursor-pointer">About Us</li>
                  <li className="hover:text-white cursor-pointer">
                    Leadership
                  </li>
                  <li className="hover:text-white cursor-pointer">
                    Clinical and Science Experts
                  </li>
                  <li className="hover:text-white cursor-pointer">Careers</li>
                  <li className="hover:text-white cursor-pointer">Newsroom</li>
                </ul>
              </div>

              {/* Support */}
              <div>
                <h3 className="text-white font-semibold mb-6">Support</h3>

                <ul className="space-y-4 text-[#c5c0ba]">
                  <li className="hover:text-white cursor-pointer">
                    Oura Member Care ↗
                  </li>
                  <li className="hover:text-white cursor-pointer">Sizing</li>
                  <li className="hover:text-white cursor-pointer">
                    Recycling Program ↗
                  </li>
                  <li className="hover:text-white cursor-pointer">
                    Flexible Spending
                  </li>
                  <li className="hover:text-white cursor-pointer">
                    Heart Rate Monitoring
                  </li>
                  <li className="hover:text-white cursor-pointer">My Orders</li>
                  <li className="hover:text-white cursor-pointer">
                    Oura on the Web ↗
                  </li>
                  <li className="hover:text-white cursor-pointer">Contact</li>
                </ul>
              </div>

              {/* Partner */}
              <div>
                <h3 className="text-white font-semibold mb-6">
                  Partner With Us
                </h3>

                <ul className="space-y-4 text-[#c5c0ba]">
                  <li className="hover:text-white cursor-pointer">
                    For Organizations ↗
                  </li>
                  <li className="hover:text-white cursor-pointer">
                    Developers
                  </li>
                </ul>
              </div>

              {/* Connect */}
              <div>
                <h3 className="text-white font-semibold mb-6">Connect</h3>

                <ul className="space-y-4 text-[#c5c0ba]">
                  <li className="hover:text-white cursor-pointer">
                    The Pulse Blog
                  </li>
                  <li className="hover:text-white cursor-pointer">Facebook</li>
                  <li className="hover:text-white cursor-pointer">Instagram</li>
                  <li className="hover:text-white cursor-pointer">Pinterest</li>
                  <li className="hover:text-white cursor-pointer">TikTok</li>
                  <li className="hover:text-white cursor-pointer">X</li>
                  <li className="hover:text-white cursor-pointer">YouTube</li>
                </ul>
              </div>
            </div>

            {/* Divider */}
            <hr className="border-[#3d3b39] my-14" />

            {/* Bottom Footer */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
              <div>
                <div className="flex flex-wrap gap-6 text-sm text-[#a8a29b]">
                  <span className="hover:text-white cursor-pointer">
                    Terms & Conditions
                  </span>

                  <span className="hover:text-white cursor-pointer">
                    Privacy Policy
                  </span>

                  <span className="hover:text-white cursor-pointer">
                    Accessibility
                  </span>

                  <span className="hover:text-white cursor-pointer">
                    IP Notice
                  </span>

                  <span className="hover:text-white cursor-pointer">
                    Security Center
                  </span>
                </div>

                <p className="text-[#8f8881] text-sm mt-6">
                  © 2026 Oura Health Oy. All rights reserved. ŌURA, OURA and Ō
                  are trademarks of Oura Health Oy and may not be used without
                  permission.
                </p>
              </div>

              {/* Language */}
              <button className="border border-[#7d7873] rounded-full px-6 py-3 text-white hover:bg-white hover:text-black transition duration-300">
                🌐 English
              </button>
            </div>
          </footer>
        </footer>
      </div>
    </div>
  );
};

export default FooterComponents;
