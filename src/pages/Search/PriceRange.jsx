import React, { useState, useEffect, useRef } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { FaAngleDown } from "react-icons/fa6";

const PriceRange = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [range, setRange] = useState([0, 200000]);
    const dropdownRef = useRef(null);

    // Toggle dropdown
    const toggleDropdown = () => setIsOpen(!isOpen);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);
        return () => document.removeEventListener("mousedown", handleOutsideClick);
    }, []);

    // Handle slider behavior with reversed logic
    const handleSliderChange = (value) => {
        const [min, max] = value;

        const reversedMin = 200000 - max;
        const reversedMax = 200000 - min;
        setRange([reversedMin, reversedMax]);
    };

    // Input handlers
    const handleInputChange = (e, type) => {
        const value = parseInt(e.target.value.replace(/,/g, "")) || 0;

        if (type === "min") {
            setRange([Math.min(value, range[1]), range[1]]);
        } else {
            setRange([range[0], Math.max(value, range[0])]);
        }
    };

    // Reset button logic
    const handleReset = () => setRange([0, 200000]);

    return (
        <div ref={dropdownRef} className="relative w-fit">
            {/* Dropdown Button */}
            <button
                onClick={toggleDropdown}
                className={`text-sm font-medium border rounded-md flex justify-between gap-3 h-9 pl-2 pr-3 items-center whitespace-nowrap ${isOpen
                    ? "bg-[#3a7bb7] text-white border-transparent"
                    : "border-[#bed2e4] text-[#2e6290] bg-[#e8f0f7]"
                    }`}
            >
                السعر
                <FaAngleDown
                    size={16}
                    className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                        }`}
                />
            </button>

            {/* Dropdown Content */}
            {isOpen && (
                <div onClick={() => setIsOpen(false)} className="fixed top-0 sm:top-auto sm:absolute sm:left-1/2 sm:-translate-x-1/2 bg-black/30 sm:bg-transparent w-full sm:w-auto h-screen sm:h-auto right-0 sm:right-auto p-3 sm:p-0 z-50">
                    <div
                        className="bg-white shadow-2 p-4 rounded-xl w-full sm:w-[380px] mt-[210px] sm:mt-2"
                    >
                        {/* Slider */}
                        <div className="mb-4">
                            <div className="flex justify-between text-sm mb-2">
                                <span className="bg-[#e8f0f7] border border-[#bed2e4] text-[#2e6290] h-[26px] px-2 rounded text-xs flex items-center justify-center">
                                    {range[0].toLocaleString()} د.ك
                                </span>
                                <span className="bg-[#e8f0f7] border border-[#bed2e4] text-[#2e6290] h-[26px] px-2 rounded text-xs flex items-center justify-center">
                                    {range[1].toLocaleString()} د.ك
                                </span>
                            </div>

                            <Slider
                                range
                                min={0}
                                max={200000}
                                step={1000}
                                value={[200000 - range[1], 200000 - range[0]]}
                                onChange={handleSliderChange}
                                trackStyle={[{ backgroundColor: "#3a7bb7" }]}
                                handleStyle={[
                                    { borderColor: "#3a7bb7" },
                                    { borderColor: "#3a7bb7" },
                                ]}
                            />
                        </div>

                        {/* Input Fields */}
                        <div className="grid grid-cols-2 gap-2 mb-4">
                            <div>
                                <label className="text-[#242424] text-xs font-bold">
                                    أقل سعر (د.ك)
                                </label>
                                <input
                                    type="text"
                                    value={range[0].toLocaleString()}
                                    onChange={(e) => handleInputChange(e, "min")}
                                    className="block w-full rounded-lg border h-10 px-2"
                                />
                            </div>
                            <div>
                                <label className="text-[#242424] text-xs font-bold">
                                    أعلى سعر (د.ك)
                                </label>
                                <input
                                    type="text"
                                    value={range[1].toLocaleString()}
                                    onChange={(e) => handleInputChange(e, "max")}
                                    className="block w-full rounded-lg border h-10 px-2"
                                />
                            </div>
                        </div>

                        <hr className="my-4" />

                        {/* Buttons */}
                        <div className="flex items-center justify-between gap-2">
                            <button
                                onClick={handleReset}
                                className="max-w-[112px] w-full text-center hover:underline text-[#556885] font-medium"
                            >
                                مسح
                            </button>
                            <button className="bg-[#3a7bb7] text-white font-semibold text-sm rounded-md h-11 w-full max-w-[112px] transition-all duration-300 hover:opacity-90">
                                بحث
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>

    );
};

export default PriceRange;
