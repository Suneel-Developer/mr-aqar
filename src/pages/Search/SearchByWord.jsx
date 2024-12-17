import React, { useState, useEffect, useRef } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { GrSearch } from "react-icons/gr";


const SearchByWord = () => {
    const [isOpen, setIsOpen] = useState(false);

    const dropdownRef = useRef(null);

    // Toggle dropdown
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    // Handle option selection
    const handleSelect = (option) => {
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
                كلمات
                <FaAngleDown
                    size={16}
                    className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                        }`}
                />
            </button>

            {/* Dropdown List */}
            {isOpen && (
                <div className="absolute mt-2 sm:left-1/2 sm:-translate-x-1/2 bg-white shadow-2 p-4 rounded-xl w-[300px] sm:w-[380px] z-50">
                    <p className="text-[#556885] text-sm mb-2">يمكنك البحث بالكلمة مثلا (سطح) او (حوش)</p>

                    <div className='h-12 w-full flex items-center relative'>
                        <GrSearch size={18} className='absolute top-0 bottom-0 right-4 m-auto z-30 text-[#556885]' />
                        <input type="text" className='relative block w-full h-full rounded-lg border pr-12' placeholder='إبحث بالكلمة' />
                    </div>
                    <hr className="my-4" />

                    <div className="flex items-center justify-between gap-2">
                        <button className="max-w-[112px] w-full text-center hover:underline text-[#556885] font-medium">مسح</button>
                        <button className="bg-[#3a7bb7] text-white font-semibold text-sm rounded-md h-11 w-full max-w-[112px] transition-all duration-300 hover:opacity-90">بحث</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SearchByWord;
