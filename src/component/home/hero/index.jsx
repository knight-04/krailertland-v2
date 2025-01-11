import React, { useState, useEffect } from 'react';
// import SearchFields from './SearchBox/SearchFields';
import PromoteCard from './searchbox/branner';

const Hero = ({ id }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
        { url: '/image/Stock-Modern-House-In-Twilight-AdobeStock-368976934-copy.jpg', id: 1 },
        { url: '/image/pngtree-d-rendering-of-a-cozy-living-room-in-a-house-or-picture-image_5591775.jpg', id: 2 },
        { url: '/image/pngtree-d-rendering-of-a-scandinavian-farmhouse-living-room-with-classic-charm-image_13546375.png', id: 3}
    ];


    // Auto slide ทุก 5 วินาที
    useEffect(() => {
        console.log('Current Index:', currentImageIndex);
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [images.length]);

    // ฟังก์ชันสำหรับเปลี่ยนรูปด้วยปุ่ม
    // const goToSlide = (index) => {
    //     setCurrentImageIndex(index);
    // };

    // const nextSlide = () => {
    //     setCurrentImageIndex((prevIndex) =>
    //         prevIndex === images.length - 1 ? 0 : prevIndex + 1
    //     );
    // };

    // const prevSlide = () => {
    //     setCurrentImageIndex((prevIndex) =>
    //         prevIndex === 0 ? images.length - 1 : prevIndex - 1
    //     );
    // };

    return (
        <section id={id}>
            <div className="relative h-[600px]"> {/* กำหนดความสูงตายตัว */}
                {/* Carousel Container */}
                <div className="absolute inset-0">
                    {images.map((image, index) => (
                        <div
                            key={image.id}
                            className={` absolute inset-0 transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                                }`}
                            style={{
                                backgroundImage: `url(${image.url})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                            }}
                        />
                    ))}
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
                </div>

                {/* Navigation Arrows */}
                {/* <button
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 text-white hover:bg-black/30 p-2  transition-colors"
                    onClick={prevSlide}
                >
                    ❮
                </button>
                <button
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 text-white hover:bg-black/30 p-2  transition-colors"
                    onClick={nextSlide}
                >
                    ❯
                </button> */}

                {/* Dots Navigation */}
                {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            className={`w-3 h-3 rounded-full transition-colors ${index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                                }`}
                            onClick={() => goToSlide(index)}
                        />
                    ))}
                </div> */}

                {/* Content */}
                <div className="relative h-full flex flex-col justify-center">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="md:text-5xl text-3xl font-bold text-white md:m-5 flex justify-center items-center">
                            <span>Find Your</span>
                            {/* Animated Words Container */}
                            <div className="relative mx-4 overflow-hidden">
                                {/* First Word */}
                                <span className="inline-block animate-word-slide">
                                    Perfect Home
                                </span>
                                {/* Second Word */}
                                <span className="absolute top-0 left-0 animate-word-slide-next">
                                    Dream Home
                                </span>
                            </div>
                        </h1>

                        <p className="text-white md:text-sm text-xs md:mb-10 my-5 max-w-3xl mx-auto">
                            เราจะช่วยคุณค้นหาบ้านที่ดีที่สุดให้คุณ
                            มาค้นหาบ้านในฝันของคุณกันเถอะ!
                        </p>

                        {/* <div className="bg-white px-10 py-4 max-w-4xl mx-auto md:rounded-full rounded-lg ">
                            <SearchFields />
                        </div> */}
                        <PromoteCard />
                    </div>
                </div>
            </div>
            
        </section>

    );
};

export default Hero;