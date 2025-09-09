'use client';

import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-300 text-black py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">EduPress</h3>
            <p className="text-gray-600">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.sapiente temporibus placeat voluptate delectus assumenda enim odio esse consequatur quis soluta! Sed saepe magni magnam.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">GET HELP</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-600 hover:text-orange-500">Contact Us</Link></li>
              <li><Link href="/courses" className="text-gray-600 hover:text-orange-500">Latese Articles</Link></li>
              <li><Link href="/categories" className="text-gray-600 hover:text-orange-500">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">PROGRAMS</h4>
            <ul className="space-y-2">
              <li><Link href="/help" className="text-gray-600 hover:text-orange-500">Art & Design</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-orange-500">Business</Link></li>
              <li><Link href="/faq" className="text-gray-600 hover:text-orange-500">IT & Software</Link></li>
              <li><Link href="/terms" className="text-gray-600 hover:text-orange-500">Languages</Link></li>
              <li><Link href="/terms" className="text-gray-600 hover:text-orange-500">Programming</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">CONTACT US</h4>
            <p className="text-gray-600 mb-4">Address: 2321 New Design Str, Lorem Ipsum10 Hudson Yards, USA</p>
            <div className=" text-gray-600">
              <p>Tel: + (123) 2500-567-8988</p>
              <p>Mail: supportlms@gmail.com</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()}Copyright © 2024 LearnPress LMS | Powered by ThimPress.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;