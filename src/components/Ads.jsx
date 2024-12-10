import React, { useState } from "react";
import AdOne from "../assets/adone.jpg";
import Slide from "../assets/flag-slide.svg";
import Durationicon from "../assets/time-icon.svg";
import AdDetailModal from "./AdDetailsModal";

const Ads = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Function to toggle modal visibility
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div>
            <div className="flex flex-col gap-5">
                {/* Ad Card */}
                <div
                    className="relative w-full rounded-lg shadow-2 p-3 xl:p-4 cursor-pointer border border-transparent bg-[#f6eef0]"
                    onClick={toggleModal} // Open modal on click
                >
                    <div className="flex gap-3 items-center">
                        <div className="relative">
                            <div className="size-14 xl:size-28 flex-shrink-0 relative rounded-md overflow-hidden">
                                <img
                                    src={AdOne}
                                    alt="Ad1"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="absolute -top-[6px] -start-2">
                                <img src={Slide} alt="Slide" />
                                <div className="w-full text-white absolute top-0 start-[1px] bg-[#d7263d] rounded-sm px-1 h-[28px] text-base">
                                    <div className="flex items-center justify-center h-full font-bold whitespace-nowrap overflow-hidden">
                                        مميز
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="overflow-hidden space-y-1">
                            <h2 className="font-bold text-lg text-dark line-clamp-2 break-words">
                                للايجار شقة في أبو فطيرة
                            </h2>
                            <div className="flex gap-3">
                                <div className="font-medium text-sm text-[#2e6290]">
                                    900 دك
                                </div>
                                <div className="rounded text-sm flex items-center gap-1">
                                    <img
                                        src={Durationicon}
                                        alt="Durationicon"
                                        className="w-4 h-4"
                                    />
                                    منذ 14 ساعة
                                </div>
                            </div>
                            <p className="line-clamp-2 text-[#556885] text-sm font-medium md:flex hidden">
                                للايجار شقه في السرداب في منطقه ابو فطيره تشطيب
                                سوبر ديلوكس اربع غرف نوم ٢ ماست...
                            </p>
                        </div>
                    </div>
                    <p className="line-clamp-2 text-[#556885] text-sm font-medium md:hidden flex mt-1">
                        للايجار شقه في السرداب في منطقه ابو فطيره تشطيب
                        سوبر ديلوكس اربع غرف نوم ٢ ماست...
                    </p>
                </div>

            </div>

            {/* Use the Modal Component */}
            <AdDetailModal isOpen={isModalOpen} onClose={toggleModal} />
        </div>
    );
};

export default Ads;
