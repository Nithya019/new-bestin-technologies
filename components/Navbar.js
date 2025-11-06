"use client"; // If using Next.js App Router (for client-side interactions)
import { useState, useEffect } from "react";
import Link from "next/link";
import NavLinks from "./NavLinks";
import { HiOutlineMenu } from "react-icons/hi";
import Image from "next/image";

export default function Navbar() {
  const [navBg, setNavBg] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        navBg
          ? "bg-white/[.70] py-6 bg-opacity-1 shadow-lg text-foreground"
          : "bg-transparent text-slate-800 py-12"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-xl">
        <Link href="/" className="text-4xl font-bold">
          <div>
            <Image src="/images/bestin-logo.png" alt="logo" width={150} height={150} />
          </div>
        </Link>
        <div className="hidden md:block">
          <ul className="flex space-x-6">
            <NavLinks />
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="visible md:hidden text-3xl cursor-pointer text-yellow"
        >
          <HiOutlineMenu />
        </button>
      </div>
      {isOpen && (
        <nav className="visible md:hidden bg-white border-t border-gray-200 shadow-md mt-5">
          <ul className="flex space-x-6 flex-col px-6 py-4 space-y-4 text-gray-800 font-medium">
            <NavLinks />
          </ul>
        </nav>
        
      )}
    </nav>
  );
}
