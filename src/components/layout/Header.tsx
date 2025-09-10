"use client";

import Image from "next/image";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, Search, ChevronDown} from "lucide-react";

const Header: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <div>
            <span>
              <Image
              src= "/assets/images/book.svg"
              alt="book"
              width={35}
              height={35}
              className=" m-2"
              />
            </span>
          </div>
          <Link href="/" className="text-2xl font-bol">
            EduPress
          </Link>
        </div>

        <nav className="hidden md:flex flex-1 justify-center space-x-8 font-medium">
          <Link href="/" className="hover:text-orange-500 transition focus:outline-none focus:bg-gray-100 focus:px-2 focus:py-1 focus:rounded">
            Home
          </Link>
          <Link href="/courses" className="hover:text-orange-500 transition focus:outline-none focus:bg-gray-100 focus:px-2 focus:py-1 focus:rounded">
            Courses
          </Link>
          <Link href="/blog" className="hover:text-orange-500 transition focus:outline-none focus:bg-gray-100 focus:px-2 focus:py-1 focus:rounded">
            Blog
          </Link>
          
          
          <div className="relative group">
            <Link href="/about" className="hover:text-orange-500 transition focus:outline-none focus:bg-gray-100 focus:px-2 focus:py-1 focus:rounded flex items-center">
              Page
              <ChevronDown size={16} className="ml-1" />
            </Link>
          </div>
          
          <Link href="/premium" className="hover:text-orange-500 transition focus:outline-none focus:bg-gray-100 focus:px-2 focus:py-1 focus:rounded">
            Premium Theme
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
            <Link
            href="/login"
            className="text-gray-600 hover:text-orange-500 transition font-medium focus:outline-none focus:bg-gray-100 focus:px-3 focus:py-1 focus:rounded"
          >
            Login / Register
          </Link>
          <button className="relative p-2 hover:text-orange-500 transition focus:outline-none focus:bg-gray-100 focus:rounded-full">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
              <Search size={24} />
            </div>
          </button>
        </div>

        <button
          onClick={() => setSidebarOpen(true)}
          className="md:hidden p-2"
        >
          <Menu size={28} />
        </button>
      </div>

      <aside
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >

        <div className="flex justify-between items-center p-4 border-b">
          <span className="text-xl font-bold text-orange-500">EduPress</span>
          <button onClick={() => setSidebarOpen(false)} className="focus:outline-none focus:bg-gray-100 focus:rounded">
            <X size={24} />
          </button>
        </div>

        <nav className="flex flex-col p-4 space-y-4">
          <Link href="/" onClick={() => setSidebarOpen(false)} className="hover:text-orange-500 transition focus:outline-none focus:bg-gray-100 focus:px-3 focus:py-2 focus:rounded">
            Home
          </Link>
          <Link href="/courses" onClick={() => setSidebarOpen(false)} className="hover:text-orange-500 transition focus:outline-none focus:bg-gray-100 focus:px-3 focus:py-2 focus:rounded">
            Courses
          </Link>
          <Link href="/blog" onClick={() => setSidebarOpen(false)} className="hover:text-orange-500 transition focus:outline-none focus:bg-gray-100 focus:px-3 focus:py-2 focus:rounded">
            Blog
          </Link>
          
          <div className="flex items-center">
            <Link href="/about" onClick={() => setSidebarOpen(false)} className="hover:text-orange-500 transition focus:outline-none focus:bg-gray-100 focus:px-3 focus:py-2 focus:rounded flex items-center">
              Page
              <ChevronDown size={16} className="ml-1" />
            </Link>
          </div>
          
          <Link href="/premium" onClick={() => setSidebarOpen(false)} className="hover:text-orange-500 transition focus:outline-none focus:bg-gray-100 focus:px-3 focus:py-2 focus:rounded">
            Premium
          </Link>
          <Link
            href="/login"
            onClick={() => setSidebarOpen(false)}
            className="text-gray-600 hover:text-orange-500 transition focus:outline-none focus:bg-gray-100 focus:px-3 focus:py-2 focus:rounded"
          >
            Login / Register
          </Link>
        </nav>
      </aside>
    </header>
  );
};

export default Header;