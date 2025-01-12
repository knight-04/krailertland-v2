import { Facebook, MessageCircle, Instagram } from 'lucide-react';
import React from 'react';

const Footer = () => {
  return (
    <div className="bg-[#2B3B75] text-white py-10 text-center font-sans">
      <div className="mb-5">
        <h1 className="text-2xl font-bold mb-5">KRAILERT</h1>
        <p className="mb-2">ถนนสาธุประดิษฐ์ แขวงช่องนนทรี เขตยานนาวา กรุงเทพมหานคร 10120</p>
        <p className="mb-5">095-564-9495, 088-838-1565</p>
      </div>
      <div className="flex justify-center gap-6">
        <a href="#" className="text-white hover:text-gray-200">
          <Facebook size={24} />
        </a>
        <a href="#" className="text-white hover:text-gray-200">
          <MessageCircle size={24} />
        </a>
        <a href="#" className="text-white hover:text-gray-200">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M21 8v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5Z"/>
            <path d="m10 15 5-5"/>
            <path d="m10 10 5 5"/>
          </svg>
        </a>
        <a href="#" className="text-white hover:text-gray-200">
          <Instagram size={24} />
        </a>
      </div>
    </div>
  );
};

export default Footer;