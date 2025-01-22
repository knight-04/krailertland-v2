import React, { useState } from 'react';

const RegistrationForm = ({ id }) => {
  const [formData, setFormData] = useState({
    email: '',
    lastName: '',
    firstName: '',
    phone: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const GOOGLE_SCRIPTS_URL = 'https://script.google.com/macros/s/AKfycbyLEJRc_E4pCB91Xm13doCQEsS3-hKCbYMft23W2LWmYkBKQMjn_KJCe0CgopYLW6o/exec';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      // ใช้เฉพาะ GET method
      const urlParams = new URLSearchParams({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone
      }).toString();

      const finalUrl = `${GOOGLE_SCRIPTS_URL}?${urlParams}`;
      
      await fetch(finalUrl, {
        method: 'GET',
        mode: 'no-cors',
      });

      // เมื่อส่งข้อมูลสำเร็จ
      setIsSuccess(true);
      setFormData({
        email: '',
        lastName: '',
        firstName: '',
        phone: ''
      });
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('เกิดข้อผิดพลาดในการส่งข้อมูล กรุณาลองใหม่อีกครั้ง');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id={id}>
      <div className="w-full bg-[#1B2848]">
        <div className="w-full max-w-2xl mx-auto p-6 bg-[#1B2848]">
          <h1 className="text-xl font-bold text-white mb-6 text-center">
            ลงทะเบียนรับข้อมูลเพิ่มเติม
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="กรุณากรอกชื่อของท่าน"
                required
                className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2"
              />

              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="กรุณากรอกนามสกุลของท่าน"
                required
                className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="กรุณากรอกอีเมลของท่าน"
                required
                className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2"
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="กรุณากรอกเบอร์โทรศัพท์ของท่าน"
                required
                className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2"
              />
            </div>

            {error && (
              <div className="text-red-500 text-center">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 px-8 rounded-lg bg-white text-gray-800 font-medium hover:bg-gray-100 focus:ring-2 transition-all duration-300 transform hover:scale-110 text-lg hover:text-white hover:border hover:bg-transparent disabled:bg-gray-400 disabled:hover:scale-100 disabled:hover:bg-gray-400 disabled:hover:text-gray-800"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-gray-800 mr-2"></div>
                  กำลังดำเนินการ...
                </div>
              ) : (
                'ลงทะเบียนรับข้อมูล'
              )}
            </button>

            {isSuccess && (
              <div className="flex items-center text-green-500 justify-center mt-4">
                <svg
                  className="w-6 h-6 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                ลงทะเบียนรับข้อมูลสำเร็จ
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;