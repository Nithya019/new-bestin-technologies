"use client";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import React, { useRef } from "react";
import {
  HomeSlider,
  AboutSlider,
  ServiceSlider,
  ContactSlider
} from "./landing/SliderContent";

const SliderComponents: { [key: string]: React.FC } = {
  home: HomeSlider,
  about: AboutSlider,
  services: ServiceSlider,
  contact: ContactSlider
};

function Slider({ id }: { id: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const smoothScrollYProgress = useSpring(scrollYProgress, { damping: 60 });
  const scale = useTransform(smoothScrollYProgress, [0, 1], [1.5, 1]);
   const isAboutSlider = id === 'about' ? true: false;
  return (
    <section className={`img-container ${isAboutSlider ? 'justify-center': ''}`}>
      {isAboutSlider ? <AboutSlider /> : <>
      <div className="img-div" ref={ref}>
        <motion.img
          src={`/images/${id}.avif`}
          alt={id}
          style={{ scale }}
          className="object-cover"
        />
      </div>
      <div className={`slider-content slider-${id} text-white lg:w-1/2 right-0 top-1/2 -translate-y-1/2 m-4`}>
        {SliderComponents[id] && React.createElement(SliderComponents[id])}{" "}
      </div></> }
    </section>
  );
}

export default function Parallax() {
  const sliders = ["home", "services", "about", "contact"];
  return (
    <>
      <div id="slider">
        {sliders.map((slider) => (
          <Slider key={slider} id={slider} />
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
