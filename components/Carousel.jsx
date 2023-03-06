/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-page-custom-font */
import React from "react";

export default function Carousel() {
  
  
  return (
    <div className="bg-[#000000] leading-normal tracking-normal">
      <h1
        className="heading leading-tight text-5xl text-center mt-10 mb-0 font-bold text-[#ffffff]  "
        // style={{ marginLeft: "45vw", marginTop: "5vh", fontWeight: "bolder" }}
      >
        Events
      </h1>
      <div className="box">
        <div className="carousel relative shadow-2xl bg-[#232323]">
          <div className="carousel-inner relative overflow-hidden w-full ">
            <input
              className="carousel-open"
              type="radio"
              id="carousel-1"
              name="carousel"
              aria-hidden="true"
              defaultChecked
              hidden
            />
            <div className="carousel-item absolute opacity-0 lg:flex-row lg:h-64 ">
              <div className="mb-12">
                <img
                  className="imgclass h-60 mt-20 mx-auto md:h-72 lg:h-80 lg:m-10 lg:mb-0 "
                  src="https://shunyapes.com/Assets/eventsPage/faceOff.webp "
                  alt=""
                />
              </div>
              <div className="carousel-text mx-auto h-96 lg:mt-12 lg:ml-4">
                <h2 className="parah font-medium leading-tight text-3xl mb-2 text-blue-600  lg:text-4xl">
                  1. Face-Off
                </h2>
                <p className="para text-base lg:text-lg">
                  {" "}
                  Team Shunya is super excited to inform you that we are going
                  to be hosting our very first event in the month of April. But
                  before that what is even better is that we are organising a
                  very fun event for all PES RR and EC Campus students on 18th
                  March. Make sure you attend the event to stand a chance to win
                  exciting prizes and get to know more about the event! In case
                  of any queries, feel free to reach out to us.
                </p>
              </div>
            </div>
            <label
              htmlFor="carousel-4"
              className="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-600 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
            >
              ‹
            </label>
            <label
              htmlFor="carousel-2"
              className="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-600 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
            >
              ›
            </label>

            {/* <!--Slide 2--> */}
            <input
              className="carousel-open"
              type="radio"
              id="carousel-2"
              name="carousel"
              aria-hidden="true"
              hidden
            />
            <div className="carousel-item absolute opacity-0 lg:flex-row lg:h-64">
              <div className="mb-12">
                <img
                  className="imgclass h-60 mt-20 mx-auto md:h-72 lg:h-80 lg:m-10 lg:mb-0 "
                  src="https://shunyapes.com/Assets/eventsPage/arithmania.webp"
                  alt=""
                />
              </div>
              <div className="carousel-text mx-auto h-96 lg:mt-12 lg:ml-4">
                <h2 className="parah font-medium leading-tight text-3xl mb-2 text-blue-600 lg:text-4xl">
                  2. Arithemania
                </h2>
                <p className="para text-base lg:text-lg">
                  {" "}
                  Team Shunya is super excited to inform you that we are going
                  to be hosting our very first event in the month of April. But
                  before that what is even better is that we are organising a
                  very fun event for all PES RR and EC Campus students on 18th
                  March. Make sure you attend the event to stand a chance to win
                  exciting prizes and get to know more about the event! In case
                  of any queries, feel free to reach out to us.
                </p>
              </div>
            </div>
            <label
              htmlFor="carousel-1"
              className="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-600 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
            >
              ‹
            </label>
            <label
              htmlFor="carousel-3"
              className="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-600 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
            >
              ›
            </label>
            {/* <!--Slide 3--> */}
            <input
              className="carousel-open"
              type="radio"
              id="carousel-3"
              name="carousel"
              aria-hidden="true"
              hidden
            />
            <div className="carousel-item absolute opacity-0 lg:flex-row lg:h-64">
              <div className="mb-12">
                <img
                  className="imgclass h-60 mt-20 mx-auto md:h-72 lg:h-80 lg:m-10 lg:mb-0 "
                  src="https://shunyapes.com/Assets/eventsPage/faceOff.webp "
                  alt=""
                />
              </div>
              <div className="carousel-text mx-auto h-96 lg:mt-12 lg:ml-4">
                <h2 className="parah font-medium leading-tight text-3xl mb-2 text-blue-600 lg:text-4xl">
                  3. Face-Off
                </h2>
                <p className="para text-base lg:text-lg">
                  {" "}
                  Team Shunya is super excited to inform you that we are going
                  to be hosting our very first event in the month of April. But
                  before that what is even better is that we are organising a
                  very fun event for all PES RR and EC Campus students on 18th
                  March. Make sure you attend the event to stand a chance to win
                  exciting prizes and get to know more about the event! In case
                  of any queries, feel free to reach out to us.
                </p>
              </div>
            </div>
            <label
              htmlFor="carousel-2"
              className="prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-600 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
            >
              ‹
            </label>
            <label
              htmlFor="carousel-4"
              className="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-600 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
            >
              ›
            </label>
            {/*slide 4*/}
            <input
              className="carousel-open"
              type="radio"
              id="carousel-4"
              name="carousel"
              aria-hidden="true"
              hidden
            />
            <div className="carousel-item absolute opacity-0 lg:flex-row lg:h-64">
              <div className="mb-12">
                <img
                  className="imgclass h-60 mt-20 mx-auto md:h-72 lg:h-80 lg:m-10 lg:mb-0 "
                  src="https://shunyapes.com/Assets/eventsPage/arithmania.webp"
                  alt=""
                />
              </div>
              <div className="carousel-text mx-auto h-96 lg:mt-12 lg:ml-4">
                <h2 className="parah font-medium leading-tight text-3xl mb-2 text-blue-600 lg:text-4xl">
                  4. Arithemania
                </h2>
                <p className="para text-base lg:text-lg">
                  {" "}
                  Team Shunya is super excited to inform you that we are going
                  to be hosting our very first event in the month of April. But
                  before that what is even better is that we are organising a
                  very fun event for all PES RR and EC Campus students on 18th
                  March. Make sure you attend the event to stand a chance to win
                  exciting prizes and get to know more about the event! In case
                  of any queries, feel free to reach out to us.
                </p>
              </div>
            </div>
            <label
              htmlFor="carousel-3"
              className="prev control-4 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-600 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
            >
              ‹
            </label>
            <label
              htmlFor="carousel-1"
              className="next control-4 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-600 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
            >
              ›
            </label>
            {/* <!-- Add additional indicators for each slide--> */}
            <ol className="carousel-indicators">
              <li className="inline-block mr-3">
                <label
                  htmlFor="carousel-1"
                  className="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700"
                >
                  •
                </label>
              </li>
              <li className="inline-block mr-3">
                <label
                  htmlFor="carousel-2"
                  className="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700"
                >
                  •
                </label>
              </li>
              <li className="inline-block mr-3">
                <label
                  htmlFor="carousel-3"
                  className="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700"
                >
                  •
                </label>
              </li>
              <li className="inline-block mr-3">
                <label
                  htmlFor="carousel-4"
                  className="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700"
                >
                  •
                </label>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
