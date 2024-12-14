import React, { useState, useRef, useEffect } from "react";
import DeleteIcon from "../../assets/delete-item-icon.svg";
import SearchIcon from "../../assets/search-icon.svg";

const DropdownWithTags = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedOptions, setSelectedOptions] = useState([]);
    const dropdownRef = useRef(null);

    const options = [
        { id: 1, label: "كل مناطق الكويت", count: 2118 },
        { id: 2, label: "محافظة حولي", count: 738 },
        { id: 3, label: "سلوى", count: 104 },
        { id: 4, label: "السلام", count: 102 },
        { id: 5, label: "الرميثية", count: 71 },
        { id: 6, label: "الجابرية", count: 70 },
        { id: 7, label: "السالمية", count: 67 },
        { id: 8, label: "الصديق", count: 54 },
        { id: 9, label: "حولي", count: 49 },
        { id: 10, label: "حطين", count: 28 },

        { id: 11, label: "الشهداء", count: 25 },
        { id: 12, label: "مشرف", count: 24 },
        { id: 13, label: "بيان", count: 21 },
        { id: 14, label: "غرب مشرف - مبارك العبدالله", count: 13 },
        { id: 15, label: "الشعب السكني", count: 11 },
        { id: 16, label: "الشعب البحري", count: 10 },
        { id: 17, label: "ميدان حولي", count: 4 },
        { id: 18, label: "البدع", count: 3 },
        { id: 19, label: "محافظة مبارك الكبير", count: 422 },
        { id: 20, label: "ابو فطيرة", count: 166 },

        { id: 21, label: "المسايل", count: 82 },
        { id: 22, label: "الفنيطيس", count: 76 },
        { id: 23, label: "صباح السالم", count: 49 },
        { id: 24, label: "مبارك الكبير", count: 14 },
        { id: 25, label: "العدان", count: 10 },
        { id: 26, label: "ابو الحصانية", count: 8 },
        { id: 27, label: "اسواق القرين - غرب ابو فطيرة الحرفية", count: 7 },
        { id: 28, label: "القرين", count: 5 },
        { id: 29, label: "القصور", count: 3 },
        { id: 20, label: "المسيلة", count: 2 },

        { id: 31, label: "صبحان", count: 0 },
        { id: 32, label: "محافظة العاصمة", count: 419 },
        { id: 33, label: "الشرق", count: 85 },
        { id: 34, label: "جابر الاحمد", count: 47 },
        { id: 35, label: "القادسية", count: 29 },
        { id: 36, label: "السرة", count: 26 },
        { id: 37, label: "الشويخ الصناعية", count: 26 },
        { id: 38, label: "قرطبة", count: 24 },
        { id: 39, label: "المرقاب", count: 19 },
        { id: 40, label: "شمال غرب الصليبيخات", count: 17 },

        { id: 41, label: "الروضة", count: 16 },
        { id: 42, label: "الدسمة", count: 13 },
        { id: 43, label: "كيفان", count: 13 },
        { id: 44, label: "القبلة - جبلة", count: 11 },
        { id: 45, label: "الخالدية", count: 10 },
        { id: 46, label: "الدعية", count: 9 },
        { id: 47, label: "الفيحاء", count: 9 },
        { id: 48, label: "المنصورية", count: 9 },
        { id: 49, label: "اليرموك", count: 9 },
        { id: 50, label: "بنيد القار", count: 9 },

        { id: 51, label: "الشامية", count: 8 },
        { id: 52, label: "عبدالله السالم", count: 6 },
        { id: 53, label: "ضاحية حصه المبارك", count: 5 },
        { id: 54, label: "غرناطة", count: 4 },
        { id: 55, label: "الصليبيخات", count: 3 },
        { id: 56, label: "القيروان", count: 3 },
        { id: 57, label: "دسمان", count: 3 },
        { id: 58, label: "الدوحة", count: 2 },
        { id: 59, label: "النهضة", count: 2 },
        { id: 60, label: "النزهة", count: 1 },
        { id: 61, label: "الشويخ السكنية", count: 1 },

        { id: 62, label: "العديلية", count: 0 },
        { id: 63, label: "المباركية", count: 0 },
        { id: 64, label: "محافظة الفروانية", count: 261 },
        { id: 65, label: "غرب عبدالله المبارك", count: 52 },
        { id: 66, label: "جنوب عبدالله المبارك", count: 46 },
        { id: 67, label: "خيطان الجنوبي الجديدة", count: 37 },
        { id: 68, label: "عبدالله المبارك - غرب الجليب", count: 19 },
        { id: 69, label: "الري", count: 16 },
        { id: 70, label: "العمرية", count: 16 },
        { id: 70, label: "الاندلس", count: 14 },

        { id: 71, label: "صباح الناصر", count: 13 },
        { id: 72, label: "الرابية", count: 7 },
        { id: 73, label: "خيطان", count: 7 },
        { id: 74, label: "الفردوس", count: 6 },
        { id: 75, label: "الفروانية", count: 6 },
        { id: 76, label: "اشبيلية", count: 5 },
        { id: 77, label: "العارضية", count: 5 },
        { id: 78, label: "الرحاب", count: 4 },
        { id: 79, label: "الضجيج", count: 3 },
        { id: 80, label: "العارضية الحرفية - الصناعية", count: 3 },

        { id: 81, label: "الرقعي", count: 1 },
        { id: 82, label: "جليب الشيوخ - الحساوي", count: 1 },
        { id: 83, label: "اسطبلات الفروانية", count: 0 },
        { id: 84, label: "محافظة الاحمدي", count: 225 },
        { id: 85, label: "العقيلة", count: 36 },
        { id: 86, label: "صباح الاحمد البحرية - الخيران", count: 31 },
        { id: 87, label: "المهبولة", count: 30 },
        { id: 88, label: "صباح الاحمد السكنية", count: 27 },
        { id: 89, label: "الفنطاس", count: 19 },
        { id: 90, label: "الفحيحيل", count: 12 },


        { id: 91, label: "المنقف", count: 12 },
        { id: 92, label: "الاحمدي", count: 9 },
        { id: 93, label: "فهد الاحمد", count: 9 },
        { id: 94, label: "الصباحية", count: 7 },
        { id: 95, label: "هدية", count: 6 },
        { id: 96, label: "ميناء عبدالله", count: 5 },
        { id: 97, label: "الرقة", count: 4 },
        { id: 98, label: "الظهر", count: 4 },
        { id: 99, label: "الوفرة السكنية", count: 3 },
        { id: 100, label: "علي صباح السالم - ام الهيمان", count: 3 },


        { id: 101, label: "ابو حليفة", count: 2 },
        { id: 102, label: "الوفرة", count: 2 },
        { id: 103, label: "الخيران السكنية - الجانب البري", count: 2 },
        { id: 104, label: "الشعيبة الصناعية", count: 1 },
        { id: 105, label: "جنوب صباح الاحمد", count: 1 },
        { id: 106, label: "الجليعة", count: 0 },
        { id: 107, label: "الزور", count: 0 },
        { id: 108, label: "النويصيب", count: 0 },
        { id: 109, label: "بنيدر", count: 0 },
        { id: 110, label: "جابر العلي", count: 0 },

        { id: 111, label: "الضباعية", count: 0 },
        { id: 112, label: "اسطبلات الاحمدي", count: 0 },
        { id:113, label: "محافظة الجهراء", count: 50 },
        { id: 114, label: "المطلاع", count: 27 },
        { id: 115, label: "سعد العبدالله", count: 7 },
        { id: 116, label: "النسيم", count: 3 },
        { id: 117, label: "كبد", count: 3 },
        { id: 118, label: "الصليبية", count: 2 },
        { id: 119, label: "القصر", count: 2 },
        { id: 120, label: "الجهراء القديمة", count: 1 },

        { id: 121, label: "الواحة", count: 1 },
        { id: 122, label: "امغرة الصناعية", count: 1 },
        { id: 123, label: "العيون", count: 1 },
        { id: 124, label: "الجهراء الصناعية", count: 1 },
        { id: 125, label: "النعايم - السالمي", count: 1 },
        { id: 126, label: "العبدلي", count: 0 },
        { id: 127, label: "الصبية", count: 0 },
        { id: 128, label: "النعيم", count: 0 },
        { id: 129, label: "اسطبلات الجهراء", count: 0 },
        { id: 130, label: "الهجن", count: 0 },
        { id: 131, label: "جنوب سعد العبدالله", count: 0 },
        { id: 132, label: "تيماء", count: 0 },
        { id: 133, label: "الخويسات", count: 0 },




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
        setIsOpen(false); // Automatically close the dropdown after selection
    };

    const isSelected = (id) =>
        selectedOptions.some((option) => option.id === id);

    const removeTag = (id) => {
        setSelectedOptions((prev) => prev.filter((option) => option.id !== id));
    };

    const handleClickOutside = (e) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
            setIsOpen(false); // Close dropdown when clicking outside
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
                className={`relative w-full bg-white pe-11 cursor-text py-[7px] overflow-hidden transition-all ${isOpen ? "border-blue-500 border" : "border-gray-300 border"
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
                        placeholder={selectedOptions.length ? "بحث ..." : "أكتب المنطقة للبحث"}
                        className="w-44 bg-transparent outline-none focus:outline-none h-10 ms-2 text-[#242424] text-xl font-light"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsOpen(true); // Open dropdown on input click
                        }}
                    />
                </div>

                <div className="h-8 rounded-full flex items-center absolute end-3 top-1/2 -translate-y-1/2">
                    <img src={SearchIcon} alt="SearchIcon" className="w-6 h-6 shrink-0" />
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
                            <span className="text-sm text-[#556888]">{option.count}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default DropdownWithTags;
