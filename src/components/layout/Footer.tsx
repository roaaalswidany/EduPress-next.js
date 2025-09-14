'use client';

import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-black py-12">
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
            <div className="text-gray-600 mb-6">
              <p>Tel: + (123) 2500-567-8988</p>
              <p>Mail: supportlms@gmail.com</p>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors cursor-pointer">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors cursor-pointer">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors cursor-pointer">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors cursor-pointer">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors cursor-pointer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-600">
          <p>Copyright © 2024 LearnPress LMS | Powered by ThimPress.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;