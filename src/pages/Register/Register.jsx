import React, { useState } from 'react'
import Header from '../../components/Header'
import { FaCamera, FaUserAlt } from "react-icons/fa";
import { IoIosUnlock } from "react-icons/io";
import { IoMdCall } from "react-icons/io";
import { IoEyeOff, IoEye } from "react-icons/io5";
import { Link } from 'react-router-dom';





const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [imagePreview, setImagePreview] = useState(null);
    const [isChecked, setIsChecked] = useState(false);

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



    const handleToggle = () => {
        setIsChecked(!isChecked); // Toggle the checkbox state
    };

    return (
        <div>
            <Header />

            <section className='py-20 px-4'>
                <div className='max-w-[400px] w-full mx-auto'>
                    <form>
                        {/* Profile Upload */}
                        <div className="bg-[#3a7bb7] mx-auto rounded-full w-40 h-40 flex items-center justify-center overflow-hidden relative">
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
                                        className="cursor-pointer text-white font-medium flex flex-col gap-3 items-center"
                                    >
                                        <FaCamera className="text-white text-3xl" />
                                        الحميل الصورة
                                    </label>
                                </div>
                            )}
                        </div>

                        <div className='space-y-2 mt-8 mb-4'>
                            <label htmlFor="name" className='font-medium text-[#242424]'>الاسم: اسمك الشخصي او لقب المائلة:</label>
                            <div className='h-14 w-full flex items-center relative'>
                                <FaUserAlt size={18} className='absolute top-0 bottom-0 right-4 m-auto z-30 text-[#3a7bb7]' />
                                <input type="text" className='relative block w-full h-full rounded-lg border pr-12' placeholder='الاسم اسمك الشخصي أو لقب العائلة' />
                            </div>
                        </div>

                        <div className='space-y-2 mb-4'>
                            <label htmlFor="name" className='font-medium text-[#242424]'>اسم المستخدم:</label>
                            <div className='h-14 w-full flex items-center relative'>
                                <FaUserAlt size={18} className='absolute top-0 bottom-0 right-4 m-auto z-30 text-[#3a7bb7]' />
                                <input type="text" className='relative block w-full h-full rounded-lg border pr-12' placeholder='يرجى الاحتفاظ به لعملية تسجيل الدخول' />
                            </div>
                        </div>

                        <div className='space-y-2 mb-4'>
                            <label htmlFor="number" className='font-medium text-[#242424]'>رقم الهاتف:</label>
                            <div className='flex items-center gap-1'>
                                <div className='h-14 flex items-center justify-center font-medium text-base border rounded-lg px-3 text-[#242424]'>
                                    kw+965
                                </div>

                                <div className='h-14 flex-1 flex items-center relative'>
                                    <IoMdCall className='absolute top-0 bottom-0 right-4 m-auto z-30 text-[#3a7bb7] text-xl' />
                                    <input type="text" pattern="\d{8,}"
                                        minLength="8" className='relative block w-full h-full rounded-lg border pr-12' placeholder='اسم المستخدم' />
                                </div>
                            </div>
                        </div>

                        {/* Password Field */}
                        <div className="space-y-2 mb-4">
                            <label htmlFor="password" className="font-medium text-[#242424]">كلمة المرور:</label>
                            <div className="h-14 w-full flex items-center relative">
                                <IoIosUnlock className="absolute top-0 bottom-0 right-4 m-auto z-30 text-[#3a7bb7] text-2xl" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className="relative block w-full h-full rounded-lg border pr-12"
                                     placeholder='كلمة المرور'
                                    id="password"
                                />
                                <button
                                    type="button"
                                    className="absolute top-0 bottom-0 left-4 m-auto z-30 text-[#3a7bb7] text-2xl"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <IoEye /> : <IoEyeOff />}
                                </button>
                            </div>
                        </div>

                        {/* Confirm Password Field */}
                        <div className="space-y-2 mb-6">
                            <label htmlFor="confirm-password" className="font-medium text-[#242424]">تأكيد كلمة المرور:</label>
                            <div className="h-14 w-full flex items-center relative">
                                <IoIosUnlock className="absolute top-0 bottom-0 right-4 m-auto z-30 text-[#3a7bb7] text-2xl" />
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    className="relative block w-full h-full rounded-lg border pr-12"
                                    placeholder="تأكيد كلمة المرور"
                                    id="confirm-password"
                                />
                                <button
                                    type="button"
                                    className="absolute top-0 bottom-0 left-4 m-auto z-30 text-[#3a7bb7] text-2xl"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                >
                                    {showConfirmPassword ? <IoEye /> : <IoEyeOff />}
                                </button>
                            </div>
                        </div>

                        <div
                            className="flex items-center gap-3 cursor-pointer"
                            onClick={handleToggle}
                        >
                            <input
                                type="checkbox"
                                className="w-12 h-12"
                                checked={isChecked}
                                onChange={handleToggle}
                            />
                            <div>
                                <p className="font-medium text-sm">
                                    أوافق على الشروط والأحكام وسياسة التطبيق وعدم نشر الممنوعات و احترام الاعضاء و التجار
                                    في التطبيق
                                </p>
                                <Link to="#" className='text-sm text-red-700 font-semibold hover:underline transition-all duration-500'>الشروط والأحكام</Link>
                            </div>
                        </div>

                        <button className='text-base flex items-center justify-center whitespace-nowrap duration-500 transition-all mt-10 hover:opacity-80 h-12 px-8 rounded-lg font-bold bg-[#3a7bb7] text-white w-full'>
                            التسجيل
                        </button>

                        <p className='text-center text-xs font-medium mt-4 text-[#556885]'>
                            مستخدم قديم ولديك حساب سابقًا؟&nbsp;
                            <Link to="/login" className='text-[#2e6290] font-semibold hover:underline transition-all duration-500'>
                                أدخل إلى حسابك
                            </Link>
                        </p>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Register