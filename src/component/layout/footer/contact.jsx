import { Facebook, MessageCircle, Instagram } from 'lucide-react';
import { AiOutlineTikTok } from "react-icons/ai";
import React from 'react';

const Footer = ({ id }) => {
  // Custom Line icon since it's not available in lucide-react
  const LineIcon = () => (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    >
      <rect x="2" y="2" width="20" height="20" rx="3" />
      <text
        x="12"
        y="12"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="currentColor"
        stroke="none"
        fontSize="6"
        fontWeight="bold"
      >
        LINE
      </text>
    </svg>
  );

  return (
    <section id={id}>
      <div className="bg-[#1B2848] text-white py-10 text-center font-sans">
        <div className="mb-5">
          <h1 className="text-2xl font-bold mb-5">KRAILERT</h1>
          <p className="mb-2">ถนนสาธุประดิษฐ์ แขวงช่องนนทรี เขตยานนาวา กรุงเทพมหานคร 10120</p>
          <p className="mb-5">095-564-9495, 088-838-1565</p>
        </div>
        <div className="flex justify-center gap-6">
          <a href="" className="text-white hover:text-gray-200 flex flex-col items-center">
            <Facebook size={24} />
          </a>
          <a href="" className="text-white hover:text-gray-200 flex flex-col items-center">
            <LineIcon />
          </a>
          <a href="" className="text-white hover:text-gray-200 flex flex-col items-center">
            <AiOutlineTikTok size={24} />
          </a>
          <a href="" className="text-white hover:text-gray-200 flex flex-col items-center">
            <Instagram size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;