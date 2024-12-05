import Image from "next/image";
import React from "react";

const reviews = [
  {
    id: 1,
    name: "Floyd Miles",
    image: "/icons/customer-1.png",
    rating: 4,
    review:
      "ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    id: 2,
    name: "Ronald Richards",
    image: "/icons/customer-2.png",
    rating: 5,
    review:
      "ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    id: 3,
    name: "Savannah Nguyen",
    image: "/icons/customer-3.png",
    rating: 4,
    review:
      "ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
];

const CustomerReview = () => {
  return (
    <div className="py-12">
      <h1 className="text-3xl font-bold mb-8">Customer Reviews</h1>
      <div className="flex flex-col md:flex-row justify-center gap-8 mx-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center w-full md:w-1/3"
          >
            <Image
              src={review.image}
              alt={review.name}
              className="w-16 h-16 mb-4 object-cover"
              width={100}
              height={100}
            />
            <h3 className="text-xl font-semibold mb-2">{review.name}</h3>
            <div className="flex mb-4">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  className={`h-5 w-5 ${
                    index < review.rating ? "text-yellow-400" : "text-gray-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927C9.349 2.004 10.651 2.004 10.951 2.927l1.214 3.717a1 1 0 00.95.69h3.908c.969 0 1.371 1.24.588 1.81l-3.161 2.3a1 1 0 00-.364 1.118l1.214 3.717c.302.923-.755 1.688-1.541 1.118l-3.161-2.3a1 1 0 00-1.175 0l-3.161 2.3c-.787.57-1.843-.195-1.541-1.118l1.214-3.717a1 1 0 00-.364-1.118l-3.161-2.3c-.783-.57-.381-1.81.588-1.81h3.908a1 1 0 00.95-.69l1.214-3.717z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-600 text-center">{review.review}</p>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        <div className="h-3 w-3 bg-teal-600 rounded-full"></div>
        <div className="h-3 w-3 bg-gray-300 rounded-full"></div>
        <div className="h-3 w-3 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  );
};

export default CustomerReview;
