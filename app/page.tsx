import Image from "next/image";
import Link from "next/link";
import { Kaushan_Script } from "next/font/google";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const kaushan = Kaushan_Script({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export default function Home() {
  return (
    <div className="flex flex-col   m-0 p-0 min-h-screen">
      <header className="flex justify-between items-center p-4 border-b">
        <Link href="/" className="flex items-center">
          <span className={`text-2xl font-bold text-blue-600 ${kaushan.className}`}>Tips.</span>
        </Link>
        <nav className="flex justify-center space-x-4 hidden md:flex">
          <Link href="/features" className="text-lg hover:underline">
            Home
          </Link>
          <Link href="/pricing" className="text-lg hover:underline">
            Blog
          </Link>
          <Link href="/about" className="text-lg hover:underline">
            About
          </Link>
        </nav>
        <div className="flex items-center space-x-4 hidden md:flex">
          <Link
            href="/login"
            className="text-lg hover:underline"
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
        <FontAwesomeIcon icon={faBars} className="w-6 h-6 sm:hidden "/>
      </header>
      <main className="flex flex-1 items-center justify-center">
        <h1 className={`text-[200px] sm:text-[300px] ${kaushan.className}`}>Tips.</h1>
      </main>
      <footer className="p-4 text-center text-sm text-gray-500">
        &copy; 2024 Tips. All rights reserved.
      </footer>
    </div>
  );
}
