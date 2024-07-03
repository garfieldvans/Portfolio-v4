import React from "react";
import Lottie from "react-lottie";
import animationData from "../../utils/coding-work.json";
import { workExp } from "../../utils/data";
import { SiPaperspace } from "react-icons/si";
import { MdWorkHistory } from "react-icons/md";

const Work = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className=" flex flex-col lg:px-40 pt-2 sm:px-10 px-4 text-white pb-20 ">
      <div className=" flex gap-5 items-center text-center">
        <div className="h-px bg-slate-200/25 w-full" />
        <h1 className="font-bold text-xl md:text-3xl text-center animate-fade-up flex gap-3">
          Profesional <b className="text-rose-500">Skills</b>
        </h1>
        <div className="h-px bg-slate-200/25 w-full" />
      </div>
      <div className="flex sm:flex-row flex-col sm:gap-2 gap-6 items-center mt-3 justify-between">
        <div className="w-40 h-auto lg:w-80 md:w-60">
          <Lottie options={defaultOptions} />
        </div>
        <div className="max-w-2xl sm:min-w-72 lg:w-full min-h-40 p-4 text-base lg:text-base flex flex-col gap-6 ease-in-out animate-fade-up animate-once animate-delay-200">
          {workExp.map((work, i) => {
            return (
              <div
                key={i}
                className={` shadow-sm shadow-indigo-500 hover:shadow-none lg:px-10 p-2 border-2 border-indigo-200/25 rounded-lg hover:border-rose-500 hover:animate-wiggle`}
              >
                <h1 className="text-center">{work.tenure}</h1>
                <div className="flex gap-10 mt-2 text-3xl">
                  <MdWorkHistory className="text-rose-500 " size={30} />
                  <div className="text-sm md:text-lg">
                    <h1 className=" font-bold">{work.place}</h1>
                    <h1 >{work.role}</h1>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Work;
