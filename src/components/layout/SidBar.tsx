"use client";

import React, { useState } from "react";
import { X, Menu } from "lucide-react";
import Link from "next/link";

const Sidebar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile button */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded shadow"
      >
        <Menu size={24} />
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <span className="text-xl font-bold text-orange-500">EduPress</span>
          <button onClick={() => setOpen(false)}>
            <X size={24} />
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-4">
          <Link href="/" className="hover:text-orange-500">
            Home
          </Link>
          <Link href="/courses" className="hover:text-orange-500">
            Courses
          </Link>
          <Link href="/blog" className="hover:text-orange-500">
            Blog
          </Link>
          <Link href="/about" className="hover:text-orange-500">
            About Us
          </Link>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;