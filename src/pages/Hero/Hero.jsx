/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useRef, useState } from "react";
import styles from "./hero.module.css";
import { SiExpress, SiMongodb, SiNodedotjs, SiReact } from "react-icons/si";

const Hero = () => {
  const boxRef = useRef(null);
  const tabRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);
  const [prevTab, setPrevTab] = useState(null);

  const handleTabClick = (index) => {
    setPrevTab(activeTab);
    setActiveTab(index);
  };

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
  return (
    <div className=" flex lg:px-44 sm:px-10 px-4 text-white pb-1 ">
      <div className="flex sm:justify-center lg:justify-between sm:gap-6 md:gap-20 items-center w-full sm:flex-row flex-col">
        <div className=" flex sm:block flex-col">
          <div className="animate-flip-down animate-duration-700">
            <h1 className="sm:text-3xl font-semibold text-xl">Hi,</h1>
            <h1 className="font-bold sm:text-6xl text-2xl text-rose-600">
              I'm Bastian
            </h1>
          </div>
          <div className=" tabs hidden sm:flex border-t-2 border-r-2 border-rose-500/50 rounded-tr-lg mt-4 gap-6  animate-fade-right animate-once">
            <button
              onClick={() => handleTabClick(0)}
              className={` ${styles.tabButton} ${
                activeTab === 0 ? `${styles.borderAnimation} flex` : ""
              }`}
            >
              About Me
            </button>
            <button
              onClick={() => handleTabClick(1)}
              className={` ${styles.tabButton} ${
                activeTab === 1 ? `${styles.borderAnimation} flex` : ""
              }`}
            >
              My Best Stack
            </button>
          </div>

          <div
            className={`shadow-indigo-800 shadow-md tab-content mt-4 border border-gray-700 min-h-36 p-4 hidden sm:flex sm:max-w-sm sm:min-w-96 rounded-tr-3xl rounded-bl-3xl ${
              activeTab == 0
                ? "animate-fade-right animate-once animate-duration-500"
                : "animate-fade-left animate-once animate-duration-500"
            }`}
          >
            {activeTab === 0 && (
              <div>
                <h1 className="text-justify">
                  I am open to opportunities as a frontend developer and also
                  all opportunities related to my skills. I'll help you turn
                  your design into a responsive website. Apart from that, it
                  also helps your business.
                </h1>
              </div>
            )}
            {activeTab === 1 && (
              <div>
                The tech stack that I often use is the{" "}
                <b className="text-rose-600">MERN</b> stack. Because in my
                opinion, this stack is still widely used and is more universal.{" "}
                <br />
                <br />
                <div className="flex justify-start gap-4 text-4xl">
                  <SiMongodb
                    color="#589636"
                    className="animate-fade-left animate-once animate-duration-500"
                  />
                  <SiExpress className="animate-fade-left animate-once animate-duration-500 animate-delay-200" />
                  <SiReact
                    color="#61DBFB"
                    className="animate-fade-left animate-once animate-duration-500 animate-delay-300"
                  />
                  <SiNodedotjs
                    color="#68a063"
                    className="animate-fade-left animate-once animate-duration-500 animate-delay-[400ms]"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        <div
          className={`${styles.box3dContainer} sm:h-full w-10/12 sm:w-auto animate-fade-up animate-once animate-delay-400`}
        >
          <div
            className={`${styles.box3d} border border-indigo-900 shadow-slate-800 shadow-xl rounded-full h-4/5 lg:h-3/5 xl:h-4/5`}
            ref={boxRef}
          >
            <div
              className={`${styles.profileForm} flex items-center justify-center`}
            >
              <img src="./profile.png" className="object-cover" alt="profile" />
            </div>
          </div>
        </div>
        <div className="flex sm:hidden py-4 ">
        <button
              onClick={() => handleTabClick(0)}
              className={` ${styles.tabButton} ${
                activeTab === 0 ? `${styles.borderAnimation} flex` : ""
              }`}
            >
              About Me
            </button>
            <button
              onClick={() => handleTabClick(1)}
              className={` ${styles.tabButton} ${
                activeTab === 1 ? `${styles.borderAnimation} flex` : ""
              }`}
            >
              My Best Stack
            </button>
        </div>

        <div
          className={`tab-content mt-4 border border-gray-700 min-h-36 p-4 sm:hidden flex sm:max-w-sm sm:min-w-96 rounded-tr-3xl rounded-bl-3xl ${
            activeTab == 0
              ? "animate-fade-right animate-once animate-duration-500"
              : "animate-fade-left animate-once animate-duration-500"
          }`}
        >
          {activeTab === 0 && (
            <div>
              <h1 className="text-justify">
                I am open to opportunities as a frontend developer and also all
                opportunities related to my skills. I'll help you turn your
                design into a responsive website. Apart from that, it also helps
                your business.
              </h1>
            </div>
          )}
          {activeTab === 1 && (
            <div>
              The tech stack that I often use is the{" "}
              <b className="text-rose-600">MERN</b> stack. Because in my
              opinion, this stack is still widely used and is more universal.{" "}
              <br />
              <br />
              <div className="flex justify-start gap-4 text-4xl">
                <SiMongodb
                  color="#589636"
                  className="animate-fade-left animate-once animate-duration-500"
                />
                <SiExpress className="animate-fade-left animate-once animate-duration-500 animate-delay-200" />
                <SiReact
                  color="#61DBFB"
                  className="animate-fade-left animate-once animate-duration-500 animate-delay-300"
                />
                <SiNodedotjs
                  color="#68a063"
                  className="animate-fade-left animate-once animate-duration-500 animate-delay-[400ms]"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
