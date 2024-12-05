"use client";

import React from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { removeProducts } from "@/slice/getProductData";

const Cart = () => {
  const dispatch = useDispatch();
  const cartDataSelector = useSelector((state) => state.productData.cartData);

  const removeProduct = function (id) {
    dispatch(removeProducts(id));
  };

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
                  {cartDataSelector && cartDataSelector.length > 0 ? (
                    cartDataSelector.map((item) => (
                      <tr key={item.id}>
                        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div className="inline-flex items-center gap-x-3 gap-3">
                            <div className="flex items-center gap-x-2 gap-5">
                              <Image
                                className="object-cover w-10 h-10 rounded-md"
                                src={item.image}
                                alt=""
                                height={500}
                                width={100}
                              />
                              <div>
                                <h2>Name: {item.title}</h2>
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
                              Rs.{item.price}
                            </h2>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          <div className="my-2 border-2 border-[#8f4533] bg-[#eedcd9] flex gap-3 leading-3 justify-center items-center space-x-4 px-3 py-1">
                            <button className="text-xl">-</button>
                            <p className="text-xl font-semibold">
                              {item.quantity}
                            </p>
                            <button className="text-xl">+</button>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap text-center">
                          FREE
                        </td>
                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          <div className="flex items-center justify-center gap-x-2">
                            <p>Rs.{item.price}</p>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          <div className="flex items-center justify-center gap-x-6">
                            <button
                              onClick={removeProduct.bind(this, item.id)}
                              className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none"
                            >
                              <MdDelete size={30} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6} className="text-center py-6">
                        No Product Found
                      </td>
                    </tr>
                  )}
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
