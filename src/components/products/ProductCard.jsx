import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegHeart } from "react-icons/fa";

function ProductCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-10">
      <div className="rounded-lg overflow-hidden shadow-lg">
        <Link href="#">
          <div className="relative">
            <Image
              className="w-full"
              src="https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="Sunset in the mountains"
              width={500}
              height={500}
            />
            <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
            <div className="absolute bottom-2 left-2 bg-white px-1 py-1 rounded-sm text-black text-sm font-semibold hover:bg-white hover:text-[#14b8a6] transition duration-500 ease-in-out">
              4.2 ⭐
            </div>
            <div className="text-sm absolute top-0 right-0 bg-[#14b8a6] px-4 text-white rounded-full h-8 w-8 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-[#14b8a6] transition duration-500 ease-in-out">
              <FaRegHeart />
            </div>
          </div>
          <div className="px-6 py-4">
            <h3 className="font-semibold text-lg inline-block hover:text-[#14b8a6] transition duration-500 ease-in-out">
              Best View in New York City
            </h3>
            <p className="text-gray-500 text-sm">The city that never sleeps</p>
            <div className="flex flex-row items-center gap-3">
              <p className="font-semibold text-lg inline-block">Price</p>

              <p className="text-sm text-red-400">(81% off)</p>
            </div>
          </div>
          <div className="px-6 py-4 flex flex-row items-center">
            <button
              type="button"
              className="h-10 px-14 py-2 m-1 w-full text-white transition-colors duration-200 transform bg-[#14b8a6] rounded-md"
            >
              Add To Cart
            </button>
          </div>
        </Link>
      </div>

      {/* Card 2 */}
      <div className="rounded-lg overflow-hidden shadow-lg">
        <Link href="#">
          <div className="relative">
            <Image
              className="w-full"
              src="https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="Sunset in the mountains"
              width={500}
              height={500}
            />
            <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
            <div className="absolute bottom-2 left-2 bg-white px-1 py-1 rounded-sm text-black text-sm font-semibold hover:bg-white hover:text-[#14b8a6] transition duration-500 ease-in-out">
              4.2 ⭐
            </div>
            <div className="text-sm absolute top-0 right-0 bg-[#14b8a6] px-4 text-white rounded-full h-8 w-8 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-[#14b8a6] transition duration-500 ease-in-out">
              <FaRegHeart />
            </div>
          </div>
          <div className="px-6 py-4">
            <h3 className="font-semibold text-lg inline-block hover:text-[#14b8a6] transition duration-500 ease-in-out">
              Best View in New York City
            </h3>
            <p className="text-gray-500 text-sm">The city that never sleeps</p>
            <div className="flex flex-row items-center gap-3">
              <p className="font-semibold text-lg inline-block">Price</p>

              <p className="text-sm text-red-400">(81% off)</p>
            </div>
          </div>
          <div className="px-6 py-4 flex flex-row items-center">
            <button
              type="button"
              className="h-10 px-14 py-2 m-1 w-full text-white transition-colors duration-200 transform bg-[#14b8a6] rounded-md"
            >
              Add To Cart
            </button>
          </div>
        </Link>
      </div>

      {/* Card 3 */}
      <div className="rounded-lg overflow-hidden shadow-lg">
        <Link href="#">
          <div className="relative">
            <Image
              className="w-full"
              src="https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="Sunset in the mountains"
              width={500}
              height={500}
            />
            <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
            <div className="absolute bottom-2 left-2 bg-white px-1 py-1 rounded-sm text-black text-sm font-semibold hover:bg-white hover:text-[#14b8a6] transition duration-500 ease-in-out">
              4.2 ⭐
            </div>
            <div className="text-sm absolute top-0 right-0 bg-[#14b8a6] px-4 text-white rounded-full h-8 w-8 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-[#14b8a6] transition duration-500 ease-in-out">
              <FaRegHeart />
            </div>
          </div>
          <div className="px-6 py-4">
            <h3 className="font-semibold text-lg inline-block hover:text-[#14b8a6] transition duration-500 ease-in-out">
              Best View in New York City
            </h3>
            <p className="text-gray-500 text-sm">The city that never sleeps</p>
            <div className="flex flex-row items-center gap-3">
              <p className="font-semibold text-lg inline-block">Price</p>

              <p className="text-sm text-red-400">(81% off)</p>
            </div>
          </div>
          <div className="px-6 py-4 flex flex-row items-center">
            <button
              type="button"
              className="h-10 px-14 py-2 m-1 w-full text-white transition-colors duration-200 transform bg-[#14b8a6] rounded-md"
            >
              Add To Cart
            </button>
          </div>
        </Link>
      </div>

      {/* Card 4 */}
      <div className="rounded-lg overflow-hidden shadow-lg">
        <Link href="#">
          <div className="relative">
            <Image
              className="w-full"
              src="https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="Sunset in the mountains"
              width={500}
              height={500}
            />
            <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
            <div className="absolute bottom-2 left-2 bg-white px-1 py-1 rounded-sm text-black text-sm font-semibold hover:bg-white hover:text-[#14b8a6] transition duration-500 ease-in-out">
              4.2 ⭐
            </div>
            <div className="text-sm absolute top-0 right-0 bg-[#14b8a6] px-4 text-white rounded-full h-8 w-8 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-[#14b8a6] transition duration-500 ease-in-out">
              <FaRegHeart />
            </div>
          </div>
          <div className="px-6 py-4">
            <h3 className="font-semibold text-lg inline-block hover:text-[#14b8a6] transition duration-500 ease-in-out">
              Best View in New York City
            </h3>
            <p className="text-gray-500 text-sm">The city that never sleeps</p>
            <div className="flex flex-row items-center gap-3">
              <p className="font-semibold text-lg inline-block">Price</p>

              <p className="text-sm text-red-400">(81% off)</p>
            </div>
          </div>
          <div className="px-6 py-4 flex flex-row items-center">
            <button
              type="button"
              className="h-10 px-14 py-2 m-1 w-full text-white transition-colors duration-200 transform bg-[#14b8a6] rounded-md"
            >
              Add To Cart
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
