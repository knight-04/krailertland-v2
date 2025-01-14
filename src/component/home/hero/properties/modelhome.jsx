import { BedDouble, CarFront, CookingPot, Fence, LucideHouse, ShowerHead } from 'lucide-react';
import React, { useState } from 'react';

const HouseDetails = ({ id }) => {
  const [activeTab, setActiveTab] = useState('single');

  const houseData = {
    single: {
      title: 'King บ้านเดี่ยว 2 ชั้น',
      features: [
        {
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full" strokeWidth="1.5">
              <BedDouble />
            </svg>
          ), label: '4 ห้องนอน'
        },
        {
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full" strokeWidth="1.5">
              <ShowerHead />
            </svg>
          ), label: '3 ห้องน้ำ'
        },
        {
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full" strokeWidth="1.5">
              <CarFront />
            </svg>
          ), label: '2 ที่จอดรถ'
        },
        {
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full" strokeWidth="1.5">
              <CookingPot />
            </svg>
          ), label: '1 ห้องครัว'
        },
        {
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full" strokeWidth="1.5">
              <Fence />
            </svg>
          ), label: 'เนื้อที่ 57 - 75 ตร.ว.'
        },
        {
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full" strokeWidth="1.5">
              <LucideHouse />
            </svg>
          ), label: 'พื้นที่ใช้สอย 170 ตร.ม.'
        }
      ],
      price: '2.49 ล้านบาท',
      house1: [
        { url: '/images/4 โครงการที่ดำเนินการอยู่/hampton/บ้านเดี่ยว 2 ชั้น KING/King.jpg', id: 0 },
        { url: '/images/4 โครงการที่ดำเนินการอยู่/hampton/10.jpg', id: 1 },
        { url: '/images/4 โครงการที่ดำเนินการอยู่/hampton/11.jpg', id: 2 },
        { url: '/images/4 โครงการที่ดำเนินการอยู่/hampton/12.jpg', id: 3 },
        { url: '/images/4 โครงการที่ดำเนินการอยู่/hampton/13.jpg', id: 4 },
        { url: '/images/4 โครงการที่ดำเนินการอยู่/hampton/14.jpg', id: 5 },


      ],
      house2: [
        { url: '/images/4 โครงการที่ดำเนินการอยู่/hampton/15.jpg', id: 0 },
        { url: '/images/4 โครงการที่ดำเนินการอยู่/hampton/17.jpg', id: 1 },
        { url: '/images/4 โครงการที่ดำเนินการอยู่/hampton/18.jpg', id: 2 },
        { url: '/images/4 โครงการที่ดำเนินการอยู่/hampton/แปลน.1.jpg', id: 3 },


      ],
      plan: [
        { url: '/images/4 โครงการที่ดำเนินการอยู่/hampton/บ้านเดี่ยว 2 ชั้น KING/King1.jpg', id: 2 },
        { url: '/images/4 โครงการที่ดำเนินการอยู่/hampton/บ้านเดี่ยว 2 ชั้น KING/King2.jpg', id: 3 }
      ]
    },
    double: {
      title: 'Queen บ้านแฝด 2 ชั้น',
      features: [
        {
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full" strokeWidth="1.5">
              <BedDouble />
            </svg>
          ), label: '4 ห้องนอน'
        },
        {
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full" strokeWidth="1.5">
              <ShowerHead />
            </svg>
          ), label: '3 ห้องน้ำ'
        },
        {
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full" strokeWidth="1.5">
              <CarFront />
            </svg>
          ), label: '2 ที่จอดรถ'
        },
        {
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full" strokeWidth="1.5">
              <CookingPot />
            </svg>
          ), label: '1 ห้องครัว'
        },
        {
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full" strokeWidth="1.5">
              <Fence />
            </svg>
          ), label: 'เนื้อที่ 44 - 74 ตร.ว.'
        },
        {
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full" strokeWidth="1.5">
              <LucideHouse />
            </svg>
          ), label: 'พื้นที่ใช้สอย 160 ตร.ม.'
        }
      ],
      price: '3.29 ล้านบาท',
      house1: [
        { url: '/images/4 โครงการที่ดำเนินการอยู่/hampton/บ้านแฝด 2 ชั้น QUEEN/Queen.jpg', id: 0 },
        { url: '/images/4 โครงการที่ดำเนินการอยู่/hampton/10.jpg', id: 1 },
        { url: '/images/4 โครงการที่ดำเนินการอยู่/hampton/11.jpg', id: 2 },
        { url: '/images/4 โครงการที่ดำเนินการอยู่/hampton/12.jpg', id: 3 },
        { url: '/images/4 โครงการที่ดำเนินการอยู่/hampton/13.jpg', id: 4 },
        { url: '/images/4 โครงการที่ดำเนินการอยู่/hampton/14.jpg', id: 5 },


      ],
      house2: [
        { url: '/images/4 โครงการที่ดำเนินการอยู่/hampton/15.jpg', id: 0 },
        { url: '/images/4 โครงการที่ดำเนินการอยู่/hampton/17.jpg', id: 1 },
        { url: '/images/4 โครงการที่ดำเนินการอยู่/hampton/18.jpg', id: 2 },
        { url: '/images/4 โครงการที่ดำเนินการอยู่/hampton/แปลน.1.jpg', id: 3 },


      ],
      plan: [
        { url: '/images/4 โครงการที่ดำเนินการอยู่/hampton/บ้านแฝด 2 ชั้น QUEEN/Queen1.jpg', id: 2 },
        { url: '/images/4 โครงการที่ดำเนินการอยู่/hampton/บ้านแฝด 2 ชั้น QUEEN/Queen2.jpg', id: 3 }
      ]
    }
  };

  const currentHouse = houseData[activeTab];

  return (
    <section id={id}>
      <div className="max-w-full mx-auto p-4 bg-white">
        {/* Tabs */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <button
            onClick={() => setActiveTab('single')}
            className={`px-6 py-2 rounded-lg text-xs md:text-lg font-medium transition-colors duration-200
          ${activeTab === 'single'
                ? 'bg-[#00155E] text-white'
                : 'bg-stone-200 text-gray-700 hover:bg-[#00155E] hover:text-white'}`}
          >
            King บ้านเดี่ยว 2 ชั้น
          </button>
          <button
            onClick={() => setActiveTab('double')}
            className={`px-6 py-3 rounded-lg text-xs md:text-lg font-medium transition-colors duration-200
          ${activeTab === 'double'
                ? 'bg-[#00155E] text-white'
                : 'bg-stone-200 text-gray-700 hover:bg-[#00155E] hover:text-white'}`}
          >
            Queen บ้านแฝด 2 ชั้น
          </button>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          {/* Left Column - House Features */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="flex justify-center text-lg md:text-2xl font-medium text-[#00155E] my-3">
                {currentHouse.title}
              </h2>
              <p className="flex justify-center text-sm md:text-xl text-gray-600 ">ฟังก์ชั่นของบ้าน</p>
            </div>

            <div className="relative max-w-xs md:max-w-sm mx-auto ">
              {/* Center vertical line */}
              <div className="absolute left-1/2 w-px bg-gray-300 -translate-x-1/2 h-52 top-24"></div>

              {/* Center bedroom icon and text */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 mb-2 text-gray-700">
                  {currentHouse.features[0].icon}
                </div>
                <span className="text-sm text-gray-700 font-medium">{currentHouse.features[0].label}</span>
              </div>

              {/* Middle row features */}
              <div className="grid grid-cols-2 gap-x-48 mt-3">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 mb-2 text-gray-700">
                    {currentHouse.features[1].icon}
                  </div>
                  <span className="text-sm text-gray-700 font-medium">
                    {currentHouse.features[1].label}</span>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 mb-2 text-gray-700">
                    {currentHouse.features[2].icon}
                  </div>
                  <span className="text-sm text-gray-700 font-medium">
                    {currentHouse.features[2].label}</span>
                </div>
              </div>

              {/* Bottom row features */}
              <div className="grid grid-cols-2 gap-x-48 mt-14">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 mb-2 text-gray-700">
                    {currentHouse.features[3].icon}
                  </div>
                  <span className="text-sm text-gray-700 text-center font-medium whitespace-nowrap">
                    {currentHouse.features[3].label}
                  </span>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 mb-2 text-gray-700">
                    {currentHouse.features[4].icon}
                  </div>
                  <span className="text-sm text-gray-700 text-center font-medium whitespace-nowrap">
                    {currentHouse.features[4].label}
                  </span>
                </div>
              </div>

              <div className="flex flex-col items-center mt-5">
                <div className="w-12 h-12 mb-2 text-gray-700">
                  {currentHouse.features[5].icon}
                </div>
                <span className="text-sm text-gray-700 font-medium">
                  {currentHouse.features[5].label}</span>
              </div>
            </div>
            {/* 
          <div className="flex justify-center text-lg font-medium text-gray-700">
            ราคาเริ่มต้น {currentHouse.price}
          </div> */}
          </div>

          {/* Right Column - Image Gallery */}
          <div className="md:col-span-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Left Column */}
              {/* Right Column - Image Gallery */}
              <div className="md:col-span-6 px-4 md:px-0">
                <div className="max-w-2xl mx-auto md:max-w-none">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Left Column */}
                    <div className="space-y-4">
                      {/* Large image at top */}
                      <div className="aspect-video w-full">
                        <img
                          src={currentHouse.house1?.[0]?.url}
                          alt="House exterior"
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                      {/* Two small images at bottom */}
                      <div className="grid grid-cols-2 gap-2 md:gap-4">
                        <div className="aspect-video w-full">
                          <img
                            src={currentHouse.house1?.[1]?.url}
                            alt="House interior"
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                        <div className="aspect-video w-full">
                          <img
                            src={currentHouse.house1?.[2]?.url}
                            alt="House interior"
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-4">
                      {/* Two small images at top */}
                      <div className="grid grid-cols-2 gap-2 md:gap-4">
                        <div className="aspect-video w-full">
                          <img
                            src={currentHouse.house1?.[3]?.url}
                            alt="House interior"
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                        <div className="aspect-video w-full">
                          <img
                            src={currentHouse.house1?.[4]?.url}
                            alt="House interior"
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                      </div>
                      {/* Large image at bottom */}
                      <div className="aspect-video w-full">
                        <img
                          src={currentHouse.house1?.[5]?.url}
                          alt="House interior"
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Buttom Column - Image Gallery */}
          <div className="md:col-span-9">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* Four equal-sized images in a row */}
              <div className="aspect-[3/2]">
                <img
                  src={currentHouse.house2?.[0]?.url}
                  alt="House detail 1"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="aspect-[3/2]">
                <img
                  src={currentHouse.house2?.[1]?.url}
                  alt="House detail 2"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="aspect-[3/2]">
                <img
                  src={currentHouse.house2?.[2]?.url}
                  alt="House detail 3"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="aspect-[3/2]">
                <img
                  src={currentHouse.house2?.[3]?.url}
                  alt="House detail 4"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto md:px-40">
          <div className="text-center my-10">
            <h2 className="text-lg md:text-2xl mb-10 text-[#00155E]">
              {activeTab == 'single' ? 'แปลนบ้าน King บ้านเดี่ยว 2 ชั้น' : 'แปลนบ้าน Queen บ้านแฝด 2 ชั้น'}
            </h2>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {/* Four equal-sized images in a row */}
            <div className="aspect-video">
              <img
                src={currentHouse.plan?.[0]?.url}
                alt="House detail 1"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="aspect-video">
              <img
                src={currentHouse.plan?.[1]?.url}
                alt="House detail 2"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default HouseDetails;