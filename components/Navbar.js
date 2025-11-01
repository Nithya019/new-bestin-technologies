"use client"; // If using Next.js App Router (for client-side interactions)
import { useState, useEffect } from "react";
import Link from "next/link";
import NavLinks from "./NavLinks";

export default function Navbar() {
  const [navBg, setNavBg] = useState(false);

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
        navBg ? "bg-black/[.50] py-6 bg-opacity-1 shadow-lg text-white" : "bg-transparent text-white py-12"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-xl">
        <Link href="/" className="text-xl font-bold">
          Logo
        </Link>
        <ul className="flex space-x-6">
         
          <NavLinks />
        </ul>
      </div>
    </nav>
  );
}
