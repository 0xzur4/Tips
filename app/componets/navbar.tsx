"use client";
import { useState } from "react";
import Link from "next/link";
import { Kaushan_Script, Roboto } from "next/font/google";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const kaushan = Kaushan_Script({
    subsets: ["latin"],
    weight: ["400"],
    display: "swap",
});

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400"],
    display: "swap",
});

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState(false);
    return (
        <>
            <header className="flex justify-between items-center p-4 border-b">
                <Link href="/" className="flex items-center">
                    <span className={`text-2xl font-bold ${kaushan.className}`}>Tips.</span>
                </Link>
                <nav className={`flex justify-center space-x-4 ${roboto.className} hidden md:flex`}>
                    <Link href="/" className="text-lg">
                        Home
                    </Link>
                    <Link href="/blog" className="text-lg ">
                        Blog
                    </Link>
                    <Link href="/about" className="text-lg">
                        About
                    </Link>
                </nav>
                <div className={`flex items-center space-x-4 ${roboto.className} hidden md:flex`}>
                    <Link
                        href="/login"
                        className="text-lg"
                    >
                        Login
                    </Link>
                    <Link
                        href="/signup"
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Sign Up
                    </Link>
                </div>
                <div className="md:hidden relative">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <FontAwesomeIcon icon={faBars} className="w-6 h-6 " />
                    </button>
                </div>
            </header>
            {isMenuOpen &&
                <div className="absolute w-full bg-slate-50 border-b transition-all duration-300 shadow-lg z-10">
                    <Link href="/" className="block px-4 py-2 border-b hover:bg-gray-100">
                        Home
                    </Link>
                    <Link href="/blog" className="block px-4 py-2 border-b hover:bg-gray-100">
                        Blog
                    </Link>
                    <Link href="/about" className="block px-4 py-2 border-b hover:bg-gray-100">
                        About
                    </Link>
                    <Link href="/login" className="block px-4 py-2 hover:bg-gray-100">
                        Login
                    </Link>
                    <Link
                        href="/signup"
                        className="block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-center m-2"
                    >
                        Sign Up
                    </Link>
                </div>}
        </>

    )
}