import React, { useState } from "react";
import AdOne from "../../assets/adone.jpg";
import AdTwo from "../../assets/adtwo.png";
import Addthree from "../../assets/addthree.jpg";
import Slide from "../../assets/flag-slide.svg";
import { GoClock } from "react-icons/go";
import AdDetailModal from "../../components/AdDetails/AdDetailsModal";

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

    {
        id: 3,
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
        <>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {adsData.map((ad) => (
                    <div
                        key={ad.id}
                        className={`w-full flex flex-col rounded-md shadow-2 ${ad.category === "important" ? "bg-[#3a7bb7] text-white cursor-pointer" : "bg-white text-black cursor-pointer"
                            }`}
                        onClick={toggleModal}
                    >
                        <div className="relative">
                            <div
                                className={`${ad.category === "important" ? "w-full h-28 md:h-40" : "w-full h-28 md:h-40"
                                    } flex-shrink-0 relative rounded-md overflow-hidden`}
                            >
                                <img
                                    src={ad.image}
                                    alt={`Ad ${ad.id}`}
                                    className="h-full w-full object-cover"
                                />
                            </div>

                            {ad.member && (
                                <div className={`absolute -start-2 top-0`}>
                                    <img src={Slide} alt="Slide" className="w-full md:w-auto h-7 md:h-auto" />
                                    <div className="w-full text-white absolute top-0 start-[1px] bg-[#d7263d] rounded-sm px-1 h-5 md:h-[28px] text-xs md:text-base">
                                        <div className="flex items-center justify-center h-full font-bold whitespace-nowrap overflow-hidden">
                                            مميز
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className={`p-2 sm:p-3 space-y-2 ${ad.category === "important" ? "" : ""}`}>
                            <h2 className="font-medium sm:font-bold text-xs md:text-lg break-words">
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
                                className={`line-clamp-2 text-[#556885] text-[10px] sm:text-sm font-medium ${ad.category === "important" ? "text-white text-xs md:text-sm" : "text-[#556885]"
                                    }`}
                            >
                                {ad.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal Component */}
            <AdDetailModal isOpen={isModalOpen} onClose={toggleModal} />
        </>
    );
};

export default Ads;
