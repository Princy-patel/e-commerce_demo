import React from "react";

function Footer() {
  return (
    <div className="bg-[#1e293b] text-white p-8 text-center">
      <div className="flex justify-around">
        <div className="[&>*]:p-2">
          <h1 className="text-2xl text-[#14b8a6]">Exclusive</h1>
          <p className="text-lg">Subscribe</p>
          <p>Get 10% off your first order</p>
          <input
            type="text"
            placeholder="Enter your Email"
            className="rounded-md"
          />
        </div>
        <div className="[&>*]:p-2">
          <h1 className="text-2xl text-[#14b8a6]">Support</h1>
          <p>
            111 Bijoy sarani, Dhaka,
            <br /> DH 1515, Bangluru.
          </p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>
        <div className="[&>*]:p-2">
          <h1 className="text-2xl text-[#14b8a6]">Account</h1>
          <p>My Account</p>
          <p>Login/Register</p>
          <p>Cart</p>
          <p>Wishlist</p>
          <p>Shop</p>
        </div>
        <div className="[&>*]:p-2">
          <h1 className="text-2xl text-[#14b8a6]">Account</h1>
          <p>My Account</p>
          <p>Login/Register</p>
          <p>Cart</p>
          <p>Wishlist</p>
          <p>Shop</p>
        </div>
        <div className="[&>*]:p-2">
          <h1 className="text-2xl text-[#14b8a6]">Quick Link</h1>
          <p>Privacy Policy</p>
          <p>Therms of use</p>
          <p>FAQ</p>
          <p>Contacts</p>
        </div>
      </div>
      <p className="font-thin opacity-50">
        Copyright Rimel 2024. All right reserved
      </p>
    </div>
  );
}

export default Footer;
