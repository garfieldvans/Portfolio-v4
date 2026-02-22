/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useRef, useState } from "react";
import Lottie from "react-lottie";
import "./hero.css";
import animationData from '../../utils/programmer-2.json'

const Hero = ({ sectionID }) => {
  const tabRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);
  const [prevTab, setPrevTab] = useState(null);

  const handleTabClick = (index) => {
    setPrevTab(activeTab);
    setActiveTab(index);
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="hero-section " id={`${sectionID}`}>

      {/* hero */}
      <div className="hero-wrapper">
        <div className="hero-summary">
          {/* greeting */}
          <div className="hero-greeting">
            <h1 className="hero-quote">
              {"Transforming Concepts into Reality with Structured Code"
                .split(" ")
                .map((word, wordIndex) => (
                  <span key={wordIndex}
                    className={`word ${word.toLowerCase() === "structured" || word.toLowerCase() === "code"
                        ? "text-indigo-500" : word.toLowerCase() === "concepts" ? "text-rose-500"
                        : ""
                      }`}>
                    {word.split("").map((char, charIndex) => (
                      <span
                        key={charIndex}
                        className="letter"
                        style={{
                          animationDelay: `${(wordIndex * 0.15) + (charIndex * 0.03)}s`
                        }}
                      >
                        {char}
                      </span>
                    ))}
                    &nbsp;
                  </span>
                ))}
            </h1>
            <span className="hero-details">
              As an experienced full-stack developer, I transform concepts into interactive and visually modern websites. Check out all the page, Let's Make Something Awesome.
            </span>
          </div>

          <div className="rendered-animation">
            <Lottie options={defaultOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
