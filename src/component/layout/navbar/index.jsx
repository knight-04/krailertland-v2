import React, { useState, useEffect } from 'react';
import { Menu, Search, ChevronDown } from 'lucide-react';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { url: '/image/Stock-Modern-House-In-Twilight-AdobeStock-368976934-copy.jpg', id: 1 },
    { url: '/image/pngtree-d-rendering-of-a-cozy-living-room-in-a-house-or-picture-image_5591775.jpg', id: 2 },
    { url: '/image/pngtree-d-rendering-of-a-scandinavian-farmhouse-living-room-with-classic-charm-image_13546375.png', id: 3 }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
        }`}>
        {!isScrolled ? (
          // Vertical layout before scroll
          <div className="container mx-auto px-6">
            <div className="flex flex-col items-center pt-8">
              {/* Logo */}
              <div className="flex flex-col items-center mb-6">
                <svg viewBox="0 0 50 50" className="h-8 w-8 text-white">
                  <path
                    d="M10 25 L25 10 L40 25 L25 40 Z"
                    fill="currentColor"
                  />
                </svg>
                <span className="text-white text-sm tracking-wider mt-2">
                  KRAI LERT
                </span>
              </div>

              {/* Menu Items */}
              <div className="hidden md:flex items-center space-x-12">
                <a href="#" className="text-sm tracking-wider text-white hover:text-gray-200">
                  ABOUT US
                </a>
                <a href="#" className="text-sm tracking-wider text-white hover:text-gray-200">
                  OUR PROJECTS
                </a>
                <a href="#" className="text-sm tracking-wider text-white hover:text-gray-200">
                  RML NEWS
                </a>
              </div>
            </div>

            {/* Actions - Fixed to top right */}
            <div className="absolute top-8 right-6 flex items-center space-x-6">
              <button className="text-white hover:text-gray-200">
                <Search className="h-4 w-4" />
              </button>
              <div className="flex items-center space-x-1">
                <span className="text-sm tracking-wider text-white">
                  EN
                </span>
                <ChevronDown className="h-3 w-3 text-white" />
              </div>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-gray-200"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        ) : (
          // Horizontal layout after scroll
          <div className="container mx-auto px-6">
            <div className="h-16 flex justify-between items-center">
              {/* Left: Logo */}
              <div className="flex items-center space-x-2">
                <svg viewBox="0 0 50 50" className="h-6 w-6 text-blue-900">
                  <path
                    d="M10 25 L25 10 L40 25 L25 40 Z"
                    fill="currentColor"
                  />
                </svg>
                <span className="text-sm tracking-wider text-blue-900">
                  KRAILERT LAND
                </span>
              </div>

              {/* Center: Menu Items */}
              <div className="hidden md:flex items-center space-x-12">
                <a href="#" className="text-sm tracking-wider text-blue-900 hover:text-blue-700">
                  ABOUT US
                </a>
                <a href="#" className="text-sm tracking-wider text-blue-900 hover:text-blue-700">
                  OUR PROJECTS
                </a>
                <a href="#" className="text-sm tracking-wider text-blue-900 hover:text-blue-700">
                  RML NEWS
                </a>
              </div>

              {/* Right: Actions */}
              <div className="flex items-center space-x-6">
                <button className="text-blue-900 hover:text-blue-700">
                  <Search className="h-4 w-4" />
                </button>
                <div className="flex items-center space-x-1">
                  <span className="text-sm tracking-wider text-blue-900">
                    EN
                  </span>
                  <ChevronDown className="h-3 w-3 text-blue-900" />
                </div>
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-blue-900 hover:text-blue-700"
                >
                  <Menu className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden ${isScrolled ? 'bg-white' : 'bg-black bg-opacity-90'
            }`}>
            <div className="px-4 py-6 space-y-4">
              <a href="#" className={`block text-sm tracking-wider ${isScrolled ? 'text-blue-900' : 'text-white'
                }`}>ABOUT US</a>
              <a href="#" className={`block text-sm tracking-wider ${isScrolled ? 'text-blue-900' : 'text-white'
                }`}>OUR PROJECTS</a>
              <a href="#" className={`block text-sm tracking-wider ${isScrolled ? 'text-blue-900' : 'text-white'
                }`}>RML NEWS</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden">
        {/* Image Carousel */}
        <div className="relative h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transform transition-transform duration-1000 ease-out ${index === currentSlide
                ? 'translate-x-0'
                : index < currentSlide
                  ? '-translate-x-full'
                  : 'translate-x-full'
                }`}
            >
              <img
                src={slide.url}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${currentSlide === index ? 'bg-white' : 'bg-white/50'
                }`}
            />
          ))}
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30 ">
          <div className="h-full flex items-center justify-center text-center">
            <div className='mt-80'>
              <h1 className="text-7xl text-white font-light tracking-wider mb-2">
                LUXURY
              </h1>
              <p className="text-3xl text-white italic font-light tracking-wider">
                Reimagined
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional content will go here */}
    </div>
  );
};

export default LandingPage;