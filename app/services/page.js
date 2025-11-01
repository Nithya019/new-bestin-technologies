"use client";
import { motion } from "framer-motion";
import { TextFade } from "../../components/motion/TextFade";
import { FaArrowUp, FaChartBar, FaCloud } from "react-icons/fa";
import { SiWebex } from "react-icons/si";
import { FiSettings } from "react-icons/fi";
import { TbBulbFilled } from "react-icons/tb";
import { MdOutlineLibraryBooks } from "react-icons/md";

export default function About() {
  return (
    <section className="text-black bg-gray-100 shadow-lg">
      <div className="w-full h-screen bg-black">
        <motion.img
          src="/images/servicesPage.avif"
          alt="About Us"
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
              Bestin Services
            </h1>
            <p className="text-xl text-white mt-4">
              Your Trusted IT Consulting Partner
            </p>
          </TextFade>
        </div>
      </div>
      <section className="max-w-6xl mx-auto pt-12 px-6">
        <TextFade
          direction="up"
          className="pt-0 pb-5 flex-col flex justify-center items-center space-y-0"
        >
          <h2 className="text-4xl pb-4 font-semibold text-center text-gray-800">
            Our Services
          </h2>

          <p className="mt-4 text-gray-600 text-center">
            At Bestin Technologies Limited, we offer a comprehensive suite of IT
            consulting services designed to help businesses navigate the
            evolving technological landscape. Our expertise spans across data
            engineering, cloud computing, software development, and business
            intelligence.
          </p>
        </TextFade>
      </section>

      <main className="container mx-auto px-6 py-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-105 animate-fade-in">
            <TextFade>
              <FaArrowUp className="h-12 w-12 text-[#4ff0b7] mb-4" />
              <h2 className="text-xl font-semibold italic text-black mb-4">
                ETL/ELT Solutions (On-Premises & Cloud)
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                We specialize in data extraction, transformation, and loading
                (ETL/ELT) using industry-leading tools such as Informatica,
                SSIS, Azure Data Factory (ADF), and Databricks to optimize data
                integration and storage for enhanced business intelligence.
              </p>
            </TextFade>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-105 animate-fade-in">
            <TextFade>
              <FaCloud className="h-12 w-12 text-[#4ff0b7] mb-4" />
              <h2 className="text-xl font-semibold italic text-black mb-4">
                Cloud Data Engineering & Microsoft Fabric
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Harness the power of the cloud with our expertise in Azure
                Synapse, Azure Databricks, and Microsoft Fabric. We design and
                implement scalable cloud solutions that drive data processing,
                storage, and analytics efficiency.
              </p>
            </TextFade>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-105 animate-fade-in">
            <TextFade>
              <FiSettings className="h-12 w-12 text-[#4ff0b7] mb-4" />
              <h2 className="text-xl font-semibold italic text-black mb-4">
                Azure DevOps & CI/CD Pipelines
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Our team ensures seamless software development and deployment
                with Azure DevOps, GitHub Actions, and Jenkins, enabling
                automated builds, testing, and deployments.
              </p>
            </TextFade>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-105 animate-fade-in">
            <TextFade>
              <TbBulbFilled className="h-12 w-12 text-[#4ff0b7] mb-4" />
              <h2 className="text-xl font-semibold italic text-black mb-4">
                Data Science & AI Solutions
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Unlock actionable insights with our data science services,
                including predictive analytics, machine learning, and AI-driven
                solutions.
              </p>
            </TextFade>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-105 animate-fade-in">
            <TextFade>
              <FaChartBar className="h-12 w-12 text-[#4ff0b7] mb-4" />
              <h2 className="text-xl font-semibold italic text-black mb-4">
                Business Intelligence & Power BI Report Building
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                We develop interactive dashboards and reports using Power BI to
                help businesses visualize and analyze their data effectively for
                informed decision-making.
              </p>
            </TextFade>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-105 animate-fade-in">
            <TextFade>
              <SiWebex className="h-12 w-12 text-[#4ff0b7] mb-4" />
              <h2 className="text-xl font-semibold italic text-black mb-4">
                Full-Stack Web Development
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Our development team delivers robust, scalable, and
                user-friendly web applications using React, Angular, .NET,
                Python, and Node.js to meet diverse business needs.
              </p>
            </TextFade>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-105 animate-fade-in">
            <TextFade>
              <MdOutlineLibraryBooks className="h-12 w-12 text-[#4ff0b7] mb-4" />
              <h2 className="text-xl font-semibold italic text-black mb-4">
                Software Testing (Manual & Automation)
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                We provide comprehensive QA testing services, including manual
                testing, automation testing with Selenium, Cypress, and API
                testing to ensure software reliability and performance.
              </p>
            </TextFade>
          </div>
        </div>
      </main>
    </section>
  );
}
