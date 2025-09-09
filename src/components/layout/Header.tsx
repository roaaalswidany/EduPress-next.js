"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        
        <Link href="/" className="text-2xl font-bold text-orange-500">
          EduPress
        </Link>

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
          <Link href="/about" className="hover:text-orange-500 transition">
            Page
          </Link>
          <Link href="/premium" className="hover:text-orange-500 transition">
            Premium Theme
          </Link>
        </nav>

        <div className="hidden md:block">
          <Link
            href="/login"
            className="text-gray-600 hover:text-orange-500 transition font-medium"
          >
            Login / Register
          </Link>
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
          <button onClick={() => setSidebarOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <nav className="flex flex-col p-4 space-y-4">
          <Link href="/" onClick={() => setSidebarOpen(false)} className="hover:text-orange-500">
            Home
          </Link>
          <Link href="/courses" onClick={() => setSidebarOpen(false)} className="hover:text-orange-500">
            Courses
          </Link>
          <Link href="/blog" onClick={() => setSidebarOpen(false)} className="hover:text-orange-500">
            Blog
          </Link>
          <Link href="/about" onClick={() => setSidebarOpen(false)} className="hover:text-orange-500">
            About
          </Link>
          <Link href="/premium" onClick={() => setSidebarOpen(false)} className="hover:text-orange-500">
            Premium
          </Link>
          <Link
              href="/login"
              className="text-gray-600 hover:text-orange-500 transition"
            >
              Login / Register
            </Link>
        </nav>
      </aside>
    </header>
  );
};

export default Header;