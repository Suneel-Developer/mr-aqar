import React, { useState, useEffect } from 'react'
import AdOne from "../../assets/adone.jpg";
import AdTwo from "../../assets/adtwo.png";
import "react-image-lightbox/style.css";
import Lightbox from "react-image-lightbox";


const Gallery = () => {
    const images = [
        AdOne,
        AdTwo,
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const [isOpenGallery, setIsOpenGallery] = useState(false);
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    // Preload images to avoid the loader issue
    useEffect(() => {
        const preloadImages = () => {
            images.forEach((image) => {
                const img = new Image();
                img.src = image;
            });
        };
        preloadImages();
    }, [images]);

    return (
        <div className="pt-12 pb-6 px-3">
            {/* Main Picture */}
            <div className="flex justify-center xl:max-h-96 max-h-[67vh] min-h-28 mb-4">
                <img
                    src={images[activeIndex]}
                    alt="Ad image"
                    className="rounded-lg object-contain cursor-pointer"
                    onLoad={() => setIsImageLoaded(false)}
                    onClick={() => setIsOpenGallery(true)} 
                />
            </div>

            {/* Thumbnail Gallery */}
            <div className="flex justify-center gap-2">
                {images.map((image, index) => (
                    <button
                        key={index}
                        className={`h-16 w-16 flex-shrink-0 rounded-md overflow-hidden p-[2px] ${activeIndex === index ? "border-2 border-[#3a7bb7]" : ""
                            }`}
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

            {/* Full-Screen Lightbox */}
            {isOpenGallery && (
                <Lightbox
                    mainSrc={images[activeIndex]}
                    nextSrc={images[(activeIndex + 1) % images.length]} // Next image
                    prevSrc={
                        images[(activeIndex + images.length - 1) % images.length] // Previous image
                    }
                    onCloseRequest={() => setIsOpenGallery(false)} // Close the lightbox
                    onMovePrevRequest={() =>
                        setActiveIndex((activeIndex + images.length - 1) % images.length)
                    } // Move to the previous image
                    onMoveNextRequest={() =>
                        setActiveIndex((activeIndex + 1) % images.length)
                    } // Move to the next image
                />
            )}
        </div>
    )
}

export default Gallery