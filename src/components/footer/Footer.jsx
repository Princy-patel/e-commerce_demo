import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";

function Footer() {
  return (
    <div className="bg-[#1e293b] text-white py-8 px-12 text-center">
      <div className="flex justify-between">
        <div className="flex-1 [&>*]:p-2 [&>*]:text-left">
          <h1 className="text-2xl text-[#14b8a6]">Contact Us</h1>
          <p className="text-sm">Logo@gmail.com</p>
          <p className="text-sm">+91 12345 67890</p>
          <p>Lorem ipsum dolor sit amet, consectetur</p>
          <div className="flex gap-6 [&>*]:text-2xl">
            <FaFacebookSquare />
            <FaLinkedin />
            <FaTwitter />
            <FaInstagram />
          </div>
        </div>
        <div className="flex-1 [&>*]:p-2">
          <h1 className="text-2xl text-[#14b8a6]">Product Links</h1>
          <p>Lorem, ipsum.</p>
          <p>Fermentum turpis.</p>
          <p>Mi consequat.</p>
          <p>Amet venenatis.</p>
          <p>Convallis porttitor.</p>
        </div>
        <div className="flex-1 [&>*]:p-2">
          <h1 className="text-2xl text-[#14b8a6]">Quick Links</h1>
          <p>Lorem, ipsum.</p>
          <p>Fermentum turpis.</p>
          <p>Mi consequat.</p>
          <p>Amet venenatis.</p>
          <p>Convallis porttitor.</p>
        </div>
        <div className="flex-1 [&>*]:p-2">
          <h1 className="text-2xl text-[#14b8a6]">Legal Links</h1>
          <p>Lorem, ipsum.</p>
          <p>Fermentum turpis.</p>
          <p>Mi consequat.</p>
          <p>Amet venenatis.</p>
          <p>Convallis porttitor.</p>
        </div>
        <div className="flex flex-col [&>*]:p-2 gap-3 items-center">
          <h1 className="text-2xl text-[#14b8a6]">Get the app</h1>
          <p>Lorem, ipsum.</p>
          <div className="w-56 cursor-pointer flex gap-2 items-center bg-[#94a3b8] [&>*]:text-black justify-center rounded-md">
            <div>
              <FaApple className="text-4xl" />
            </div>

            <div>
              Download on the
              <h1 className="text-2xl">App store</h1>
            </div>
          </div>

          <div className="w-56 cursor-pointer flex gap-2 items-center bg-[#94a3b8] [&>*]:text-black justify-center rounded-md">
            <div>
              <IoLogoGooglePlaystore className="text-4xl" />
            </div>

            <div>
              GET IT ON
              <h1 className="text-2xl">Google Play</h1>
            </div>
          </div>
        </div>
      </div>
      <p className="font-thin opacity-50">
        Copyright © 2020. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
