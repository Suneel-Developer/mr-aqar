import React, { useState } from 'react'
import Header from '../../components/Header'
import ProfileMenu from '../../components/ProfileMenu'
import { LuCloudUpload } from "react-icons/lu";
import Footer from '../../components/Footer';


const Profile = () => {
    const [fileName, setFileName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("90078005");

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFileName(file.name);
        }
    };



    const handleChange = (e) => {
        const value = e.target.value;
        // Allow only digits and restrict to 8 characters
        if (/^\d{0,8}$/.test(value)) {
            setPhoneNumber(value);
        }
    };

    return (
        <div>
            <Header />

            <section className='py-5 md:py-10 px-4'>
                <div className='max-w-[1280px] w-full mx-auto flex flex-col lg:flex-row gap-5'>
                    <ProfileMenu />

                    <div className='shadow-3 bg-white w-full flex-1 h-fit p-4 space-y-4'>
                        <div>
                            <label htmlFor="full-name" className='block font-medium pb-[6px] text-xs opacity-85'>الاسم الكامل</label>
                            <input type="text" placeholder='اسمك' value="حمد" className='border border-gray-300 rounded-md p-4 text-sm w-full flex-1' />
                        </div>

                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                            <div>
                                <label htmlFor="email" className='block font-medium pb-[6px] text-xs opacity-85'>عنوان البريد الالكترونى</label>
                                <input type="email" placeholder='عنوان البريد الالكترونى' value="hydraashred@gmail.com" className='border border-gray-300 bg-transparent rounded-md p-4 text-sm w-full flex-1' />
                            </div>

                            <div>
                                <label htmlFor="number" className='block font-medium pb-[6px] text-xs opacity-85'>رقم الهاتف</label>
                                <input
                                    type="text"
                                    placeholder="هاتف الشركة"
                                    value={phoneNumber}
                                    onChange={handleChange}
                                    disabled
                                    className="border border-gray-300 bg-transparent rounded-md p-4 text-sm w-full flex-1"
                                />
                            </div>
                        </div>


                        <div className='h-[1px] w-full bg-gray-300'></div>

                        <h2 className='text-lg font-semibold'>إعدادات الشركة</h2>

                        <div>
                            <label htmlFor="company-name" className='block font-medium pb-[6px] text-xs opacity-85'>اسم الشركة</label>
                            <input type="text" placeholder='اسم الشركة' value="AQAR RENT" className='border border-gray-300 rounded-md p-4 text-sm w-full flex-1' />
                        </div>

                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                            <div>
                                <label htmlFor="company-phone" className='block font-medium pb-[6px] text-xs opacity-85'>هاتف الشركة</label>
                                <input
                                    type="text"
                                    placeholder="هاتف الشركة"
                                    value={phoneNumber}
                                    onChange={handleChange}
                                    className="border border-gray-300 bg-transparent rounded-md p-4 text-sm w-full flex-1"
                                />
                            </div>

                            <div>
                                <label htmlFor="company-email" className='block font-medium pb-[6px] text-xs opacity-85'>البريد الإلكتروني للشركة</label>
                                <input type="email" placeholder='البريد الإلكتروني للشركة' className='border border-gray-300 bg-transparent rounded-md p-4 text-sm w-full flex-1' />
                            </div>
                        </div>

                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                            <div>
                                <label htmlFor="instagram-link" className='block font-medium pb-[6px] text-xs opacity-85'>رابط الانستغرام</label>
                                <input type="text" placeholder='رابط الانستغرام' className='border border-gray-300 bg-transparent rounded-md p-4 text-sm w-full flex-1' />
                            </div>

                            <div>
                                <label htmlFor="twitter-link" className='block font-medium pb-[6px] text-xs opacity-85'>رابط تويتر</label>
                                <input type="text" placeholder='رابط تويتر' className='border border-gray-300 bg-transparent rounded-md p-4 text-sm w-full flex-1' />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="profile-picture" className='block font-medium pb-3 pt-4 text-sm opacity-85'>صورة الملف الشخصي</label>

                            {/* Browse Button */}
                            <div className='flex items-center gap-4 pb-4'>
                                <div className="flex items-center space-x-2">
                                    <label
                                        htmlFor="file-upload"
                                        className="cursor-pointer flex items-center gap-2 border text-sm whitespace-nowrap font-medium px-4 py-2 rounded-md text-[#085b8f] border-[#085b8f] hover:bg-blue-100"
                                    >
                                        <span>Browse files</span>
                                        <LuCloudUpload size={20} />
                                    </label>
                                    <input
                                        id="file-upload"
                                        type="file"
                                        className="hidden"
                                        onChange={handleFileChange}
                                    />
                                </div>

                                <div className="text-gray-700 text-sm truncate font-medium">
                                    {fileName ? `${fileName}` : "No file selected"}
                                </div>
                            </div>
                        </div>


                        <button className='bg-[#085b8f] text-white px-8 py-3 rounded font-medium text-sm'>
                            حفظ & تحميل
                        </button>
                    </div>
                </div>
            </section>


            <Footer />
        </div>
    )
}

export default Profile