import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <div>
      <section className="bg-[#f8fafc]">
        <div className="container flex flex-col px-6 mx-auto lg:h-[32rem] lg:flex-row">
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
            <div className="lg:max-w-lg">
              <h1 className="text-3xl font-bold tracking-wide text-gray-800 lg:text-5xl">
                Lorem ipsum dolor sit.
              </h1>

              <div className="mt-8 space-y-5">
                <p className="flex items-center -mx-2 text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente quae quo reiciendis ipsa ratione, quos, perspiciatis
                  nam cum molestias labore explicabo omnis hic sed minus sequi
                  provident, error dignissimos iure id perferendis temporibus.
                  Quibusdam adipisci voluptate, praesentium nisi eum ipsum.{" "}
                </p>
              </div>
            </div>

            <div className="w-full mt-8 bg-transparent flex justify-around lg:w-full">
              <button
                type="button"
                className="h-10 px-14 py-2 m-1 text-[#14b8a6] transition-colors duration-200 transform border border-[#14b8a6] rounded-md"
              >
                Explore
              </button>
              <button
                type="button"
                className="h-10 px-14 py-2 m-1 text-white transition-colors duration-200 transform bg-[#14b8a6] rounded-md"
              >
                Buy Now
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center w-full h-full lg:w-1/2">
            <Image
              className="object-cover w-full h-full lg:full"
              src="https://images.unsplash.com/photo-1543269664-7eef42226a21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="glasses photo"
              width={600}
              height={600}
            />
          </div>
        </div>
      </section>

      <div className="container flex w-full justify-center px-6 mx-auto py-16 gap-5">
        <div className="bg-[#f8fafc] flex flex-col items-center justify-center rounded-md sm:w-[30%] w-full py-6">
          <h1 className="text-3xl font-bold">95%</h1>
          <h6 className="text-xl">Happy Customer</h6>
        </div>
        <div className="bg-[#f8fafc] flex flex-col items-center justify-center rounded-md sm:w-[30%] w-full py-6">
          <h1 className="text-3xl font-bold">1 Million+</h1>
          <h6 className="text-xl">Yearly Sale</h6>
        </div>
        <div className="bg-[#f8fafc] flex flex-col items-center justify-center rounded-md sm:w-[30%] w-full py-6">
          <h1 className="text-3xl font-bold">20k+</h1>
          <h6 className="text-xl">Customer Rating</h6>
        </div>
      </div>
    </div>
  );
}

export default Hero;
