"use client";
import Image from "next/image";
import CoreValues from "./CoreValues";
import {
  motion,
  MotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { TextFade } from "../../components/motion/TextFade";

export default function About() {
  return (
    <section className="text-black shadow-lg">
      <div className="w-full h-screen bg-black">
        <motion.img
          src="/images/aboutUs.avif"
          alt="About Us"
          // whileInView={{ scale: 1.2 }}
          className="object-cover w-full h-full"
          initial={{ scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        />
        <div className="absolute inset-0 bg-black/[.50] bg-opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <TextFade
            direction="up"
            className="pt-0 pb-5 flex-col flex justify-center items-center space-y-0"
          >
            <h1 className="text-6xl text-white font-bold italic">
              Bestin Technologies
            </h1>
            <p className="text-xl text-white mt-4">
              Your Trusted IT Consulting Partner
            </p>
          </TextFade>
        </div>
      </div>
      <section className="max-w-6xl mx-auto py-12 px-6">
        <TextFade
          direction="up"
          className="pt-0 pb-5 flex-col flex justify-center items-center space-y-0"
        >
          <h2 className="text-3xl font-semibold text-center text-gray-800">
            Who We Are
          </h2>

          <p className="mt-4 text-gray-600 text-center">
            Bestin Technologies Limited is a leading IT consulting firm
            headquartered in Canada, dedicated to delivering cutting-edge
            technological solutions tailored to meet the evolving needs of
            businesses.
          </p>
          <p className="mt-4 text-gray-600 text-center">
            With a strong focus on data engineering, cloud computing, and
            software development, the company empowers organizations to leverage
            advanced digital tools and infrastructure for enhanced efficiency,
            scalability, and innovation.
          </p>
          <p className="mt-4 text-gray-600 text-center">
            By integrating industry best practices and state-of-the-art
            technologies, Bestin Technologies helps clients optimize their data
            workflows, transition to cloud-based environments, and develop
            robust, high-performance software applications. Through its
            expertise and customer-centric approach, the firm ensures businesses
            stay ahead in the ever-changing digital landscape.
          </p>
        </TextFade>
      </section>
      <div className="px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pb-12">
          <div className="rounded text-white bg-orange-400 p-8">
            <TextFade
              direction="up"
              className="pt-0 pb-5 flex-col flex justify-center items-center space-y-0"
            >
              <h1 className="text-5xl italic">Our Mission</h1>
              <p className="text-lg py-4">
                Our mission is to empower businesses by providing innovative
                technology solutions that streamline data integration, optimize
                analytics, and enhance their overall digital presence. We aim to
                help organizations seamlessly connect and manage their data
                sources, ensuring efficient data flow and accessibility for
                informed decision-making.
              </p>
              <p className="text-lg py-4">
                With a team of experienced professionals, we bring extensive
                expertise in Azure technologies, ETL/ELT processes, Microsoft
                Fabric, Databricks, Power BI, DevOps, and full-stack development
                to help businesses navigate complex IT challenges. Our goal is
                to empower organizations with data-driven insights, automation,
                and robust software solutions that enhance operational
                efficiency and decision-making.
              </p>
            </TextFade>
          </div>
          <div className="relative">
            <Image
              src="/images/mission.avif"
              style={{ objectFit: "cover" }}
              alt="Our Mission"
              fill
              className="rounded"
            />
          </div>
        </div>
      </div>

      <section className="bg-orange-300 text-white py-18 px-4">
        <TextFade
          direction="up"
          className="pt-0 pb-5 flex-col flex justify-center items-center space-y-0"
        >
          <h2 className="text-3xl font-bold text-center italic">Our Vision</h2>
          <p className="mt-4 text-center max-w-2xl mx-auto">
            To be a leading IT consulting firm that helps businesses transform
            their data into meaningful insights, drive innovation, and achieve
            sustainable digital success.
          </p>
        </TextFade>
      </section>

      <CoreValues />
    </section>
  );
}
