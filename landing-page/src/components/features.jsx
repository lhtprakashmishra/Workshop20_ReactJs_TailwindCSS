import React from "react";

const Features = () => {
  return (
    <>
      <section className="flex flex-col md:flex-row bg-blue-400 mt-[22rem] lg:mt-[6rem] md:-mt-[3rem]">
        <div className="bg-black text-white mt-8 py-8 px-4 w-full lg:w-[75%] lg:pl-[13rem]">
          <h2 className="text-3xl lg:text-2xl font-semibold mb-4">
            Give your online shoppers a better brand experience and level up
            your customer behaviour insights.
          </h2>
          <div className="buttons flex flex-wrap">
            <button className=" py-2 px-3 mr-4 mb-4 rounded-full border hover:shadow-md hover:border-blue-300 transition duration-200">
              Store Builder
            </button>
            <button className="border-[1px] py-2 px-3 mr-4 mb-4 rounded-full border-white">
              Customer Journey Visualizations
            </button>
            <button className="border-[1px] py-2 px-3 mr-4 mb-4 rounded-full border-white">
              A/B Testing
            </button>
            <button className="border-[1px] px-3 py-2 mr-4 mb-4 rounded-full border-white">
              Amplified Brand
            </button>
            <button className="border-[1px] py-2 px-3 mr-4 mb-4 rounded-full border-white">
              Centralized Management Portal
            </button>
          </div>
        </div>
        <div className="relative w-full h-[33rem] overflow-hidden border-2 border-gray-300">
          <img
            src="/img/clothes.png"
            alt="Description of image"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full bg-blue-500 bg-opacity-50 p-4 text-white text-left">
            <p className="w-[8rem] md:w-[20rem] lg:w-full">
              Drag-and-Drops products to rearrange store based on data findings.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
