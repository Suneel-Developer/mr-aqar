import React, { useState } from "react";
import AdOne from "../assets/adone.jpg";
import AdTwo from "../assets/adtwo.png";
import Addthree from "../assets/addthree.jpg";
import Slide from "../assets/flag-slide.svg";
import Durationicon from "../assets/time-icon.svg";
import AdDetailModal from "./AdDetailsModal";

const adsData = [
    {
        id: 1,
        title: "للايجار شقة في أبو فطيرة",
        price: "900 دك",
        time: "منذ 14 ساعة",
        description: "للايجار شقه في السرداب في منطقه ابو فطيره تشطيب سوبر ديلوكس اربع غرف نوم ٢ ماست...",
        category: "important",
        member: true,
        image: AdOne,
    },

    {
        id: 2,
        title: "للايجار شقة في خيطان",
        price: "470 دك",
        time: "منذ يومين",
        description: "للإيجار شقق تشطيب جديد سوبر ديلوكس في منطقة خيطان الجنوبي قطعه ١ . الشقة تتكون...",
        category: "normal",
        member: true,
        image: AdTwo,
    },

    {
        id: 2,
        title: "للبيع تجاري في السالمية",
        price: "0 دك",
        time: "منذ يومين",
        description:"يوجد ‏لدينا محلات خلو في السالمية ، شارع سالم المبارك two floor 318.31 متر ، الم...",
        category: "normal",
        member: false,
        image: Addthree,
    },
];

const Ads = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div>
            <div className="flex flex-col gap-5">
                {adsData.map((ad) => (
                    <div
                        key={ad.id}
                        className={`relative w-full rounded-lg shadow-2 cursor-pointer border border-transparent bg-[#f6eef0] ${ad.category === "important" ? "h-32 md:h-40 flex items-center" : "p-3 xl:p-4 flex items-start md:items-center flex-col md:flex-row"
                            }`}
                        onClick={toggleModal}
                    >
                        <div className="flex gap-3 items-center">
                            <div className="relative">
                                <div
                                    className={`${ad.category === "important" ? "w-32 md:w-48 h-32 md:h-40" : "size-20 xl:size-28"
                                        } flex-shrink-0 relative rounded-md overflow-hidden`}
                                >
                                    <img
                                        src={ad.image}
                                        alt={`Ad ${ad.id}`}
                                        className="h-full w-full object-cover"
                                    />
                                </div>

                                {/* Conditional Member Style */}
                                {ad.member && (
                                    <div className={`absolute -start-2 top-0`}>
                                        <img src={Slide} alt="Slide" />
                                        <div className="w-full text-white absolute top-0 start-[1px] bg-[#d7263d] rounded-sm px-1 h-[28px] text-base">
                                            <div className="flex items-center justify-center h-full font-bold whitespace-nowrap overflow-hidden">
                                                مميز
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className={`overflow-hidden ${ad.category === "important" ? "space-y-1 py-3 pl-3" : "space-y-1"}`}>
                                <h2 className="font-bold text-base md:text-lg line-clamp-1 break-words">
                                    {ad.title}
                                </h2>
                                <div className="flex gap-3">
                                    <div className="font-medium text-sm text-[#2e6290]">{ad.price}</div>
                                    <div className="rounded text-sm flex items-center gap-1">
                                        <img
                                            src={Durationicon}
                                            alt="Durationicon"
                                            className="w-4 h-4"
                                        />
                                        {ad.time}
                                    </div>
                                </div>
                                <p
                                    className={`line-clamp-2 text-[#556885] text-sm font-medium ${ad.category === "important" ? "" : "hidden md:flex"
                                        }`}
                                >
                                    {ad.description}
                                </p>
                            </div>
                        </div>
                        {ad.category !== "important" && (
                            <p className="line-clamp-2 text-[#556885] text-sm font-medium mt-2 flex md:hidden">
                                {ad.description}
                            </p>
                        )}
                    </div>
                ))}
            </div>

            {/* Modal Component */}
            <AdDetailModal isOpen={isModalOpen} onClose={toggleModal} />
        </div>
    );
};

export default Ads;