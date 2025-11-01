import React, { useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { TiTick } from "react-icons/ti";
import { TextFade } from "../../components/motion/TextFade";

function HomeSlider() {
  return (
    <TextFade>
      <h2 className="text-[40px]">
        <p>Welcome to Bestin Technologies Limited!</p><p> Your Trusted IT Consulting
        Partner!!</p>
      </h2>
    </TextFade>
  );
}

function AboutSlider() {
  const ref = useRef(null);
  const content = [
    {
      title: "Excellence",
      value: "We deliver best-in-class IT solutions with precision and quality",
    },
    {
      title: "Innovation",
      value: "We embrace cutting-edge technologies to drive progress",
    },
    {
      title: "Integrity",
      value: "We prioritize transparency, honesty, and ethical practices",
    },
    {
      title: "Collaboration",
      value: "We believe in strong partnerships and client success",
    },
    {
      title: "Customer-Centric Approach",
      value: "We tailor our services to meet unique client needs",
    },
  ];
  return (
    <div className=" justify-center items-center p-10">
      <div className="">
        <h1 className="text-5xl pb-10 text-center font-bold">About Us</h1>
        <TextFade>
          <p className="text-lg text-center lg:pb-20 lg:px-30">
            Bestin Technologies Limited is a Canada-based IT consulting firm
            that specializes in providing top-tier solutions for businesses
            seeking to harness the power of data engineering, cloud computing,
            and software development.
          </p>
        </TextFade>
      </div>
      <div className="grid lg:grid-cols-5 grid-cols-2 gap-4 pt-10">
        {content.map((value) => {
          return (
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: -100, scale: 0.5 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1 }}
              className={`rounded bg-[#4ff0b7] p-10`}
              key={value.title}
            >
              <h2 className="text-xl text-center pb-6 italic">
                {" "}
                {value.title}
              </h2>
              <p className="text-base">{value.value}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function ServiceSlider() {
  const services = [
    {
      title: "ETL/ELT Solutions (On-Premises & Cloud)",
      content:
        "We specialize in data extraction, transformation, and loading (ETL/ELT) using industry-leading tools such as Informatica, SSIS, Azure Data Factory (ADF), and Databricks to optimize data integration and storage for enhanced business intelligence.",
    },
    {
      title: "Cloud Data Engineering & Microsoft Fabric",
      content:
        "Harness the power of the cloud with our expertise in Azure Synapse, Azure Databricks, and Microsoft Fabric. We design and implement scalable cloud solutions that drive data processing, storage, and analytics efficiency.",
    },
  ];
  return (
    <div className="p-8 bg-black/[.50] rounded">
      <TextFade>
        <h1 className="text-5xl pb-4">Services</h1>

        <p className="text-sm">
          Our expertise spans across data engineering, cloud computing, software
          development, and business intelligence.
        </p>
      </TextFade>
      <hr className="h-px my-6 bg-gray-200 border-0"></hr>
      <div className="flex flex-cols space-x-4">
        {services.map((item) => {
          return (
            <div key={item.title}>
              <h3 className="text-2xl pb-8 font-semibold">{item.title}</h3>
              <p className="text-sm">{item.content}</p>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center item-center">
        <Link
          className="mt-8 bg-transparent hover:bg-blue-500 text-white-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          href="/services"
        >
          Explore
        </Link>
      </div>
    </div>
  );
}

function ContactSlider() {
  return (
    <div className="p-8 bg-black/[.50] rounded">
      <TextFade>
        <h1 className="text-5xl pb-4">Why Choose Us?</h1>
      </TextFade>

      <hr className="h-px my-6 bg-gray-200 border-0"></hr>
      <div>
        <ul className="mt-8 space-y-3 font-medium">
          <li className="flex items-start lg:col-span-1">
            <div className="flex-shrink-0">
              <TiTick className="mt-1" />
            </div>
            <p className="ml-3 leading-5">
              Expertise in cutting-edge data and cloud technologies.
            </p>
          </li>
          <li className="flex items-start lg:col-span-1">
            <div className="flex-shrink-0">
              <TiTick className="mt-1" />
            </div>
            <p className="ml-3 leading-5">
              Customized solutions tailored to business needs.
            </p>
          </li>
          <li className="flex items-start lg:col-span-1">
            <div className="flex-shrink-0">
              <TiTick className="mt-1" />
            </div>
            <p className="ml-3 leading-5">
              Proven track record in delivering high-quality IT services.
            </p>
          </li>
          <li className="flex items-start lg:col-span-1">
            <div className="flex-shrink-0">
              <TiTick className="mt-1" />
            </div>
            <p className="ml-3 leading-5">
              Commitment to innovation and efficiency.
            </p>
          </li>
          <li className="flex items-start lg:col-span-1">
            <div className="flex-shrink-0">
              <TiTick className="mt-1" />
            </div>
            <p className="ml-3 leading-5">
              Exceptional customer support and technical guidance.
            </p>
          </li>
        </ul>
      </div>
      <div className="flex justify-center item-center">
        <Link
          className="mt-8 bg-transparent hover:bg-blue-500 text-white-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          href="/contact"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}

export { HomeSlider, AboutSlider, ServiceSlider, ContactSlider };
