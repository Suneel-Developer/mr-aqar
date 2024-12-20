import React, { useEffect, useState } from "react";
import Logo from "../../assets/logo_header_ar.png"
import CopyIcon from "../../assets/copy-icon.svg"
import CallIcon from "../../assets/call-icon.svg"
import WhatshapIocn from "../../assets/whatshap-icon.svg"
import UserProfile from "../../assets/user-profile.jpg"
import { IoMdTime } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { FaChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import AdOne from "../../assets/adone.jpg";
import AdTwo from "../../assets/adtwo.png";
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { MdRotateLeft } from "react-icons/md";





const AdDetailModal = ({ isOpen, onClose }) => {
    const images = [AdOne, AdTwo, AdOne, AdTwo];
    const [activeIndex, setActiveIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [rotation, setRotation] = useState(0); // New state for rotation

    const nextImage = () => {
        setRotation(0); // Reset rotation on image change
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setRotation(0); // Reset rotation on image change
        setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setRotation(0); // Reset rotation when modal closes
    };

    const rotateImage = () => {
        setRotation((prevRotation) => prevRotation + 90); // Increment rotation by 90 degrees
    };

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }

        // Cleanup when the component unmounts
        return () => {
            document.body.classList.remove("no-scroll");
        };
    }, [isOpen]);



    return (
        <>
            {/* Modal */}
            <div
                className={`fixed top-0 right-0 w-full lg:w-4/5 bg-white shadow-lg z-50 transform transition-transform duration-300 h-screen overflow-y-auto ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                {/* header  */}
                <header className="relative py-4 px-6 flex items-center justify-between h-20">
                    <button onClick={onClose} className="text-xl opacity-50">
                        <FaChevronRight />
                    </button>

                    <Link to="/" className="w-[156px] h-[44px] cursor-pointer">
                        <img src={Logo} alt="Logo" className="bo-progressive-bg-image bo-logo w-[156px] h-[45px] xl:w-[189px] xl:h-[54px]" />
                    </Link>

                    <div></div>
                </header>

                <div className="flex flex-col items-center bg-[#1976D3] text-on-primary rounded-b-lg px-6 relative py-8 mt-1">
                    <h2 className="text-center font-bold text-white text-xl">للايجار شقة في أبو فطيرة</h2>
                    <p className="text-xl font-medium text-center text-white pt-2">900 دك</p>

                    <div className="pt-6 flex gap-3">
                        <div className="flex items-center justify-center gap-1 rounded bg-white/15 py-1 px-1.5 text-xs text-white">
                            <IoMdTime className="text-lg" />
                            منذ 14 ساعة
                        </div>

                        <div className="flex items-center justify-center gap-1 rounded bg-white/15 py-1 px-1.5 text-xs text-white">
                            <IoEyeOutline className="text-lg" />
                            410
                        </div>

                        <button className="flex items-center justify-center gap-1 rounded bg-white/15 py-1 px-1.5 text-xs text-white">
                            <img src={CopyIcon} alt="CopyIcon" className="shrink-0 fill-current h-[18px] w-[18px]" />
                        </button>
                    </div>
                </div>

                <p className="p-6 text-center text-[#556885] text-base max-w-2xl mx-auto">
                    للايجار شقه في السرداب في منطقه ابو فطيره تشطيب
                    سوبر ديلوكس اربع غرف نوم ٢ ماست...
                </p>

                <Link to="/myads" className='flex items-center justify-center gap-4 mb-4 px-4'>
                    <div className='w-14 md:w-16 h-14 md:h-16 rounded-full overflow-hidden border'>
                        <img src={UserProfile} alt="UserProfile" className='w-full h-full object-cover' />
                    </div>

                    <p className='text-lg font-medium'>حمد</p>

                </Link>

                <div className="flex gap-3 justify-center">
                    <a href="tel:+90078005" className="text-base shrink-0 inline-flex text-white items-center justify-center whitespace-nowrap transition-colors h-12 rounded-lg font-bold bg-[#38a854] px-2.5">
                        <p className="text-xl font-normal">90078005</p>
                        <img src={CallIcon} alt="CallIcon" className="shrink-0 fill-current w-6 h-6 mr-1" />
                    </a>

                    <a href="" className="border border-[#38a854] rounded-lg p-1 bg-main size-12 flex items-center justify-center">
                        <img src={WhatshapIocn} alt="WhatshapIocn" className="shrink-0 w-6 h-6" />
                    </a>
                </div>

                <div className="pt-6 pb-4 px-2 md:px-3">
                    {/* Main Picture */}
                    <div className="flex justify-center xl:max-h-96 max-h-[50vh] min-h-28 mb-4">
                        <img
                            src={images[activeIndex]}
                            alt="Main galllery"
                            className="rounded-lg object-contain cursor-pointer max-w-full max-h-[50vh] md:max-h-80"
                            onClick={() => setIsModalOpen(true)}
                        />
                    </div>

                    {/* Thumbnail Gallery */}
                    <div className="flex justify-center gap-2 flex-wrap items-center">
                        {images.map((image, index) => (
                            <button
                                key={index}
                                className={`h-12 w-12 sm:h-16 sm:w-16 flex-shrink-0 rounded-md overflow-hidden p-[2px] ${activeIndex === index ? "border-2 border-[#3a7bb7]" : ""
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


                </div>
            </div>

            {/* Fullscreen Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50">
                    {/* Close and Rotate Buttons */}
                    <div className="absolute top-3 right-4 flex gap-3 text-2xl text-white opacity-85 z-50">
                        <button onClick={closeModal}>
                            <IoCloseSharp />
                        </button>
                        <button onClick={rotateImage}>
                            <MdRotateLeft />
                        </button>
                    </div>

                    {/* Image Navigation */}
                    <div className="relative flex items-center justify-center w-full h-full px-4">
                        <button
                            onClick={prevImage}
                            className="absolute left-4 bottom-6 z-50 sm:bottom-auto text-white opacity-80 hover:opacity-100 text-2xl"
                        >
                            <FaArrowLeftLong />
                        </button>

                        <img
                            src={images[activeIndex]}
                            alt="Full screen"
                            style={{
                                transform: `rotate(${rotation}deg)`,
                                transition: "transform 0.3s ease-in-out",
                            }}
                            className="max-h-[80vh] max-w-full object-contain"
                        />

                        <button
                            onClick={nextImage}
                            className="absolute right-4 bottom-6 z-50 sm:bottom-auto text-white opacity-80 hover:opacity-100 text-2xl rotate-180"
                        >
                            <FaArrowLeftLong />
                        </button>
                    </div>

                    {/* Current Image Number */}
                    <div className="absolute top-3 opacity-85 left-4 text-white text-sm">
                        {activeIndex + 1} / {images.length}
                    </div>
                </div>
            )}

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={onClose}
                ></div>
            )}
        </>
    );
};

export default AdDetailModal;
