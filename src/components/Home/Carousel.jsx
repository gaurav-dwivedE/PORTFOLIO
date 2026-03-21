import React, { useState, useEffect } from "react";


const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <ul
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <li key={index} className="w-full h-full flex-shrink-0">
            <div className="relative w-full h-full overflow-hidden rounded-lg flex items-center justify-center">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover m-auto block bg-white rounded-lg shadow-md"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

// VerticalCarousel component for vertical sliding
export const VerticalCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <ul
        className="flex flex-col transition-transform duration-500"
        style={{ transform: `translateY(-${currentIndex * 100}%)`, height: '100%' }}
      >
        {images.map((image, index) => (
          <li key={index} className="w-full h-full flex-shrink-0">
            <div className="relative w-full h-full overflow-hidden rounded-lg flex items-center justify-center">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover m-auto block bg-white rounded-lg shadow-md"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Example usage for the first image box:
// <Carousel images={[c1, c2, c3, c4]} />

// For other image boxes, you can use different sets, e.g.:
// <Carousel images={[c2, c3, c4, c1]} />
// <Carousel images={[c3, c4, c1, c2]} />

export default Carousel;
