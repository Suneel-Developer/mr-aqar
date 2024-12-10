import React, { useState } from "react";
import Header from "../../components/Header";
import { IoIosArrowDown } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import AdTypeModal from "./AdCategorySelector";
import Forrentlogo from "../../assets/house-service.png"


const categoriesdata = [
    { categoryname: "للإيجار", logo: Forrentlogo },
    { categoryname: "دولي", logo: Forrentlogo },
    { categoryname: "مطلوب", logo: Forrentlogo },
    { categoryname: "للإيجار", logo: Forrentlogo },
    { categoryname: "للبيع", logo: Forrentlogo },
    { categoryname: "مزرعة", logo: Forrentlogo },
    { categoryname: "آحرون", logo: Forrentlogo },
    { categoryname: "شاليه", logo: Forrentlogo },
    { categoryname: "تبادل", logo: Forrentlogo },
    { categoryname: "خدمات المنزل", logo: Forrentlogo },
    { categoryname: "الأراضي", logo: Forrentlogo },
    { categoryname: "مكتب", logo: Forrentlogo },
];


const CreateAd = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedAdType, setSelectedAdType] = useState("");
    const [isPropertyDropdownOpen, setIsPropertyDropdownOpen] = useState(false);
    const [selectedPropertyOption, setSelectedPropertyOption] = useState("نوع العقار");
    const [isAreasDropdownOpen, setIsAreasDropdownOpen] = useState(false);
    const [selectedAreasOption, setSelectedAreasOption] = useState("المنطقة");


    const toggleModal = () => setIsModalOpen(!isModalOpen);

    const handleAdTypeSelect = (adType) => {
        setSelectedAdType(adType); 
    };


    const propertyTypes = [
        { value: "apartment", label: "شقة" },
        { value: "architecture", label: "عمارة" },
        { value: "Chalet", label: "شاليه" },
        { value: "commercial", label: "تجاري" },
        { value: "Duplex", label: "دوبلكس" },
        { value: "farm", label: "مزرعة" },
        { value: "role", label: "دور" },
        { value: "house", label: "بيت" },
        { value: "stable", label: "جاخور" },
        { value: "land", label: "ارض" },
        { value: "break", label: "استراحة" },
        { value: "store", label: "مخزن" },
    ];

    const areas = [
        { value: "Abbasiya", label: "عباسية" },
        { value: "Abdali", label: "العبدلي" },
        { value: "Abdullah Al Salem", label: "عبدالله السالم" },
        { value: "Abdullah Al Mubarak", label: "عبدالله المبارك" },
        { value: "Abraq Khaitan", label: "أبرق خيطان" },
        { value: "Abu Fatira", label: "أبو فطيرة" },
        { value: "Abu Al-Hasaniya", label: "أبو الحصانية" },
        { value: "Abu Halifa", label: "ابوحليفة" },
        { value: "The enemy", label: "العدان" },
        { value: "Al Adiliya", label: "العديلية" },
        { value: "Ahmadi", label: "الاحمدي" },
        { value: "Ahmadi", label: "الأحمدي" },
    ];


    const handleCategoryOptionSelect = (property) => {
        setSelectedPropertyOption(property.label);
        setIsPropertyDropdownOpen(false);
    };

    const handleAreaOptionSelect = (area) => {
        setSelectedAreasOption(area.label);
        setIsAreasDropdownOpen(false);
    };


    const [imagePreview, setImagePreview] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
        event.target.value = null;
    };

    return (
        <>
            <Header />

            <section className="px-4 py-10">
                <div className="max-w-[1000px] mx-auto shadow-3 rounded-3xl px-5 py-10 bg-white">
                    <form className="">
                        <h1 className="text-center font-semibold text-2xl text-[#242424] mb-8">إنشاء إعلان</h1>

                        {/* First Dropdown opens a modal */}
                        <div className="mb-6">
                            {/* Trigger for the modal */}
                            <div
                                className="w-full border border-gray-300 rounded-lg p-4 text-[#242424] cursor-pointer font-medium"
                                onClick={toggleModal}
                            >
                                {selectedAdType || "اختر النوع"}
                            </div>

                            {/* Modal Component */}
                            <AdTypeModal
                                isOpen={isModalOpen}
                                onClose={toggleModal}
                                onSelect={handleAdTypeSelect}
                                categories={categoriesdata}
                            />
                        </div>

                        {/* Dropdown for Property Type */}
                        <div className="relative w-full mb-6">
                            <button
                                type="button"
                                className="w-full border border-gray-300 rounded-lg p-4 text-[#242424] font-medium flex items-center justify-between cursor-pointer"
                                onClick={() => setIsPropertyDropdownOpen(!isPropertyDropdownOpen)}
                            >
                                {selectedPropertyOption}

                                <IoIosArrowDown className={`text-xl text-[#242424] transition-transform ${isPropertyDropdownOpen ? "rotate-180" : ""}`} />
                            </button>

                            {/* Dropdown Options */}
                            {isPropertyDropdownOpen && (
                                <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg mt-2 shadow-lg h-60 overflow-y-auto dropdown-scrollbar">
                                    {propertyTypes.map((property, index) => (
                                        <div
                                            key={index}
                                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                            onClick={() => handleCategoryOptionSelect(property)}
                                        >
                                            {property.label}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Input for Title */}
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded-lg p-4 text-[#242424] font-medium mb-6"
                            placeholder="أدخل العنوان"
                        />

                        {/* Textarea for Description */}
                        <textarea
                            className="w-full border border-gray-300 rounded-lg p-4 text-[#242424] font-medium mb-6"
                            rows="5"
                            placeholder="الوصف"
                        ></textarea>

                        {/* Dropdown for Areas */}
                        <div className="relative w-full mb-6">
                            <button
                                type="button"
                                className="w-full border border-gray-300 rounded-lg p-4 text-[#242424] font-medium flex items-center justify-between cursor-pointer"
                                onClick={() => setIsAreasDropdownOpen(!isAreasDropdownOpen)}
                            >
                                {selectedAreasOption}

                                <IoIosArrowDown className={`text-xl text-[#242424] transition-transform ${isAreasDropdownOpen ? "rotate-180" : ""}`} />
                            </button>

                            {/* Dropdown Options */}
                            {isAreasDropdownOpen && (
                                <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg mt-2 shadow-lg h-60 overflow-y-auto dropdown-scrollbar">
                                    {areas.map((area, index) => (
                                        <div
                                            key={index}
                                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                            onClick={() => handleAreaOptionSelect(area)}
                                        >
                                            {area.label}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        <input
                            type="type"
                            className="w-full border border-gray-300 rounded-lg p-4 text-[#242424] font-medium mb-6"
                            placeholder="السعر (د.ك)"
                        />

                        {/* Image Upload */}
                        <div className="mb-10">
                            <label className="block text-lg font-medium text-[#242424] mb-2 text-center">تحميل الصورة</label>

                            <div className="border border-gray-400 mx-auto rounded-full w-40 h-40 flex items-center justify-center overflow-hidden relative">
                                {/* Hidden File Input */}
                                <input
                                    type="file"
                                    className="hidden"
                                    id="imageUpload"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                />

                                {/* Image Preview or Add Image UI */}
                                {imagePreview ? (
                                    <div className="relative w-full h-full">
                                        {/* Display the image */}
                                        <img
                                            src={imagePreview}
                                            alt="Uploaded Preview"
                                            className="w-full h-full object-cover"
                                        />
                                        {/* Option to re-select image */}
                                        <label
                                            htmlFor="imageUpload"
                                            className="absolute inset-0 cursor-pointer"
                                        >
                                        </label>
                                    </div>
                                ) : (
                                    <div className="flex flex-col items-center justify-center gap-3 h-full w-full cursor-pointer">
                                        <label
                                            htmlFor="imageUpload"
                                            className="cursor-pointer text-[#3a7bb7] font-medium flex flex-col gap-3 items-center"
                                        >
                                            <FaPlus className="text-[#3a7bb7] text-3xl" />
                                            Add Image
                                        </label>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-[#3a7bb7] text-white text-xl font-medium py-2 px-8 rounded-[30px] max-w-96 h-14 w-full hover:opacity-80 transition-opacity duration-500"
                            >
                                Next
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};

export default CreateAd;
