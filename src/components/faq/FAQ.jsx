"use client";

import { Fragment, useState } from "react";

const initialData = [
  {
    id: 1,
    question: "What is Frontend Mentor, and how will it help me?",
    answer:
      "Frontend Mentor offers realistic coding challenges to help developers, improve their frontend coding skills with projects in HTML, CSS and JavaScript. It's suitable for all levels and ideal for portfolio building.",
    isVisible: true,
  },
  {
    id: 2,
    question: "Is Frontend Mentor free?",
    answer:
      "Frontend Mentor offers realistic coding challenges to help developers, improve their frontend coding skills with projects in HTML, CSS and JavaScript. It's suitable for all levels and ideal for portfolio building.",
    isVisible: false,
  },
  {
    id: 3,
    question: "Can I use Frontend Mentor projects in my portfolio?",
    answer:
      "Frontend Mentor offers realistic coding challenges to help developers, improve their frontend coding skills with projects in HTML, CSS and JavaScript. It's suitable for all levels and ideal for portfolio building.",
    isVisible: false,
  },
  {
    id: 4,
    question: "How can I get help if I'm stuck on a challenge?",
    answer:
      "Frontend Mentor offers realistic coding challenges to help developers, improve their frontend coding skills with projects in HTML, CSS and JavaScript. It's suitable for all levels and ideal for portfolio building.",
    isVisible: false,
  },
];

function FAQ() {
  const [isShow, setIsShow] = useState(initialData);

  const handleToggleVisibility = function (id) {
    const openAndClose = isShow.map((data) => ({
      ...data,
      isVisible: data.id === id ? !data.isVisible : false,
    }));
    setIsShow(openAndClose);
  };

  return (
    <div className="py-16">
      <div className="flex [&>*]:p-3">
        <h2 className="text-3xl font-bold">FAQ</h2>
      </div>

      <div className="">
        {isShow.map((data) => {
          return (
            <Fragment key={data.id}>
              <div
                className="flex justify-between"
                onClick={handleToggleVisibility.bind(null, data.id)}
              >
                <h2 className="text-[#2f1533] py-3 hover:text-[#14b8a6] cursor-pointer">
                  {data.question}
                </h2>

                <h6 className="text-[#14b8a6] text-2xl cursor-pointer">
                  {!data.isVisible ? "+" : "-"}
                </h6>
              </div>
              <p
                className={`pb-3 text-[#8c6991] ${!data.isVisible && "hidden"}`}
              >
                {data.answer}
              </p>
              <hr />
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default FAQ;
