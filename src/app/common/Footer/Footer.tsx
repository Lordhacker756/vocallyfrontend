import React from "react";
import Image from "next/image";

import { HiPhone } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import logo from "../../assets/logo_full.png";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="px-[5%] relative lg:h-[200px]  lg:py-0 pb-6 flex lg:flex-row flex-col items-center justify-between">
      <div className="footer_left">
        <Image src={logo} width={300} alt="logo" />
        <div className="contact_details flex lg:hidden mt-3 flex-row gap-9 ">
          <div className="phone flex items-center gap-1">
            <HiPhone className="text-gray-400" size={12} />
            <p className="text-gray-400 text-sm">+759 586 4558</p>
          </div>
          <div className="email flex items-center gap-1">
            <MdEmail className="text-gray-400 mt-1" size={16} />
            <p className="text-gray-400 text-sm">services@openauto.ca</p>
          </div>
        </div>
        <p className="text-gray-300 my-3 ml-2 lg:text-left lg:mt-0 mt-8 text-center">
          Open Auto @ all rights reserved
        </p>
      </div>

      <div className="footer_right relative">
        <div className="footer_links flex lg:hidden mt-3 flex-row gap-9 ">
          <p className="text-gray-400 text-sm">Privacy Policy</p>
          <p className="text-gray-400 text-sm">Terms of use</p>
          <p className="text-gray-400 text-sm">Cookie Policy</p>
        </div>
        <div className="contact_details lg:flex lg:flex-row hidden gap-9">
          <div className="phone flex items-center gap-1">
            <HiPhone className="text-gray-400" size={12} />
            <p className="text-gray-400 text-sm">+759 586 4558</p>
          </div>
          <div className="email flex items-center gap-1">
            <MdEmail className="text-gray-400 mt-1" size={16} />
            <p className="text-gray-400 text-sm">services@openauto.ca</p>
          </div>
        </div>
        <div className="social_links flex gap-3 lg:mt-4 mt-6 justify-between">
          <FaFacebookF
            className="text-gray-200 cursor-pointer hover:text-purple-600 hover:scale-[1.05] transition-all ease-in"
            size={20}
          />
          <FaTwitter
            className="text-gray-200 cursor-pointer hover:text-purple-600 hover:scale-[1.05] transition-all ease-in"
            size={20}
          />
          <FaYoutube
            className="text-gray-200 cursor-pointer hover:text-purple-600 hover:scale-[1.05] transition-all ease-in"
            size={20}
          />
          <FaLinkedin
            className="text-gray-200 cursor-pointer hover:text-purple-600 hover:scale-[1.05] transition-all ease-in"
            size={20}
          />
          <FaInstagram
            className="text-gray-200 cursor-pointer hover:text-purple-600 hover:scale-[1.05] transition-all ease-in"
            size={20}
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
