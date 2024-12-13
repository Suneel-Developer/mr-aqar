import React, { useEffect, useState } from "react";
import Logo from "../assets/logo_header_ar.png"
import CopyIcon from "../assets/copy-icon.svg"
import CallIcon from "../assets/call-icon.svg"
import WhatshapIocn from "../assets/whatshap-icon.svg"
import AdOne from "../assets/adone.jpg";
import AdTwo from "../assets/adtwo.png";
import { IoMdTime } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { FaChevronRight } from "react-icons/fa6";




const AdDetailModal = ({ isOpen, onClose }) => {
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

    const [activeImage, setActiveImage] = useState(AdOne);

    const images = [AdOne, AdTwo]; // List of images

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

                    <div className="w-[156px] h-[44px] cursor-pointer">
                        <img src={Logo} alt="Logo" className="bo-progressive-bg-image bo-logo w-[156px] h-[45px] xl:w-[189px] xl:h-[54px]" />
                    </div>

                    <div></div>
                </header>

                <div className="flex flex-col items-center bg-[#84AED6] text-on-primary rounded-b-lg px-6 relative py-8 mt-1">
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

                <div className="flex gap-3 justify-center">
                    <a href="tel:+90078005" className="text-base shrink-0 inline-flex text-white items-center justify-center whitespace-nowrap transition-colors h-12 rounded-lg font-bold bg-[#38a854] px-2.5">
                        <p className="text-xl font-normal">90078005</p>
                        <img src={CallIcon} alt="CallIcon" className="shrink-0 fill-current w-6 h-6 mr-1" />
                    </a>

                    <a href="" className="border border-[#38a854] rounded-lg p-1 bg-main size-12 flex items-center justify-center">
                        <img src={WhatshapIocn} alt="WhatshapIocn" className="shrink-0 w-6 h-6" />
                    </a>
                </div>

                <div className="pt-12 pb-6 px-3">
                    {/* Main Picture */}
                    <div className="flex justify-center xl:max-h-96 max-h-[67vh] min-h-28 mb-4">
                        <img
                            src={activeImage}
                            alt="Ad image"
                            className="rounded-lg object-contain"
                        />
                    </div>

                    {/* Thumbnail Gallery */}
                    <div className="flex justify-center gap-2">
                        {images.map((image, index) => (
                            <button
                                key={index}
                                className={`h-16 w-16 flex-shrink-0 rounded-md overflow-hidden p-[2px] ${activeImage === image ? "border-2 border-[#3a7bb7]" : ""
                                    }`}
                                onClick={() => setActiveImage(image)}
                            >
                                <img
                                    src={image}
                                    alt={`Thumbnail ${index}`}
                                    className="w-full rounded-md h-full"
                                />
                            </button>
                        ))}
                    </div>
                </div>
            </div>

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
