import React, { useState, useEffect, useRef } from "react";
import { FaAngleDown } from "react-icons/fa6";
import Forrentlogo from "../../assets/for-rent.jpg"
import Internationallogo from "../../assets/international-icon.jpg"
import Matloblogo from "../../assets/matloblogo.jpg"
import Shopslogo from "../../assets/shops.jpg"
import ForSalelogo from "../../assets/for-sale.jpg"
import Farmlogo from "../../assets/farm.jpg"
import Otherslogo from "../../assets/others.jpg"
import Chaletlogo from "../../assets/chalet.jpg"
import Exchangelogo from "../../assets/exchange.png"
import HomeServiceslogo from "../../assets/home-services.jpg"
import Landslogo from "../../assets/lands.jpg"
import Officeslogo from "../../assets/offices.jpg"

const Categories = () => {
    // Category data
    const categoriesData = [
        { categoryname: "للإيجار", logo: Forrentlogo },
        { categoryname: "دولي", logo: Internationallogo },
        { categoryname: "مطلوب", logo: Matloblogo },
        { categoryname: "محلات", logo: Shopslogo },
        { categoryname: "للبيع", logo: ForSalelogo },
        { categoryname: "مزرعة", logo: Farmlogo },
        { categoryname: "دعامة أخرى", logo: Otherslogo },
        { categoryname: "شاليه", logo: Chaletlogo },
        { categoryname: "للبدل", logo: Exchangelogo },
        { categoryname: "خدمات المنزل", logo: HomeServiceslogo },
        { categoryname: "أرض", logo: Landslogo },
        { categoryname: "مكاتب", logo: Officeslogo },
    ];

    const [isOpen, setIsOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(categoriesData[0]);

    const dropdownRef = useRef(null);

    // Toggle dropdown
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    // Handle category selection
    const handleSelect = (category) => {
        setSelectedCategory(category);
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
                {selectedCategory.categoryname}
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
                        {categoriesData.map((category) => (
                            <li
                                key={category.categoryname}
                                onClick={() => handleSelect(category)}
                                className={`flex items-center gap-2 font-bold px-2 rounded-md h-10 text-sm cursor-pointer ${selectedCategory.categoryname === category.categoryname
                                    ? "bg-[#e8f0f7] text-[#2e6290]"
                                    : "hover:bg-[#e8f0f7] text-[#556885]"
                                    }`}
                            >
                                <img src={category.logo} alt={category.categoryname} className="w-6 h-6" />
                                {category.categoryname}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Categories;
