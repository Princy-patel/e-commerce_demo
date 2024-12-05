import React from "react";
import { FaTrashAlt } from "react-icons/fa"; // Import the trash icon
import Image from "next/image"; // Ensure you use the right import if you're using Next.js or replace with <img> for plain React

const cartItems = [
  {
    id: 1,
    name: "Blue Flower Print Crop Top",
    color: "Yellow",
    size: "M",
    price: 1000,
    image: "/images/product1.png", // Replace with actual image path
  },
  {
    id: 2,
    name: "Lavender Hoodie",
    color: "Lavender",
    size: "XXL",
    price: 2050,
    image: "/images/product2.png", // Replace with actual image path
  },
];

const Cart = () => {
  return (
    <section className="container px-4 mx-auto">
      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block py-2 align-middle w-full">
            <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
              <table className="w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      <div className="flex items-center gap-x-3">
                        <span>PRODUCT DETAILS</span>
                      </div>
                    </th>

                    <th
                      scope="col"
                      className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      <button className="flex items-center gap-x-2">
                        <span>PRICE</span>
                      </button>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      <button className="flex items-center gap-x-2">
                        <span>QUANTITY</span>
                      </button>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      SHIPPING
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      SUBTOTAL
                    </th>

                    <th scope="col" className="relative py-3.5 px-4">
                      <span className="sr-only">ACTION</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                  <tr>
                    <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                      <div className="inline-flex items-center gap-x-3 gap-3">
                        <div className="flex items-center gap-x-2 gap-5">
                          <Image
                            className="object-cover w-10 h-10 rounded-md"
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                            alt=""
                            height={500}
                            width={100}
                          />
                          <div>
                            <h2>Name</h2>
                            <p>Color: Yellow</p>
                            <p>Size: M</p>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                      <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>

                        <h2 className="text-sm font-normal text-emerald-500">
                          Rs.1000
                        </h2>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                      <div className="my-2 border-2 border-[#8f4533] bg-[#eedcd9] flex gap-3 leading-3 justify-center items-center space-x-4 px-3 py-1">
                        <button className="text-xl">-</button>
                        <p className="text-xl font-semibold">1</p>
                        <button className="text-xl">+</button>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap text-center">
                      FREE
                    </td>
                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                      <div className="flex items-center justify-center gap-x-2">
                        <p>Rs.1000 </p>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                      <div className="flex items-center justify-center gap-x-6">
                        <button className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              strokeLinecap="round"
                              stroke-linejoin="round"
                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between mt-8 space-y-6 md:space-y-0 md:space-x-6">
        <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/2">
          <h3 className="font-semibold mb-4 text-gray-800 text-lg">
            Discount Codes
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Enter your coupon code if you have one
          </p>
          <div className="flex items-center">
            <input
              type="text"
              className="border rounded-l-md focus:outline-none focus:ring-2 focus:ring-teal-300 p-2"
              placeholder="Coupon code"
            />
            <button className="bg-teal-500 text-white px-4 py-2 rounded-r-md hover:bg-teal-600 transition-all">
              Apply Coupon
            </button>
          </div>
          <button className="mt-4 text-teal-500 hover:underline">
            Continue Shopping
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/3">
          <div className="flex justify-between mb-4">
            <span className="text-gray-600">Sub Total</span>
            <span className="font-semibold text-gray-800">Rs.3050</span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="text-gray-600">Shipping</span>
            <span className="font-semibold text-gray-800">Rs.0.00</span>
          </div>
          <hr className="my-2 border-gray-300" />
          <div className="flex justify-between text-lg font-semibold">
            <span className="text-gray-800">Grand Total</span>
            <span className="text-gray-800">Rs.3050</span>
          </div>
          <button className="mt-6 w-full bg-teal-500 text-white py-3 rounded-md hover:bg-teal-600 transition-all">
            Proceed To Checkout
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
