"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, Search, ChevronDown } from "lucide-react";

const Header: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [desktopPageOpen, setDesktopPageOpen] = useState(false);
  const [mobilePageOpen, setMobilePageOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/assets/images/book.svg"
              alt="book"
              width={35}
              height={35}
              className="m-2"
            />
            <Link href="/" className="text-2xl font-bold">
              EduPress
            </Link>
          </div>

          <nav className="hidden md:flex flex-1 justify-center space-x-8 font-medium">
            <Link href="/" className="hover:text-orange-500 transition">
              Home
            </Link>
            <Link href="/courses" className="hover:text-orange-500 transition">
              Courses
            </Link>
            <Link href="/blog" className="hover:text-orange-500 transition">
              Blog
            </Link>
            
            <div className="relative">
              <button 
                onClick={() => setDesktopPageOpen(!desktopPageOpen)}
                className="hover:text-orange-500 transition flex items-center"
              >
                Page
                <ChevronDown size={16} className="ml-1" />
              </button>
              
              {desktopPageOpen && (
                <div className="absolute top-full left-0 mt-2 w-40 bg-white shadow-lg rounded-md py-2 z-50">
                  <Link href="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    About Us
                  </Link>
                  <Link href="/contact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Contact
                  </Link>
                  <Link href="/faq" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    FAQ
                  </Link>
                </div>
              )}
            </div>
            
            <Link href="/premium" className="hover:text-orange-500 transition">
              Premium Theme
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/login"
              className="text-gray-600 hover:text-orange-500 transition font-medium"
            >
              Login / Register
            </Link>
            <button className="p-2 hover:text-orange-500 transition">
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
      </header>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-opacity-40 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
      
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex justify-between items-center p-4 border-b">

<div className="flex items-center">
            <Image
              src="/assets/images/book.svg"
              alt="book"
              width={32}
              height={32}
              className="mr-2"
            />
            <span className="text-xl font-bold">EduPress</span>
          </div>
          <button onClick={() => setSidebarOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <nav className="flex flex-col p-4">
          <Link
            href="/"
            className="px-4 py-3 text-orange-500 bg-orange-50 font-medium rounded-md mb-2"
            onClick={() => setSidebarOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/courses"
            className="px-4 py-3 hover:bg-gray-50 text-gray-800 font-medium rounded-md mb-2"
            onClick={() => setSidebarOpen(false)}
          >
            Courses
          </Link>
          <Link
            href="/blog"
            className="px-4 py-3 hover:bg-gray-50 text-gray-800 font-medium rounded-md mb-2"
            onClick={() => setSidebarOpen(false)}
          >
            Blog
          </Link>

          <button
            onClick={() => setMobilePageOpen(!mobilePageOpen)}
            className="px-4 py-3 flex items-center justify-between hover:bg-gray-50 text-gray-800 font-medium rounded-md mb-2"
          >
            Page
            <ChevronDown
              size={18}
              className={`transition-transform ${mobilePageOpen ? "rotate-180" : ""}`}
            />
          </button>

          {mobilePageOpen && (
            <div className="flex flex-col bg-gray-50 rounded-md mb-2 overflow-hidden">
              <Link
                href="/about"
                className="pl-8 pr-4 py-2 hover:bg-gray-100 text-gray-700 text-sm"
                onClick={() => setSidebarOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="pl-8 pr-4 py-2 hover:bg-gray-100 text-gray-700 text-sm"
                onClick={() => setSidebarOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/faq"
                className="pl-8 pr-4 py-2 hover:bg-gray-100 text-gray-700 text-sm"
                onClick={() => setSidebarOpen(false)}
              >
                FAQ
              </Link>
            </div>
          )}

          <Link
            href="/premium"
            className="px-4 py-3 hover:bg-gray-50 text-gray-800 font-medium rounded-md mb-2"
            onClick={() => setSidebarOpen(false)}
          >
            Premium Theme
          </Link>
        </nav>

        <div className="px-4 mt-4">
          <div className="relative">
            <Search
              size={18}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full text-sm"
            />
          </div>
        </div>

        <div className="px-4 mt-6">
          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 rounded-full transition">
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;