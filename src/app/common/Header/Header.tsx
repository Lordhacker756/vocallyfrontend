import React from "react";
import Image from "next/image";
import logo from "../../assets/logo_full.png";
import { HiPhone } from "react-icons/hi";
import { MdEmail } from "react-icons/md";

function Header() {
  return (
    <div className="flex lg:justify-around justify-start px-[5%]">
      <div className="logo_container">
        <Image src={logo} alt="logo" height={100} width={180} />
      </div>
      <div
        className="header_info lg:w-[90%] lg:flex
        justify-end gap-12 items-center hidden
      "
      >
        <div className="phone flex items-center gap-1">
          <HiPhone className="text-gray-400" size={12} />
          <p className="text-gray-400 text-sm">+759 586 4558</p>
        </div>
        <div className="email flex items-center gap-1">
          <MdEmail className="text-gray-400 mt-1" size={16} />
          <p className="text-gray-400 text-sm">services@openauto.ca</p>
        </div>
        <button className="cursor-pointer rounded-full border-2 border-gray-400 text-[0.9rem] font-semibold px-5 py-2 text-gray-400">
          Download the mobile app
        </button>
      </div>
    </div>
  );
}

export default Header;
