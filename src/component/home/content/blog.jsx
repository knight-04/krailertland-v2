import React from 'react';

const HeroSection = () => {
  return (
    <div className="min-h-[30rem] bg-neutral-700 flex flex-col items-center justify-center text-center px-4">
      <h2 className="text-white font-bold text-2xl mb-4">
        รู้จัก ไกรเลิศ
      </h2>

      <h1 className="text-white font-light italic text-4xl md:text-5xl lg:text-6xl mb-6 corinthia-regular">
        Home is where ther Heart is
      </h1>

      <p className="text-white font-light text-lg mb-8 max-w-2xl">
        "บ้านให้ความสุข" เพราะเราเชื่อว่าจุดเริ่มต้นสำคัญของความสุขคือครอบครัว และบ้านคือจุดเริ่มต้นของการสร้างครอบครัว
      </p>

      {/* <button className="px-8 py-3 border border-white text-white rounded-full hover:bg-white hover:text-neutral-800 transition-colors duration-300">
        ดูเพิ่มเติม
      </button> */}
    </div>
  );
};

export default HeroSection;