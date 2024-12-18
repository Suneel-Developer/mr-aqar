import React, { useState, useEffect, useRef } from "react";
import { FaAngleDown } from "react-icons/fa6";

const PropertyTypeDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const dropdownRef = useRef(null); // Reference to the dropdown container

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (option) => {
        setSelectedOptions((prevSelected) => {
            if (prevSelected.includes(option)) {
                return prevSelected.filter((item) => item !== option);
            } else {
                return [...prevSelected, option];
            }
        });
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

    const options = [
        { id: "real-state", label: "عقارات" },
        { id: "apartment", label: "شقة" },
        { id: "architecture", label: "عمارة" },
        { id: "Chalet", label: "شاليه" },
        { id: "commercial", label: "تجاري" },
        { id: "Duplex", label: "دوبلكس" },
        { id: "farm", label: "مزرعة" },
        { id: "role", label: "دور" },
        { id: "house", label: "بيت" },
        { id: "stable", label: "جاخور" },
        { id: "land", label: "ارض" },
        { id: "break", label: "استراحة" },
        { id: "store", label: "مخزن" },
    ];

    // Display label logic
    const displayLabel =
        selectedOptions.length === 0
            ? "عقارات"
            : selectedOptions.length === 1
                ? options.find((opt) => opt.id === selectedOptions[0])?.label
                : `${options.find((opt) => opt.id === selectedOptions[0])?.label} +${selectedOptions.length - 1}`;

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
                {displayLabel}
                <FaAngleDown
                    size={16}
                    className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                        }`}
                />
            </button>

            {/* Dropdown List */}
            {isOpen && (
                <div onClick={() => setIsOpen(false)} className="fixed top-0 sm:top-auto sm:absolute bg-black/30 sm:bg-transparent w-full sm:w-auto h-screen sm:h-auto right-0 p-3 sm:p-0 z-50">
                    <ul className="bg-white shadow-2 p-2 rounded-xl w-full sm:w-[240px] z-10 h-56 dropdown-scrollbar overflow-y-auto mt-[210px] sm:mt-2">
                        {options.map((type) => (
                            <li
                                key={type.id}
                                onClick={() => handleSelect(type.id)}
                                className={`flex items-center gap-2 font-bold px-2 rounded-md h-10 text-sm cursor-pointer ${selectedOptions.includes(type.id)
                                    ? "bg-[#e8f0f7] text-[#2e6290]"
                                    : "hover:bg-[#e8f0f7] text-[#556885]"
                                    }`}
                            >
                                <input
                                    type="checkbox"
                                    checked={selectedOptions.includes(type.id)}
                                    readOnly
                                    className="w-4 h-4 cursor-pointer border border-[#dcdcdc] rounded"
                                />
                                {type.label}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default PropertyTypeDropdown;
