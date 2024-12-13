import React from "react";
import { IoMdClose } from "react-icons/io";


const AdTypeModal = ({ isOpen, onClose, onSelect, categories }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-[500px] p-3 md:p-6 relative">
                <div className="flex items-center justify-between gap-4 mb-6">
                    <h2 className="text-lg font-semibold text-gray-800">اختر القسم المناسب لوضع إعلانك</h2>
                    <button
                        className="text-2xl"
                        onClick={onClose}
                    >
                        <IoMdClose />
                    </button>
                </div>

                <div className="grid grid-cols-3 gap-2">
                    {categories.map((category, index) => (
                        <button
                            key={index}
                            type="button"
                            className="flex flex-col items-center justify-center border border-gray-300 p-2 text-sm rounded-lg text-gray-800 hover:bg-gray-100 font-medium"
                            onClick={() => {
                                onSelect(category.categoryname);
                                onClose();
                            }}
                        >
                            <img src={category.logo} alt={category.categoryname} className="w-auto h-12 mb-2" />
                            {category.categoryname}
                        </button>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default AdTypeModal;
