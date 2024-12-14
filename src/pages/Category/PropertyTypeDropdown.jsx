import React, { useState, useRef, useEffect } from "react";
import DeleteIcon from "../../assets/delete-item-icon.svg";
import DownArrowIcon from "../../assets/down-arrow.svg";

const PropertyTypeDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedOptions, setSelectedOptions] = useState([]);
    const dropdownRef = useRef(null);

    const options = [
        { id: 1, value: "apartment", label: "شقة" },
        { id: 2, value: "architecture", label: "عمارة" },
        { id: 3, value: "Chalet", label: "شاليه" },
        { id: 4, value: "commercial", label: "تجاري" },
        { id: 5, value: "Duplex", label: "دوبلكس" },
        { id: 6, value: "farm", label: "مزرعة" },
        { id: 7, value: "role", label: "دور" },
        { id: 8, value: "house", label: "بيت" },
        { id: 9, value: "stable", label: "جاخور" },
        { id: 10, value: "land", label: "ارض" },
        { id: 11, value: "break", label: "استراحة" },
        { id: 12, value: "store", label: "مخزن" },
    ];

    const filteredOptions = options.filter((option) =>
        option.label.includes(searchTerm)
    );

    const toggleOption = (option) => {
        if (selectedOptions.some((item) => item.id === option.id)) {
            setSelectedOptions((prev) =>
                prev.filter((item) => item.id !== option.id)
            );
        } else {
            setSelectedOptions((prev) => [...prev, option]);
        }
        setIsOpen(false);
    };

    const isSelected = (id) =>
        selectedOptions.some((option) => option.id === id);

    const removeTag = (id) => {
        setSelectedOptions((prev) => prev.filter((option) => option.id !== id));
    };

    const handleClickOutside = (e) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative w-full mx-auto" ref={dropdownRef}>
            {/* Dropdown Header */}
            <div
                className={`relative w-full bg-white pe-11 cursor-text border py-[7px] overflow-hidden transition-all ${isOpen ? "border-blue-500" : "border-gray-300"
                    } ${selectedOptions.length ? "min-h-[56px] rounded-[12px]" : "min-h-[44px] rounded-[30px]"}`}
                onClick={() => setIsOpen(true)}
            >
                <div className="flex gap-1.5 flex-wrap px-2">
                    {selectedOptions.map((option) => (
                        <div className="max-w-full overflow-hidden" key={option.id}>
                            <div className="flex items-center justify-center rounded-full max-w-full overflow-hidden bg-[#e8f0f7] border border-[#bed2e4] text-[#2e6290] cursor-auto h-10">
                                <div className="whitespace-nowrap text-base ps-2.5 truncate">
                                    {option.label}
                                </div>
                                <div
                                    className="inline-flex items-center justify-center rounded-e-full transition ps-1 pe-1.5 h-full cursor-pointer"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        removeTag(option.id);
                                    }}
                                >
                                    <img src={DeleteIcon} alt="DeleteIcon" className="h-4 w-4 shrink-0" />
                                </div>
                            </div>
                        </div>
                    ))}
                    <input
                        type="text"
                        placeholder="نوع العقار"
                        className={`w-44 bg-transparent outline-none focus:outline-none h-10 ms-2 text-[#242424] text-xl font-light ${selectedOptions.length ? "invisible" : ""}`}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsOpen(true);
                        }}
                    />
                </div>

                <div
                    className="h-8 rounded-full flex items-center absolute end-3 top-1/2 -translate-y-1/2"
                    onClick={(e) => {
                        e.stopPropagation();
                        setIsOpen((prev) => !prev);
                    }}
                >
                    <img
                        src={DownArrowIcon}
                        alt="ToggleIcon"
                        className={`w-6 h-6 cursor-pointer shrink-0 ${isOpen ? "rotate-180" : ""}`}
                    />
                </div>

            </div>

            {/* Dropdown Body */}
            {isOpen && (
                <div className="absolute top-full mt-2 w-full bg-white shadow-lg rounded-xl max-h-96 dropdown-scrollbar overflow-y-auto z-10 py-2 border border-[#dcdcdc] space-y-1">
                    {filteredOptions.map((option) => (
                        <div
                            key={option.id}
                            onClick={() => {
                                toggleOption(option);
                                setIsOpen(false);
                            }}
                            className={`flex relative items-center justify-between py-2 px-2 mx-2 rounded-lg cursor-pointer ${isSelected(option.id) ? "bg-[#e8f0f7]" : "bg-white"
                                }`}
                        >
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={isSelected(option.id)}
                                    onChange={() => { }}
                                    className="form-checkbox pointer-events-none"
                                />
                                <span className="block truncate font-bold text-sm text-[#2e6290]">
                                    {option.label}
                                </span>
                            </label>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default PropertyTypeDropdown;
