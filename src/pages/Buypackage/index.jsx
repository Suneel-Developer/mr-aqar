import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer';
import UploadAdBtn from '../../components/UploadAdBtn';

const Buypackage = () => {

    return (
        <div className='bg-[#F6F7F9]'>
            <Header />

            <section className='py-5 md:py-10 px-4'>
                <div className='max-w-[1280px] w-full mx-auto'>
                    <div className='border-gray-400 rounded-md border p-2 w-full mx-auto max-w-[400px] mb-4'>
                        <h2 className='w-100 text-center text-sm font-semibold mb-2'>الرصید</h2>
                        <div className='flex justify-evenly w-100 px-3'>
                            <p className='text-[#085b8f] font-semibold text-xs'>0 إعلانات</p>
                            <p className='text-[#085b8f] font-semibold text-xs'>28 مميز</p>
                        </div>
                    </div>

                    <div>
                        <h2 className='uppercase text-center text-3xl font-semibold mb-2'>شراء باقة</h2>
                        <p className='text-center font-medium text-[#0000008A] text-sm'>اشترك في باقتنا حسب احتياجاتك</p>


                        <div className='pt-10 max-w-[1000px]'>
                            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                                <div className='rounded-md overflow-hidden shadow-2 bg-white p-2 relative'>
                                    <p class=" mb-4 text-sm text-right">
                                        - تثبيت إعلانك <span className='font-semibold'>30</span> يوم مميز
                                    </p>

                                    <div className='bg-[#DE233E] w-fit px-3 py-[6px] leading-3 text-white font-medium absolute top-0 left-0 text-sm'>
                                        مميز
                                    </div>

                                    <div className='grid grid-cols-2 gap-2'>
                                        <div>
                                            <div>
                                                <label className='font-medium text-xs'>عدد الإعلانات</label>
                                                <input type="number" value={1} min={1} className='w-full border border-gray-300 p-3 rounded-md mt-1 font-medium mb-2' />
                                            </div>

                                            <button className='bg-[#1976D4] h-9 px-6 py-1 font-medium text-sm text-center text-white rounded-md  hover:opacity-90 transition-opacity duration-300'>
                                                شراء
                                            </button>
                                        </div>

                                        <div className='flex items-center flex-col justify-center'>
                                            <h2 className='text-[#05446F] font-bold text-base mb-2'>عرض خاص</h2>

                                            <div className='bg-[#e8f0f7] border-2 border-gray-200 text-[#2e6290] mb-2 rounded px-2 py-1 w-full flex items-center font-medium text-sm justify-center'>
                                                1 إعلان - <span className='font-bold mx-1 text-black'>5</span> دك
                                            </div>

                                            <div className='bg-[#e8f0f7] border-2 border-gray-200 text-[#2e6290] rounded px-2 py-1 w-full flex items-center font-medium text-sm justify-center'>
                                                5 إعلانات - <span className='font-bold mx-1 text-black'>20</span> دك
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='rounded-md overflow-hidden shadow-2 bg-white p-2 relative py-12'>
                                    <div className='bg-[#044472] w-fit px-3 py-[6px] leading-3 rounded-sm text-white font-medium absolute top-0 left-0 text-sm'>
                                        باقة المكاتب
                                    </div>

                                    <div className='max-w-[70%] mx-auto w-full flex items-center flex-col justify-center h-full'>
                                        <div className='bg-[#e8f0f7] border-2 border-gray-200 text-[#2e6290] mb-2 rounded-md px-2 py-1 w-full flex items-center font-medium text-sm justify-center'>
                                            شهرين - 30 إعلان - <span className='font-bold mx-1 text-black'>80</span>  دك

                                        </div>

                                        <div className='bg-[#e8f0f7] border-2 border-gray-200 text-[#2e6290] rounded px-2 py-1 w-full flex items-center font-medium text-sm justify-center'>
                                            5 إعلانات - <span className='font-bold mx-1 text-black'>20</span> دك
                                        </div>
                                    </div>
                                </div>

                                <div className='rounded-md overflow-hidden shadow-2 bg-white p-2 relative'>
                                    <p class=" mb-4 text-sm text-right">
                                        - تثبيت إعلانك <span className='font-semibold'>14</span> يوم مميز
                                    </p>

                                    <div className='bg-[#76A835] w-fit px-3 py-[6px] leading-3 text-white font-medium absolute top-0 left-0 text-sm'>
                                        رصيد إضافي
                                    </div>

                                    <div className='grid grid-cols-2 gap-2'>
                                        <div>
                                            <div>
                                                <label className='font-medium text-xs'>عدد الإعلانات</label>
                                                <input type="number" value={1} min={1} className='w-full border border-gray-300 p-3 rounded-md mt-1 font-medium mb-2' />
                                            </div>

                                            <button className='bg-[#1976D4] h-9 px-6 py-1 font-medium text-sm text-center text-white rounded-md  hover:opacity-90 transition-opacity duration-300'>
                                                شراء
                                            </button>
                                        </div>

                                        <div className='flex items-center flex-col justify-center'>
                                            <h2 className='text-[#05446F] font-bold text-base mb-2'>عرض خاص</h2>

                                            <div className='bg-[#e8f0f7] border-2 border-gray-200 mb-2 text-[#2e6290] rounded px-2 py-1 w-full flex items-center font-medium text-sm justify-center'>
                                                3 إعلان - <span className='font-bold mx-1 text-black'>10</span> دك
                                            </div>

                                            <div className='bg-[#e8f0f7] border-2 border-gray-200 rounded text-[#2e6290] px-2 py-1 w-full flex items-center font-medium text-sm justify-center'>
                                                6 إعلانات - <span className='font-bold mx-1 text-black'>150</span> دك
                                            </div>
                                        </div>
                                    </div>
                                </div>
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