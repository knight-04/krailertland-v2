import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    lastName: '',
    firstName: '',
    phone: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className='w-full bg-slate-900'>
      <div className="w-full max-w-2xl mx-auto p-6 bg-slate-900">
        <h1 className="text-2xl font-bold text-white mb-6 text-center">
          ลงทะเบียนรับข้อมูลเพิ่มเติม
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* First Input Row */}
            <input
              type="text"
              placeholder="กรุณากรอกชื่อของท่าน"
              className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 "
            />

            <input
              type="text"
              placeholder="กรุณากรอกนามสกุลของท่าน"
              className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 "
            />

            {/* Second Input Row */}
            <input
              type="email"
              placeholder="กรุณากรอกอีเมลของท่าน"
              className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 "
            />

            <input
              type="tel"
              placeholder="กรุณากรอกเบอร์โทรศัพท์ของท่าน"
              className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 "
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 px-8 rounded-lg bg-white text-gray-800 font-medium hover:bg-gray-100  focus:ring-2 transition-all duration-300 transform hover:scale-110 text-lg hover:text-white hover:border hover:bg-transparent"
          >
            ลงทะเบียนรับข้อมูล
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;