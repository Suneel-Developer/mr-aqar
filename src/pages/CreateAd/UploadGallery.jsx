import React, { useState } from 'react'
import { MdOutlineImage } from "react-icons/md";
import { RiPencilFill } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";


const UploadGallery = () => {

    const [images, setImages] = useState([]);

    // Handle image selection
    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        const newImages = files.map((file) => URL.createObjectURL(file));
        setImages([...images, ...newImages]);
    };

    // Remove image
    const handleRemoveImage = (index) => {
        setImages(images.filter((_, i) => i !== index));
    };

    // Replace image on edit
    const handleReplaceImage = (e, index) => {
        const file = e.target.files[0];
        if (file) {
            const newImage = URL.createObjectURL(file);
            const updatedImages = [...images];
            updatedImages[index] = newImage; 
            setImages(updatedImages);
        }
    };
    return (
        <div>
            {/* Add Images Section */}
            <div className="bg-gray-50 border rounded-xl p-4 text-center mb-4 space-y-3">
                <div className="bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center mx-auto">
                    <MdOutlineImage size={20} className='text-gray-500' />
                </div>

                <h3 className="font-semibold text-sm md:text-base">
                    Images attract interest to your ad!
                </h3>

                <p className="text-xs text-gray-500">
                    Pick images from different angles with different details. You can
                    upload up to 12 images (we recommend horizontal images).
                </p>

                <label className="block mt-4">
                    <input
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                    />
                    <div className="cursor-pointer inline-block border border-blue-500 px-4 py-2 text-sm text-blue-500 font-medium">
                        Select Images
                    </div>
                </label>
            </div>

            {/* Uploaded Images */}
            <div className="flex flex-wrap gap-3 mb-6">
                {images.map((src, index) => (
                    <div
                        key={index}
                        className="relative w-20 md:w-24 h-20 md:h-24 rounded overflow-hidden bg-gray-100"
                    >
                        <img
                            src={src}
                            alt={`uploaded ${index}`}
                            className="w-full h-full object-cover"
                        />
                        {/* Edit Button */}
                        <label className="absolute bottom-1 left-1 bg-black bg-opacity-50 text-white w-5 h-5 rounded-full flex justify-center items-center cursor-pointer">
                            <RiPencilFill size={13} />
                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => handleReplaceImage(e, index)}
                                className="hidden"
                            />
                        </label>
                        {/* Delete Button */}
                        <button
                            onClick={() => handleRemoveImage(index)}
                            type='button'
                            className="absolute top-1 right-1 bg-black bg-opacity-50 text-white w-5 h-5 rounded-full flex justify-center items-center"
                        >
                        <IoCloseOutline size={16} /> 
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default UploadGallery