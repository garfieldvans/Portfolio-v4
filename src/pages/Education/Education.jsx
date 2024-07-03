import React, { useEffect, useRef } from "react";
import "./Education.css";
import Lottie from "react-lottie";
import animationData from "../../utils/coding-animated.json";
import { framework, lang, tools } from "../../utils/data";

const Education = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className=" flex lg:px-24 xl:px-32 lg:py-4 sm:px-10 px-4 text-white lg:pb-20 font-poppins ">
      <div className="w-full flex flex-col">
        <div className="p-4 ">
          <h1 className="font-bold text-3xl text-center animate-fade-up">
            Profesional <b className="text-indigo-400">Skills</b>
          </h1>
          <div className="flex sm:gap-2 gap-6 items-center justify-between">
            <div className="max-w-2xl sm:min-w-72 lg:min-w-96 min-h-40 p-4 text-base lg:text-base flex flex-col gap-6">
              <p className="text-justify ">
                As a <b className="text-indigo-400">web developer</b>, I have
                the knowledge and skills to develop high-quality websites. By
                utilizing the latest technology and
                <b className="text-indigo-400"> Advanced Development tools</b>,
                I am able to create responsive, interactive, and efficient web
                solutions.
              </p>
              <p>Apart from coding, some other activities that I love to do!</p>
              <ul>
                <li>- Playing Games</li>
                <li>- Coffee</li>
                <li>- Movies</li>
              </ul>
            </div>
            <div className="sm:block hidden">
              <Lottie options={defaultOptions} width={500} />
            </div>
          </div>
        </div>
        <div className=" w-full">
          <h1 className="text-center font-bold text-xl sm:text-3xl animate-fade-up">
            <b className="text-indigo-400 ">Programming Language </b> I Use
          </h1>
          <div className="flex gap-6 sm:gap-16 mt-6 items-center justify-center flex-wrap">
            {lang.map((lang, i) => {
              return (
                <div
                  key={i}
                  className="shadow-orange-600/25 shadow-lg text-4xl sm:text-7xl sm:min-w-40 flex flex-col justify-center items-center p-4 border border-gray-600 rounded-lg animate-fade-left"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <lang.icon className="w-16 " color={lang.color} />
                  <p className="text-xs text-center mt-2">{lang.name}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className=" w-full mt-20">
          <h1 className="text-center font-bold text-xl sm:text-3xl">
            <b className="text-indigo-400">Framerwork </b> I Use
          </h1>
          <div className="flex gap-6 sm:gap-16 mt-6 items-center justify-center flex-wrap">
            {framework.map((item, i) => {
              return (
                <div
                  key={i}
                  className="shadow-orange-600/25 shadow-lg text-4xl sm:text-7xl sm:min-w-40 flex flex-col justify-center items-center p-4 border border-gray-600 rounded-lg"
                >
                  <item.icon color={item.color} className="w-16 " />
                  <p className="text-xs text-center mt-2">{item.name}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className=" w-full mt-20">
          <h1 className="text-center font-bold text-xl sm:text-3xl">
            <b className="text-indigo-400">Tools </b> I Use
          </h1>
          <div className="flex gap-6 sm:gap-16 mt-6 items-center justify-center flex-wrap">
            {tools.map((item, i) => {
              return (
                <div
                  key={i}
                  className=" shadow-orange-600/25 shadow-lg text-4xl sm:text-7xl sm:min-w-40 flex flex-col justify-center items-center p-4 border border-gray-600 rounded-lg"
                >
                  <item.icon className="w-16 " color={item.color} />
                  <p className="text-xs text-center mt-2">{item.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
