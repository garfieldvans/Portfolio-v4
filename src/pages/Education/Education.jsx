import React, { useEffect, useRef } from "react";
import "./Education.css";
import Lottie from "react-lottie";
import animationData from "../../utils/coding-animated.json";
import { framework, lang, tools } from "../../utils/data";

const Education = ({ sectionID }) => {
  const boxRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const box = boxRef.current;
      const rect = box.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      const rotateX = -y / 10;
      const rotateY = x / 10;

      box.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = () => {
      const box = boxRef.current;
      box.style.transform = `rotateX(0deg) rotateY(0deg)`;
    };

    const box = boxRef.current;
    box.addEventListener("mousemove", handleMouseMove);
    box.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      box.removeEventListener("mousemove", handleMouseMove);
      box.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className=" flex lg:px-24 xl:px-32 lg:py-4 sm:px-10 px-4 text-white lg:pb-20 font-poppins " id={`${sectionID}`}>
      <div className="w-full flex flex-col">
        <div className="p-4 ">
          <div className="section-header">
            <div className="h-px bg-slate-200/25 w-full" />
            <h2 className="section-header-title font-bold text-3xl text-center animate-fade-up">
              Profesional <b className="text-indigo-400">Journey</b>
            </h2>
            <div className="h-px bg-slate-200/25 w-full" />
          </div>

          {/* profile */}
          <div className="profile-container">
            {/* image */}
            <div
              className={`box3dContainer animate-fade-up animate-once animate-delay-400`}
            >
              <div
                className={`box3d border border-indigo-900 shadow-slate-800 shadow-xl rounded-full h-4/5 lg:h-3/5 xl:h-4/5`}
                ref={boxRef}
              >
                <div
                  className={`profileForm flex items-center justify-center`}
                >
                  <img src="./profile.png" className="object-cover" alt="profile" />
                </div>
              </div>
            </div>

            {/* summary */}
            <div className="profile-summary">
              <div className="summary-container">
                <p className="summary-desc">
                  Hello there, I'm Sebastian Paulo Haloho. I’m a Fullstack Web Developer with 3+ years of experience building responsive, dynamic, and scalable web applications for projects of all sizes. Skilled in modern frontend technologies and REST API integration, I focus on delivering clean, efficient, and user-friendly interfaces. Open to collaboration and always ready to bring ideas to life let’s connect and build something impactful together.
                </p>
              </div>
            </div>

          </div>
          <div className="section-divider"></div>
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
        <div className="section-divider"></div>
        {/* expertise */}
        <div className=" w-full">
          <h3 className="text-center font-bold text-xl sm:text-3xl animate-fade-up">
            <b className="text-indigo-400 ">Programming Language </b> I Use
          </h3>
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
        <div className="section-divider"></div>
        {/* stack */}
        <div className=" w-full">
          <h3 className="text-center font-bold text-xl sm:text-3xl">
            <b className="text-indigo-400">Framerwork </b> I Use
          </h3>
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
      <div className="section-divider"></div>

        {/* tools */}
        <div className=" w-full">
          <h3 className="text-center font-bold text-xl sm:text-3xl">
            <b className="text-indigo-400">Tools </b> I Use
          </h3>
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
