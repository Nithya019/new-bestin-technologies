import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Image from 'next/image'
import { TextFade } from "../../components/motion/TextFade";

const Contact = () => {
  return (
    <section className="mb-6">
      <div
        className="relative h-[400px] overflow-hidden bg-cover bg-[50%] bg-no-repeat"
      >

      <Image src="/images/contactUsForm.avif" style={{objectFit: "cover"}} alt="Contact Us" fill/>
      </div>
      <div className="container px-6 md:px-12">
        <div className="block rounded-lg px-6 py-8 md:py-8 md:px-10 -mt-[100px] backdrop-blur-[30px] border border-gray-300">
          <div className="flex flex-wrap">
            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
              <form>
                <div className="mb-3 w-full">
                  <label
                    className="block font-medium mb-[2px] text-teal-700"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="px-2 py-2 border w-full outline-none rounded-md"
                    id="name"
                    placeholder="Name"
                  />
                </div>

                <div className="mb-3 w-full">
                  <label
                    className="block font-medium mb-[2px] text-teal-700"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="px-2 py-2 border w-full outline-none rounded-md"
                    id="email"
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="mb-3 w-full">
                  <label
                    className="block font-medium mb-[2px] text-teal-700"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    className="px-2 py-2 border rounded-[5px] w-full outline-none"
                    name="message"
                    id="message"
                  ></textarea>
                </div>

                <button
                  type="button"
                  className="mb-6 inline-block w-full rounded bg-teal-400 px-6 py-2.5 font-medium uppercase leading-normal text-white hover:shadow-md hover:bg-teal-500"
                >
                  Send
                </button>
              </form>
            </div>
            <div className="text-center w-full shrink-0 grow-0 basis-auto lg:w-7/12 pt-4 italic">
            <TextFade>
            <h2 className="text-4xl font-bold text-gray pb-4">Our Vision</h2>
            <p className="text-xl pb-2">
            <MdEmail className="inline"/> contact@bestintechnologies.com
            </p>
            <p className="text-xl pb-2">
            <FaPhoneAlt className="inline"/> +1 3689991222
            </p>
            <p className="text-xl">
            Canada - Calgary
            </p>
            </TextFade>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
