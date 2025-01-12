import React from 'react';

const PropertyCard = ({ property }) => {
  const { status, title, price, description, image } = property;

  return (
    <div className="bg-white  overflow-hidden ">
      {/* Image Container */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover"
        />
        {/* Status Badge */}
        <div className="absolute top-0 left-0">
          <div className="relative bg-[#8B1C3D] text-white py-1.5 px-8 translate-y-3">
            {status}
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Title */}
        <h2 className="text-blue-900 text-2xl font-bold mb-2">{title}</h2>

        {/* Price */}
        <div className="text-lg  text-navy-900">
          เริ่มต้นที่ {price} ล้านบาท
        </div>

        <div className="hidden md:block relative h-0.5 my-7 bg-black/30 rounded-full" />


        {/* Description */}
        <p className="text-gray-500 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};



export default PropertyCard;