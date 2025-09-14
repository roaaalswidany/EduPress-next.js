/* "use client";

import React, { useState } from "react";
import { X, ChevronDown, Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useSidebar } from "@/components/Context";

const Sidebar: React.FC = () => {
  const [pageOpen, setPageOpen] = useState(false);
  const { isSidebarOpen, closeSidebar } = useSidebar();

  if (!isSidebarOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
        onClick={closeSidebar}
      />
      
      <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 md:hidden">
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
          <button onClick={closeSidebar}>
            <X size={24} />
          </button>
        </div>

        <nav className="flex flex-col p-4">
          <Link
            href="/"
            className="px-4 py-3 text-orange-500 bg-orange-50 font-medium rounded-md mb-2"
            onClick={closeSidebar}
          >
            Home
          </Link>
          <Link
            href="/courses"
            className="px-4 py-3 hover:bg-gray-50 text-gray-800 font-medium rounded-md mb-2"
            onClick={closeSidebar}
          >
            Courses
          </Link>
          <Link
            href="/blog"
            className="px-4 py-3 hover:bg-gray-50 text-gray-800 font-medium rounded-md mb-2"
            onClick={closeSidebar}
          >
            Blog
          </Link>

          <button
            onClick={() => setPageOpen(!pageOpen)}
            className="px-4 py-3 flex items-center justify-between hover:bg-gray-50 text-gray-800 font-medium rounded-md mb-2"
          >
            Page
            <ChevronDown
              size={18}
              className={`transition-transform ${pageOpen ? "rotate-180" : ""}`}
            />
          </button>

          {pageOpen && (
            <div className="flex flex-col bg-gray-50 rounded-md mb-2 overflow-hidden">
              <Link
                href="/about"
                className="pl-8 pr-4 py-2 hover:bg-gray-100 text-gray-700 text-sm"
                onClick={closeSidebar}
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="pl-8 pr-4 py-2 hover:bg-gray-100 text-gray-700 text-sm"
                onClick={closeSidebar}
              >
                Contact
              </Link>
              <Link
                href="/faq"
                className="pl-8 pr-4 py-2 hover:bg-gray-100 text-gray-700 text-sm"
                onClick={closeSidebar}
              >
                FAQ
              </Link>
            </div>
          )}

          <Link
            href="/premium"
            className="px-4 py-3 hover:bg-gray-50 text-gray-800 font-medium rounded-md mb-2"
            onClick={closeSidebar}
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

export default Sidebar; */