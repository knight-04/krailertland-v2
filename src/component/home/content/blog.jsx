import React from 'react';

const HeroSection = ({id}) => {
  return (
    <>
    <link href="https://fonts.googleapis.com/css2?family=Birthstone&display=swap" rel="stylesheet"/>
      
      <section id={id}>
        <div className="min-h-[30rem] bg-[#544D44] flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-white font-bold text-2xl mb-4">
            รู้จัก ไกรเลิศ
          </h2>

          <h1 className="text-white font-light text-4xl md:text-7xl mb-6" style={{ fontFamily: "'Birthstone', cursive" }}>
            Home is where the Heart is
          </h1>

          <p className="text-white font-light text-lg mb-8 max-w-2xl">
            "บ้านให้ความสุข" เพราะเราเชื่อว่าจุดเริ่มต้นสำคัญของความสุขคือครอบครัว และบ้านคือจุดเริ่มต้นของการสร้างครอบครัว
          </p>

          {/* <button className="px-8 py-3 border border-white text-white rounded-full hover:bg-white hover:text-neutral-800 transition-colors duration-300">
            ดูเพิ่มเติม
          </button> */}
        </div>
      </section>
    </>
  );
};

export default HeroSection;