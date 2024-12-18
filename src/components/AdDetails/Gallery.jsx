import React, { useState } from "react";
import AdOne from "../../assets/adone.jpg";
import AdTwo from "../../assets/adtwo.png";

const Gallery = () => {
  const images = [AdOne, AdTwo, AdOne, AdTwo];
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextImage = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="pt-6 pb-4 px-2 md:px-3">
      {/* Main Picture */}
      <div className="flex justify-center xl:max-h-96 max-h-[50vh] min-h-28 mb-4">
        <img
          src={images[activeIndex]}
          alt="Ad image"
          className="rounded-lg object-contain cursor-pointer max-w-full max-h-[50vh] md:max-h-80"
          onClick={() => setIsModalOpen(true)}
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

      {/* Fullscreen Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50">
          {/* Close and Zoom Buttons */}
          <div className="absolute top-4 right-4 flex gap-2">
            <button
              onClick={closeModal}
              className="text-white text-2xl font-bold bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center"
            >
              ✕
            </button>
            <button
              className="text-white text-2xl font-bold bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center"
              onClick={() => alert("Zoom functionality not implemented")}
            >
              🔍
            </button>
          </div>

          {/* Image Navigation */}
          <div className="relative flex items-center justify-center w-full h-full px-4">
            <button
              onClick={prevImage}
              className="absolute left-4 text-white text-3xl bg-gray-800 bg-opacity-50 p-3 rounded-full hover:bg-opacity-80"
            >
              ◀
            </button>

            <img
              src={images[activeIndex]}
              alt="Full screen"
              className="max-h-[90vh] max-w-full object-contain"
            />

            <button
              onClick={nextImage}
              className="absolute right-4 text-white text-3xl bg-gray-800 bg-opacity-50 p-3 rounded-full hover:bg-opacity-80"
            >
              ▶
            </button>
          </div>

          {/* Current Image Number */}
          <div className="absolute top-4 left-4 text-white text-lg bg-gray-800 px-3 py-1 rounded-md">
            {activeIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
