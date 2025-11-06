"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import {
  HomeSlider,
  AboutSlider,
  ServiceSlider,
  ContactSlider,
} from "./landing/SliderContent";

type SliderData = {
  name: string;
  id: string;
  imgSrc: string;
};

const SliderComponents: { [key: string]: React.FC } = {
  home: HomeSlider,
  about: AboutSlider,
  services: ServiceSlider,
  contact: ContactSlider,
};

function Slider({ slider }: { slider: SliderData }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const smoothScrollYProgress = useSpring(scrollYProgress, { damping: 60 });
  const scale = useTransform(smoothScrollYProgress, [0, 1], [1.5, 1]);
  const isAboutSlider = slider.id === "about" ? true : false;
  return (
    <section
      className={`img-container overflow-hidden ${
        isAboutSlider ? "justify-center" : ""
      }`}
    >
      {isAboutSlider ? (
        <AboutSlider />
      ) : (
        <>
          <div className="img-div" ref={ref}>
            <motion.img
              src={slider.imgSrc}
              alt={slider.id}
              style={{ scale }}
              className="object-cover"
            />
          </div>
          {slider.id === "home" ? (
            <div className={`slider-content slider-${slider.id} lg:w-1/2 right-0 top-1/2 -translate-y-1/2 mx-2`}>
              {SliderComponents[slider.id] &&
                React.createElement(SliderComponents[slider.id])}
            </div>
          ) : (
            <div
              className={`slider-content slider-${slider.id} text-white lg:w-1/2 right-0 top-1/2 -translate-y-1/2 m-4`}
            >
              {SliderComponents[slider.id] &&
                React.createElement(SliderComponents[slider.id])}
            </div>
          )}
        </>
      )}
    </section>
  );
}

export default function Parallax() {
  const sliders = [
    { name: "home", id: "home", imgSrc: "/images/home.jpg" },
    { name: "services", id: "services", imgSrc: "/images/services.avif" },
    { name: "about", id: "about", imgSrc: "/images/home.jpg" },
    { name: "contact", id: "contact", imgSrc: "/images/contact.jpg" },
  ];
  return (
    <>
      <div id="slider">
        {sliders.map((slider) => (
          <Slider key={slider.name} slider={slider} />
        ))}
        <StyleSheet />
      </div>
    </>
  );
}

/**
 * ==============   Styles   ================
 */

function StyleSheet() {
  return (
    <style>{`
         html {
            scroll-snap-type: y mandatory;
        }

        .img-container {
            height: 100vh;
            scroll-snap-align: start;
            display: flex;
            position: relative;
        }
            footer {
            scroll-snap-align: start;
            }

        .img-container .img-div {
            overflow: hidden;
            width: 100%
        }

        .img-container img {
            height:100%;
            width: 100%
        }

        .img-container .slider-content {
            position: absolute;
            display: inline-block;
        }
    `}</style>
  );
}
