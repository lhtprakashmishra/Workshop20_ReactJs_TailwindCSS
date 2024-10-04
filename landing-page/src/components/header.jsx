import React from "react";

const Header = () => {
  return (
    <>
      <section className="grid md:grid-cols-2 h-[500px]">
        <div className="ml-4 lg:ml-[8rem] md:ml-[1rem] lg:mt-16 font-bold mt-8 ">
          <div className="text-5xl md:text-4xl lg:text-6xl">
            <h1>Start Today.</h1>
            <h1>Sell Tomorrow.</h1>
          </div>
          <p className="text-sm mt-3 font-normal w-full md:w-[350px] lg:w-[400px]">
            You don't need an agency to launch a 3D Showroom. Do it Yourself. No
            coding or design experience necessary.
          </p>
          <div className="font-light mt-6 mr-2 ">
            <div className="flex">
              <input
                type="text"
                className="w-1/2 md:w-40 mr-2 px-4 py-2 rounded-md  focus:outline-none placeholder:text-xs bg-gray-100"
                placeholder="First Name*"
              ></input>
              <input
                type="text"
                className="w-1/2 md:w-40 rounded-md px-4 py-2  focus:outline-none placeholder:text-xs bg-gray-100"
                placeholder="Company Email*"
              ></input>
            </div>

            <input
              type="text"
              className="px-4 py-2 mt-3 rounded-md w-full  md:w-[327px] focus:outline-none placeholder:text-xs bg-gray-100"
              placeholder="Company Website*"
            ></input>
            <button className="bg-green-800 w-full rounded-md mt-4 p-2 md:block md:w-[327px]">
              <h1 className="text-sm font-semibold text-white mb-[-2px]">
                Put me in line
              </h1>
              <h1 className="text-white font-base text-xxs">No Commitment</h1>
            </button>
            <div className="text-xs font-extralight mx-2 my-1">
              *fields are mandatory
            </div>
          </div>
        </div>
        <div className="">
          <div className="inner h-[14rem] w-64  bg-[url('/img/landingbackground.jpg')] bg-cover bg-center mt-16 absolute lg:w-[30rem] lg:h-[23rem] right-0">
            <div className="mobile absolute top-10 -left-[5rem] max-h-[100%] overflow-hidden border-4 border-white rounded-[1rem] bg-white shadow-lg shadow-slate-900 lg:w-[11.5rem] lg:h-[23rem]">
              <img
                src="/img/mobile.png"
                className="w-[7.5rem] h-[14.5rem] lg:w-[11rem] lg:h-[22.6rem] "
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
