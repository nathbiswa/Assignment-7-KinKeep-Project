import React from "react";
import footerLogo from "../../assets/img/logo-xl.png";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { SlSocialTwitter } from "react-icons/sl";

const Footer = () => {
  return (
    <div className="bg-[#244D3F] py-20 text-white">
      <div className="w-10/12 mx-auto">
        <div className="text-center space-y-2">
          <img
            src={footerLogo}
            alt=""
            className="w-[150px] md:w-[250px] mx-auto"
          />
          <p className=" text-[12px] md:text-sm mb-4 ">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
        </div>
        <div className="text-center">
          <h2 className="my-5 text-2xl font-bold">Social Links</h2>
          <ul className="flex justify-center items-center gap-2">
            <li className="p-3 rounded-full bg-white text-black text-2xl">
              {" "}
              <FaInstagramSquare />{" "}
            </li>
            <li className="p-3 rounded-full bg-white text-black text-2xl">
              {" "}
              <FaSquareFacebook />{" "}
            </li>
            <li className="p-3 rounded-full bg-white text-black text-2xl">
              {" "}
              <SlSocialTwitter />
            </li>
          </ul>
        </div>
        <div className="grid  grid-cols-1 md:grid-cols-2 justify-between gap-2 py-4 mt-10">
          <span className="text-[12px] md:text-xl">© 2026 KeenKeeper. All rights reserved.</span>
          <ul className="flex items-center justify-end gap-3 text-[12px] md:text-xl">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Cookies</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
