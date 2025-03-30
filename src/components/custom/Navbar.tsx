"use client";
import React, { useState } from "react";
import { FaSearch, FaUser, FaBars, FaTimes } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Navbar = () => {
    const router = useRouter();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="mx-6 md:mx-8 lg:mx-10 mt-5">
            {/* Navbar */}
            <nav className="flex items-center justify-between h-14 bg-[#124632] shadow-md px-6 md:px-8 rounded-sm relative">
                {/* Left Section (Responsive Font Size) */}
                <div
                    className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white cursor-pointer"
                    style={{ fontFamily: "Merriweather, serif" }}
                    onClick={() => {
                        router.push("/");
                        router.refresh();
                    }}
                >
                    ACTNow.com
                </div>

                {/* Center Section (Hidden from iPad size and below) */}
                <ul className="hidden lg:flex gap-6 text-white text-lg">
                    <li className="hover:font-bold cursor-pointer">About SGDs</li>
                    <li className="hover:font-bold cursor-pointer">Our Project</li>
                    <li className="hover:font-bold cursor-pointer">Take Action</li>
                </ul>

                {/* Right Section */}
                <div className="flex items-center gap-4 md:gap-6">
                    <FaSearch className="text-white text-lg md:text-xl cursor-pointer" />
                    <FaUser className="text-white text-lg md:text-xl cursor-pointer" />

                    {/* Hamburger Menu (Appears on iPad and below) */}
                    <div className="lg:hidden cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <FaTimes className="text-white text-2xl" /> : <FaBars className="text-white text-2xl" />}
                    </div>
                </div>
            </nav>

            {/* Mobile Menu (For iPad & Mobile) - Pushes Content Down */}
            <div
                className={`transition-all duration-300 ease-in-out ${menuOpen ? "h-40 opacity-100 visible" : "h-0 opacity-0 invisible"} overflow-hidden`}
            >
                <ul className="flex flex-col items-center text-black text-lg py-4 gap-4 bg-white bg-opacity-80 backdrop-blur-md shadow-md texr">
                    <li className="hover:font-bold cursor-pointer">About SGDs</li>
                    <li className="hover:font-bold cursor-pointer">Our Project</li>
                    <li className="hover:font-bold cursor-pointer">Take Action</li>
                </ul>
            </div>

           
        </div>
    );
};

export default Navbar;
