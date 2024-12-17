import React, { useState } from "react";
import Header from "../../components/Header";
import { IoIosArrowDown } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import AdTypeModal from "./AdCategorySelector";
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
import UploadGallery from "./UploadGallery";




const categoriesdata = [
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
        { label: "عباسية" },
        { label: "العبدلي" },
        { label: "عبدالله السالم" },
        { label: "عبدالله المبارك" },
        { label: "أبرق خيطان" },
        { value: "Abu Fatira", label: "أبو فطيرة" },
        { label: "أبو الحصانية" },
        { label: "ابوحليفة" },
        { label: "العدان" },
        { label: "العديلية" },
        { label: "الاحمدي" },
        { label: "الأحمدي" },
        { label: "اسطبلات الاحمدي" },
        { label: "الأندلس" },
        { label: "الدعية" },
        { label: "الدسمة" },
        { label: "الفيحاء" },
        { label: "المنصورية" },
        { label: "المطلاع" },
        { label: "النهضة" },
        { label: "القبله-جبله" },
        { label: "القادسية" },
        { label: "القرين" },
        { label: "الشامية" },
        { label: "الشويخ" },
        { label: "السرة" },
        { label: "اليرموك" },
        { label: "البدع" },
        { label: "الضجيج" },
        { label: "النزهة" },
        { label: "القصور" },
        { label: "الرحاب" },
        { label: "السلام" },
        { label: "الشدادية" },
        { label: "الشهداء" },
        { label: "الصديق" },
        { label: "الزهراء" },
        { label: "الاندلس" },
        { label: "ضاحية علي صباح السالم" },
        { label: "الخويسات" },
        { label: "المسايل" },
        { label: "أمغرة" },
        { label: "امغره الصناعيه" },
        { label: "العقيلة" },
        { label: "العارضية" },
        { label: "العارضيه الحرفيه - الصناعيه" },
        { label: "بيان" },
        { label: "بنيد القار" },
        { label: "بنيدر" },
        { label: "الهجن" },
        { label: "الظهر" },
        { label: "دسمان" },
        { label: "الدوحه" },
        { label: "فهد الأحمد" },
        { label: "الفحيحيل" },
        { label: "الفروانية" },
        { label: "محافظة الفروانيه" },
        { label: "اسطبلات الفروانيه" },
        { label: "الفنطاس" },
        { label: "الفردوس" },
        { label: "التجارة الحرة" },
        { label: "الفنيطيس" },
        { label: "غرب عبد الله المبارك" },
        { label: "غرناطه" },
        { label: "هدية" },
        { label: "حطين" },
        { label: "حولي" },
        { label: "الشعيبه الصناعيه" },
        { label: "اشبيلية" },
        { label: "جابر العلي" },
        { label: "جابر الاحمد" },
        { label: "الجابرية" },
        { label: "الجهراء" },
        { label: "الجهراء القديمه" },
        { label: "اسطبلات الجهراء" },
        { label: "الجليعة" },
        { label: "جليب الشيوخ - الحساوي" },
        { label: "كبد" },
        { label: "كيفان" },
        { label: "كاظمه" },
        { label: "الخيران" },
        { label: "خيطان" },
        { label: "خالدية" },
        { label: "الخالديه" },
        { label: "مدينة الكويت" },
        { label: "المهبولة" },
        { label: "ميدان حولي" },
        { label: "المنقف" },
        { label: "ميناء عبدالله" },
        { label: "مشرف" },
        { label: "المسيلة" },
        { label: "ضاحية مبارك العبد الله الجابر" },
        { label: "مبارك الكبير" },
        { label: "المباركيه" },
        { label: "المرقاب" },
        { label: "النعيم" },
        { label: "النهضه" },
        { label: "النسيم" },
        { label: "شمال غرب الصليبيخات" },
        { label: "النويصيب" },
        { label: "ام الهيمان" },
        { label: "العمرية" },
        { label: "العيون" },
        { label: "القيروان" },
        { label: "القيروان" },
        { label: "القصر" },
        { label: "قرطبة" },
        { label: "الرابية" },
        { label: "الري" },
        { label: "الروضة" },
        { label: "الرقه" },
        { label: "الرقعي" },
        { label: "الرميثية" },
        { label: "سعد العبدالله" },
        { label: "صباح الاحمد الخيران" },
        { label: "صباح الناصر" },
        { label: "صباح الاحمد السكنية" },
        { label: "صباح الاحمد البحريه" },
        { label: "صباح الأحمد السكنيه" },
        { label: "صباح السالم" },
        { label: "الصباحية" },
        { label: "صبحان" },
        { label: "الصبيه" },
        { label: "السالمي" },
        { label: "السالمية" },
        { label: "سلوى" },
        { label: "صناعيه الجهراء" },
        { label: "الشعب البحري" },
        { label: "الشعب السكني" },
        { label: "الشرق" },
        { label: "الشعيبة" },
        { label: "الشويخ الصناعيه" },
        { label: "الشويخ السكنيه" },
        { label: "السكراب" },
        { label: "جنوب عبدالله المبارك" },
        { label: "جنوب سعد العبدالله" },
        { label: "الصليبيخات" },
        { label: "الصليبية" },
        { label: "تيماء" },
        { label: "الوفرة" },
        { label: "الوفره السكنيه" },
        { label: "الواحة" },
        { label: "عبدالله المبارك - غرب الجليب" },
        { label: "غرب مشرف - مبارك العبدالله" },
        { label: "الزور" },
        { label: "اسواق القرين - غرب ابوفطيره الحرفيه" },
        { label: "الخيران السكنيه" },
        { label: "الضباعيه" },
    ];


    const handleCategoryOptionSelect = (property) => {
        setSelectedPropertyOption(property.label);
        setIsPropertyDropdownOpen(false);
    };

    const handleAreaOptionSelect = (area) => {
        setSelectedAreasOption(area.label);
        setIsAreasDropdownOpen(false);
    };




    return (
        <>
            <Header />

            <section className="px-4 py-5 md:py-10">
                <div className="max-w-[1000px] mx-auto shadow-3 rounded-3xl px-5 py-5 md:py-10 bg-white">
                    <form className="">
                        <h1 className="text-center font-semibold text-2xl text-[#242424] mb-8">إنشاء إعلان</h1>

                        {/* First Dropdown opens a modal */}
                        <div className="mb-3">
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
                        <div className="relative w-full mb-3">
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
                            className="w-full border border-gray-300 rounded-lg p-4 text-[#242424] font-medium mb-3"
                            placeholder="أدخل العنوان"
                        />

                        {/* Textarea for Description */}
                        <textarea
                            className="w-full border border-gray-300 rounded-lg p-4 text-[#242424] font-medium mb-3"
                            rows="5"
                            placeholder="الوصف"
                        ></textarea>

                        {/* Dropdown for Areas */}
                        <div className="relative w-full mb-3">
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
                                <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg mt-2 shadow-lg h-80 overflow-y-auto dropdown-scrollbar">
                                    <div>
                                        <input type="text" className="w-full p-4 outline-none border-b" />
                                    </div>

                                    <div className="">
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
                                </div>
                            )}
                        </div>

                        <input
                            type="type"
                            className="w-full border border-gray-300 rounded-lg p-4 text-[#242424] font-medium mb-3"
                            placeholder="السعر (د.ك)"
                        />

                        <UploadGallery />

                        {/* Submit Button */}
                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-[#3a7bb7] text-white text-xl font-medium py-2 px-8 rounded-[30px] max-w-96 h-14 w-full hover:opacity-80 transition-opacity duration-500"
                            >
                                التالي
                            </button>
                        </div>
                    </form>
                </div>
            </section>

        </>
    );
};

export default CreateAd;
