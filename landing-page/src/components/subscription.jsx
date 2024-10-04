import React from "react";

const Subscription = () => {
  return (
    <>
      <div className="bg-blue-400 h-64 m-auto">
        <h1 className="text-2xl w-64 text-white font-semibold text-center pt-8 mx-auto md:w-full md:pt-[6rem]">
          Are you ready to create your Showroom?
        </h1>
        <div className="flex text-xxs justify-center mt-6">
          <button className="bg-white border border-blue-400 my-2 rounded-full px-4 py-2 md:py-2 md:px-4 text-black mr-2">
            Get Early Access
          </button>
          <button className="bg-blue-400 border my-2 rounded-full px-4 py-2 md:py-2 md:px-4 text-white">
            Plans and Pricing
          </button>
        </div>
      </div>
    </>
  );
};

export default Subscription;
