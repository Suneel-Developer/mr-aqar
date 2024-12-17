import React, { useState, useEffect, useRef } from "react";
import { FaAngleDown } from "react-icons/fa6";

const Tabs = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("للبدل");

    const dropdownRef = useRef(null);

    // Toggle dropdown
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    // Handle option selection
    const handleSelect = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="relative w-fit" ref={dropdownRef}>
            {/* Dropdown Button */}
            <button
                onClick={toggleDropdown}
                className={`text-sm font-medium border rounded-md flex justify-between gap-3 h-9 pl-2 pr-3 items-center whitespace-nowrap ${isOpen
                        ? "bg-[#3a7bb7] text-white border-transparent"
                        : "border-[#bed2e4] text-[#2e6290] bg-[#e8f0f7]"
                    }`}
            >
                {selectedOption}
                <FaAngleDown
                    size={16}
                    className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                        }`}
                />
            </button>

            {/* Dropdown List */}
            {isOpen && (
                <ul className="absolute mt-2 bg-white shadow-2 p-2 rounded-xl w-[240px] z-10">
                    <li
                        onClick={() => handleSelect("للايجار")}
                        className={`flex items-center gap-2 font-bold px-2 rounded-md h-10 text-sm cursor-pointer ${selectedOption === "للايجار"
                                ? "bg-[#e8f0f7] text-[#2e6290]"
                                : "hover:bg-[#e8f0f7] text-[#556885]"
                            }`}
                    >
                        <input
                            type="radio"
                            checked={selectedOption === "للايجار"}
                            readOnly
                            className="w-4 h-4 cursor-pointer"
                        />
                        للايجار
                    </li>
                    <li
                        onClick={() => handleSelect("للبيع")}
                        className={`flex items-center gap-2 font-bold px-2 rounded-md h-10 text-sm cursor-pointer ${selectedOption === "للبيع"
                                ? "bg-[#e8f0f7] text-[#2e6290]"
                                : "hover:bg-[#e8f0f7] text-[#556885]"
                            }`}
                    >
                        <input
                            type="radio"
                            checked={selectedOption === "للبيع"}
                            readOnly
                            className="w-4 h-4 cursor-pointer"
                        />
                        للبيع
                    </li>
                    <li
                        onClick={() => handleSelect("للبدل")}
                        className={`flex items-center gap-2 font-bold px-2 rounded-md h-10 text-sm cursor-pointer ${selectedOption === "للبدل"
                                ? "bg-[#e8f0f7] text-[#2e6290]"
                                : "hover:bg-[#e8f0f7] text-[#556885]"
                            }`}
                    >
                        <input
                            type="radio"
                            checked={selectedOption === "للبدل"}
                            readOnly
                            className="w-4 h-4 cursor-pointer"
                        />
                        للبدل
                    </li>
                </ul>
            )}
        </div>
    );
};

export default Tabs;
