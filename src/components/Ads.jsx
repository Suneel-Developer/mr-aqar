import React, { useState } from "react";
import AdOne from "../assets/adone.jpg";
import AdTwo from "../assets/adtwo.png";
import Addthree from "../assets/addthree.jpg";
import Slide from "../assets/flag-slide.svg";
import { GoClock } from "react-icons/go";
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
        description: "يوجد ‏لدينا محلات خلو في السالمية ، شارع سالم المبارك two floor 318.31 متر ، الم...",
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
            <div className="flex flex-col gap-3">
                {adsData.map((ad) => (
                    <div
                        key={ad.id}
                        className={`relative w-full rounded-2xl shadow-2 cursor-pointer border border-transparent ${ad.category === "important" ? "h-28 md:h-40 flex items-center bg-[#3a7bb7] text-white" : "bg-white text-black p-3 xl:p-4 flex items-start md:items-center flex-col md:flex-row"
                            }`}
                        onClick={toggleModal}
                    >
                        <div className="flex gap-3 items-center">
                            <div className="relative">
                                <div
                                    className={`${ad.category === "important" ? "w-28 md:w-48 h-28 md:h-40" : "size-14 xl:size-28"
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
                                        <img src={Slide} alt="Slide" className="w-[37px] md:w-auto h-7 md:h-auto" />
                                        <div className="w-full text-white absolute top-0 start-[1px] bg-[#d7263d] rounded-sm px-1 h-5 md:h-[28px] text-xs md:text-base">
                                            <div className="flex items-center justify-center h-full font-bold whitespace-nowrap overflow-hidden">
                                                مميز
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className={`overflow-hidden ${ad.category === "important" ? "space-y-1 py-3 pl-3" : "space-y-1"}`}>
                                <h2 className="font-bold text-xs md:text-lg break-words">
                                    {ad.title}
                                </h2>

                                <div className="flex gap-3">
                                    <div className={`font-medium text-xs md:text-sm ${ad.category === "important" ? "text-white" : "text-[#2e6290]"}`}>{ad.price}</div>


                                    <div className="rounded text-[10px] md:text-sm flex items-center gap-1">
                                        <GoClock />
                                        {ad.time}
                                    </div>
                                </div>
                                <p
                                    className={`line-clamp-2 text-[#556885] text-sm font-medium ${ad.category === "important" ? "text-white text-xs md:text-sm" : "hidden md:flex text-[#556885]"
                                        }`}
                                >
                                    {ad.description}
                                </p>
                            </div>
                        </div>
                        {ad.category !== "important" && (
                            <p className={`line-clamp-2 text-xs md:text-sm font-medium mt-2 flex md:hidden ${ad.category === "important" ? "text-white" : "text-[#556885]"}`}>
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
