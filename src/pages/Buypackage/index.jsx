import React, { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer';
import UploadAdBtn from '../../components/UploadAdBtn';

const Buypackage = () => {
    const [activeTab, setActiveTab] = useState(1);
    return (
        <div>
            <Header />

            <section className='py-5 md:py-10 px-4'>
                <div className='max-w-[1280px] w-full mx-auto'>
                    <div className='border-gray-400 rounded-md border p-4 w-full mx-auto max-w-[400px] mb-8'>
                        <h2 className='w-100 text-center text-base font-semibold mb-6'>الرصید</h2>
                        <div className='flex justify-evenly w-100 px-3 mb-4'>
                            <p className='text-[#085b8f] font-semibold text-sm'>0 إعلانات</p>
                            <p className='text-[#085b8f] font-semibold text-sm'>28 مميز</p>
                        </div>
                    </div>

                    <div>
                        <h2 className='uppercase text-center text-3xl font-semibold mb-2'>شراء باقة</h2>
                        <p className='text-center font-medium text-[#0000008A] text-sm'>اشترك في باقتنا حسب احتياجاتك</p>

                        <div>
                            {/* tabs  */}
                            <div className='flex justify-center mt-5'>
                                <button
                                    className={`h-12 px-4 sm:px-6 text-center font-semibold text-sm border-b-2 ${activeTab === 1 ? 'border-[#085b8f]' : 'border-transparent'
                                        }`}
                                    onClick={() => setActiveTab(1)}
                                >
                                    ادفع حسب الاحتياج
                                </button>

                                <button
                                    className={`h-12 px-4 sm:px-6 text-center font-semibold text-sm border-b-2 ${activeTab === 2 ? 'border-[#085b8f]' : 'border-transparent'
                                        }`}
                                    onClick={() => setActiveTab(2)}
                                >
                                    اشتراك طويل الأمد
                                </button>
                            </div>



                            <div className='pt-10 max-w-[1280px] mx-auto'>
                                {activeTab === 1 && (
                                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
                                        <div className='rounded-md overflow-hidden shadow-3'>
                                            <div className='bg-[#085b8f] text-white flex flex-col items-center justify-center p-2 min-h-[130px]'>
                                                <h1 className='text-center font-bold text-3xl mb-2'>3.9<small className='font-normal text-xl'> د.ك</small></h1>
                                                <p className='text-center text-sm'>
                                                    اعلان عادي
                                                </p>
                                            </div>

                                            <div className='p-4 flex flex-col items-center'>
                                                <p class="mb-4 text-sm text-center">
                                                    اعلان  لمده شهر
                                                </p>

                                                <div>
                                                    <label className='font-medium text-sm'>عدد الإعلانات</label>
                                                    <input type="number" value={1} min={1} className='w-full border border-gray-300 p-3 rounded-md mt-[6px] font-medium mb-5' />
                                                </div>

                                                <button className='bg-[#085b8f] h-9 px-6 py-1 font-medium text-sm text-center text-white rounded-md  hover:opacity-90 transition-opacity duration-300'>
                                                    شراء
                                                </button>
                                            </div>
                                        </div>

                                        <div className='rounded-md overflow-hidden shadow-3'>
                                            <div className='bg-[#085b8f] text-white flex flex-col items-center justify-center p-2 min-h-[130px]'>
                                                <h1 className='text-center font-bold text-3xl mb-2'>5 <small className='font-normal text-xl'> د.ك</small></h1>
                                                <p className='text-center text-sm'>
                                                    اعلان مميز
                                                </p>
                                            </div>

                                            <div className='p-4 flex flex-col items-center'>
                                                <p class=" mb-4 text-sm text-center">
                                                    - تثبيت إعلانك 14 يوم مميز
                                                </p>

                                                <div>
                                                    <label className='font-medium text-sm'>عدد الإعلانات</label>
                                                    <input type="number" value={1} min={1} className='w-full border border-gray-300 p-3 rounded-md mt-[6px] font-medium mb-5' />
                                                </div>

                                                <button className='bg-[#085b8f] h-9 px-6 py-1 font-medium text-sm text-center text-white rounded-md hover:opacity-90 transition-opacity duration-300'>
                                                    شراء
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 2 && (
                                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
                                        <div className='rounded-md overflow-hidden shadow-3'>
                                            <div className='bg-[#085b8f] text-white flex flex-col items-center justify-center p-2 min-h-[130px]'>
                                                <h1 className='text-center font-bold text-3xl mb-2'>  100 <small className='font-normal text-xl'> د.ك</small></h1>
                                                <p className='text-center text-sm'>
                                                    30 اعلان عادي
                                                </p>
                                            </div>

                                            <div className='p-4 flex flex-col items-center'>
                                                <p class="py-2 mb-4 text-sm text-center">-ثبت اعلانك العادي لمدة 30 يوم</p>

                                                <button className='bg-[#085b8f] h-9 px-6 py-1 font-medium text-sm text-center text-white rounded-md  hover:opacity-90 transition-opacity duration-300'>
                                                    شراء
                                                </button>
                                            </div>
                                        </div>

                                        <div className='rounded-md overflow-hidden shadow-3'>
                                            <div className='bg-[#085b8f] text-white flex flex-col items-center justify-center p-2 min-h-[130px]'>
                                                <h1 className='text-center font-bold text-3xl mb-2'>150 <small className='font-normal text-xl'> د.ك</small></h1>
                                                <p className='text-center text-sm'>
                                                    30 اعلان مميز
                                                </p>
                                            </div>

                                            <div className='p-4 flex flex-col items-center'>
                                                <p class="py-2 mb-4 text-sm text-center">
                                                    -تمييز إعلانك بلون أزرق
                                                    -مدة كل إعلان 14 يوم
                                                    - زيادة مشاهدات
                                                </p>

                                                <button className='bg-[#085b8f] h-9 px-6 py-1 font-medium text-sm text-center text-white rounded-md hover:opacity-90 transition-opacity duration-300'>
                                                    شراء
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <UploadAdBtn />
            <Footer />
        </div>
    )
}

export default Buypackage