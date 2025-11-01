import React, { useRef } from "react";
import {
  FaAward,
  FaLightbulb,
  FaHandsHelping,
  FaPeopleArrows,
} from "react-icons/fa";
import { IoPeopleCircleOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const CoreValues = () => {
  const values = [
    {
      icon: <FaAward />,
      title: "EXCELLENCE",
      color: "bg-lime-200",
      content:
        "We deliver best-in-class IT solutions with precision and quality",
    },
    {
      icon: <FaLightbulb />,
      title: "INNOVATION",
      color: "bg-yellow-200",
      content: "We embrace cutting-edge technologies to drive progress",
    },
    {
      icon: <FaHandsHelping />,
      title: "INTEGRITY",
      color: "bg-blue-200",
      content: "We prioritize transparency, honesty, and ethical practices",
    },
    {
      icon: <FaPeopleArrows />,
      title: "COLLABRATION",
      color: "bg-purple-200",
      content: "We believe in strong partnerships and client success",
    },
    {
      icon: <IoPeopleCircleOutline />,
      title: "CUSTOMER-CENTRIC APPROACH",
      color: "bg-rose-200",
      content: "We tailor our services to meet unique client needs",
    },
  ];
  const ref = useRef(null);
  return (
    <section className="px-6 py-10 text-black">
      <h2 className="text-3xl font-bold text-center text-gray-800 pb-8 italic">
        Core Values
      </h2>

      <div className="grid lg:grid-cols-5 grid-cols-1 gap-4">
        {values.map((value) => {
          return (
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: -100, scale: 0.5 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1 }}
              className={`${value.color} p-10`}
              key={value.title}
            >
              <div className=" flex items-center justify-center text-5xl pb-4">
                {value.icon}
              </div>

              <h2 className="text-xl pb-4"> {value.title}</h2>
              <p className="text-lg">{value.content}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default CoreValues;
