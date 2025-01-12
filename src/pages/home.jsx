import React from 'react';
import Navbar from '../component/layout/navbar';
import Hero from '../component/home/hero';
import FeaturedProperties from '../component/home/hero/properties/featureproperty';
import FeatueredLocations from '../component/home/hero/properties/featurelocation';
import Footer from '../component/layout/footer/contact';
import ScrollToTop from '../component/home/scroll/scrolltotop';
import Timeline from '../component/home/scroll/scrolltimeline';
import Blog from '../component/home/content/blog';
import RegistrationForm from '../component/layout/navbar/modal/register'
import { SearchProvider } from '../component/contexts/searchcontext';

const HomePage = () => {
  return (
    <div className="relative min-h-screen">
      <div className="absolute bg-blue-100" />
      <SearchProvider>
        <Navbar />
        <Blog id="blog" />
        <FeaturedProperties id="properties" />
        <RegistrationForm />
        <ScrollToTop />
        <Footer />
      </SearchProvider>
    </div>
  );
};

export default HomePage;