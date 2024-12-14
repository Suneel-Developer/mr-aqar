import React, { useState, useEffect } from 'react';
import AdOne from "../../assets/adone.jpg";
import AdTwo from "../../assets/adtwo.png";
import Lightbox from "react-18-image-lightbox";
import "react-18-image-lightbox/style.css";

const Gallery = () => {
    const images = [
        AdOne,
        AdTwo,
        AdOne,
        AdTwo,
        AdOne,
        AdTwo,
    ];

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
        <div className="pt-12 pb-6 px-3">
            {/* Main Picture */}
            <div className="flex justify-center xl:max-h-96 max-h-[67vh] min-h-28 mb-4">
                <img
                    src={images[activeIndex]}
                    alt="Ad image"
                    className="rounded-lg object-contain cursor-pointer"
                    onClick={() => {
                        setIsLightboxOpen(true);
                        setShowSpinner(true);
                    }}
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

