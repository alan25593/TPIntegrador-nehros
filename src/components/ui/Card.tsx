import React from "react";
import DrawerCards from "./DrawerCards";

interface CardProps {
  title: string;
  features: string[];
  selectedPlan: string;
}

const Card: React.FC<CardProps> = ({ title, features, selectedPlan }) => {
  return (
    <div className="bg-[#9747FF] rounded-lg shadow-xl text-white p-6 mx-auto min-h-[320px] lg:w-[100%] w-[90%]">
      <h2 className="lg:text-3xl text-2xl font-bold text-center pb-4">
        {title}
      </h2>
      <ul className="xl:text-lg lg:text-base text-[13px] pb-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center pb-2">
            <svg
              className="h-6 w-6 fill-current pr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M14.772 3.772a3 3 0 10-4.243 4.243L10 10.243l-.529.529a.25.25 0 01-.354 0L6.227 9.515a.75.75 0 111.06-1.06l2.236 2.236a.25.25 0 00.354 0l4.243-4.243zM8 12a4 4 0 118 0 4 4 0 01-8 0zm8-2a1 1 0 11-2 0 1 1 0 012 0z"
                clipRule="evenodd"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <DrawerCards selectedPlan={selectedPlan} />
    </div>
  );
};

export default Card;
