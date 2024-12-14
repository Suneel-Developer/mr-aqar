import React, { useState } from 'react';
import 'react-image-lightbox/style.css'; // Import the default styles
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import AdOne from "../../assets/adone.jpg";
import AdTwo from "../../assets/adtwo.png";

const Gallery = () => {
    const images = [
        AdOne,
        AdTwo,
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="pt-12 pb-6 px-3">
            {/* Main Picture */}
            <div className="flex justify-center xl:max-h-96 max-h-[67vh] min-h-28 mb-4">
                <img
                    src={images[activeIndex]}
                    alt="Ad image"
                    className="rounded-lg object-contain cursor-pointer"
                    onClick={() => setIsOpen(true)}
                />
            </div>

            {/* Thumbnail Gallery */}
            <div className="flex justify-center gap-2">
                {images.map((image, index) => (
                    <button
                        key={index}
                        className={`h-16 w-16 flex-shrink-0 rounded-md overflow-hidden p-[2px] ${activeIndex === index ? "border-2 border-[#3a7bb7]" : ""}`}
                        onClick={() => setActiveIndex(index)}
                    >
                        <img
                            src={image}
                            alt={`Thumbnail ${index}`}
                            className="w-full rounded-md h-full"
                        />
                    </button>
                ))}
            </div>

            {isOpen && (
                <Lightbox
                    mainSrc={images[activeIndex]}
                    nextSrc={images[(activeIndex + 1) % images.length]}
                    prevSrc={images[(activeIndex + images.length - 1) % images.length]}
                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={() => setActiveIndex((activeIndex + images.length - 1) % images.length)}
                    onMoveNextRequest={() => setActiveIndex((activeIndex + 1) % images.length)}
                />
            )}
        </div>
    );
};

export default Gallery;
