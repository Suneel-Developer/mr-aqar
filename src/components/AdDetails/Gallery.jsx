import React, { useState, useEffect } from "react";
import AdOne from "../../assets/adone.jpg";
import AdTwo from "../../assets/adtwo.png";
import Lightbox from "react-18-image-lightbox";
import "react-18-image-lightbox/style.css";

const Gallery = () => {
  const images = [AdOne, AdTwo, AdOne, AdTwo];
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [showSpinner, setShowSpinner] = useState(true);

  const nextImage = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    setShowSpinner(true);
  };

  const prevImage = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    setShowSpinner(true);
  };

  useEffect(() => {
    if (isLightboxOpen) {
      const timer = setTimeout(() => {
        setShowSpinner(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isLightboxOpen, activeIndex]);

  return (
    <div className="pt-6 pb-4 px-2 md:px-3">
      {/* Main Picture */}
      <div className="flex justify-center xl:max-h-96 max-h-[50vh] min-h-28 mb-4">
        <img
          src={images[activeIndex]}
          alt="Ad image"
          className="rounded-lg object-contain cursor-pointer max-w-full max-h-[50vh] md:max-h-80"
          onClick={() => {
            setIsLightboxOpen(true);
            setShowSpinner(true);
          }}
        />
      </div>

      {/* Thumbnail Gallery */}
      <div className="flex justify-center gap-2 flex-wrap items-center">
        {images.map((image, index) => (
          <button
            key={index}
            className={`h-12 w-12 sm:h-16 sm:w-16 flex-shrink-0 rounded-md overflow-hidden p-[2px] ${
              activeIndex === index ? "border-2 border-[#3a7bb7]" : ""
            }`}
            onClick={() => setActiveIndex(index)}
          >
            <img
              src={image}
              alt={`Thumbnail ${index}`}
              className="w-full rounded-md h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {isLightboxOpen && (
        <Lightbox
          mainSrc={images[activeIndex]}
          nextSrc={images[(activeIndex + 1) % images.length]}
          prevSrc={images[(activeIndex - 1 + images.length) % images.length]}
          onCloseRequest={() => setIsLightboxOpen(false)}
          onMovePrevRequest={prevImage}
          onMoveNextRequest={nextImage}
          spinnerDisabled={!showSpinner}
        />
      )}
    </div>
  );
};

export default Gallery;
