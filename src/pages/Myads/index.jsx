import React from 'react'
import Header from '../../components/Header'
import ProfileMenu from '../../components/ProfileMenu'
import { Link } from 'react-router-dom';
import AdsImg from "../../assets/adone.jpg"
import { MdEdit } from "react-icons/md";
import UploadAdBtn from '../../components/UploadAdBtn';


const Myads = () => {


    return (
        <div>
            <Header />

            <section className='py-5 md:py-10 px-4'>
                <div className='max-w-[1280px] w-full mx-auto flex flex-col lg:flex-row gap-5'>
                    <ProfileMenu />

                    <div className='shadow-3 bg-white w-full flex-1 h-fit p-4 space-y-4'>
                        <div className='border-gray-300 rounded-md border p-4 w-full mb-5'>
                            <h2 className='w-100 text-center text-base font-semibold mb-6'>الرصید</h2>
                            <div className='flex justify-evenly w-100 px-3 mb-4'>
                                <p className='text-[#085b8f] font-semibold text-sm'>0 إعلانات</p>
                                <p className='text-[#085b8f] font-semibold text-sm'>28 مميز</p>
                            </div>

                            <div className='flex justify-center'>
                                <Link to="/buypackage" className='text-center mx-auto text-[#25a3d6] underline font-semibold text-sm'>شراء باقة</Link>
                            </div>
                        </div>

                        <div>
                            <h2 className='text-lg font-semibold mb-4'>اعلاناتي</h2>

                            <div className="overflow-x-auto w-full block bg-white rounded-lg border">
                                <table className="w-full border-collapse">
                                    <thead className="bg-[#F9FAFB]">
                                        <tr>
                                            <th className="border-b border-[#dae0ec] uppercase text-black/80 text-xs font-semibold py-8 px-2 text-center whitespace-nowrap">
                                                صورة
                                            </th>

                                            <th className="border-b border-[#dae0ec] uppercase text-black/80 text-xs font-semibold py-8 px-[.9rem] text-center whitespace-nowrap">
                                                نوع الإعلان
                                            </th>

                                            <th className="border-b border-[#dae0ec] uppercase text-black/80 text-xs font-semibold py-8 px-[.9rem] text-center whitespace-nowrap">
                                                العنوان
                                            </th>

                                            <th className="border-b border-[#dae0ec] uppercase text-black/80 text-xs font-semibold py-8 px-[.9rem] text-center whitespace-nowrap">
                                                السعر
                                            </th>

                                            <th className="border-b border-[#dae0ec] uppercase text-black/80 text-xs font-semibold py-8 px-[.9rem] text-center whitespace-nowrap">
                                                الإجراء
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr className="hover:bg-hoverbgtable text-center">
                                            <td className="border-t border-[#f2f2f2] py-2 px-2 text-[#212837] text-sm whitespace-nowrap text-center">
                                                <img
                                                    src={AdsImg}
                                                    alt="ProductImg"
                                                    className="rounded min-w-24 h-24 object-cover mx-auto"
                                                />
                                            </td>

                                            <td className="border-t border-[#f2f2f2] px-[.9rem] py-5 whitespace-nowrap text-center">
                                                مميز
                                            </td>

                                            <td className="border-t border-[#f2f2f2] px-[.9rem] py-5 font-medium text-[#212837] text-sm whitespace-nowrap">
                                                مبارك الكبير
                                                - أبو فطيرة

                                            </td>

                                            <td className="border-t border-[#f2f2f2] px-[.9rem] py-5 font-medium text-[#212837] text-sm whitespace-nowrap text-center">
                                                900 د.ك
                                            </td>

                                            <td className="border-t border-[#f2f2f2] px-[.9rem] py-5 font-medium text-[#0671E3] text-sm whitespace-nowrap text-center">
                                                <div className='flex justify-center'>
                                                    <Link to='#'><MdEdit size={20} className='text-[#085b8f]' /> </Link>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr className="hover:bg-hoverbgtable text-center">
                                            <td className="border-t border-[#f2f2f2] py-2 px-2 text-[#212837] text-sm whitespace-nowrap text-center">
                                                <img
                                                    src={AdsImg}
                                                    alt="ProductImg"
                                                    className="rounded min-w-24 h-24 object-cover mx-auto"
                                                />
                                            </td>

                                            <td className="border-t border-[#f2f2f2] px-[.9rem] py-5 whitespace-nowrap text-center">
                                                مميز
                                            </td>

                                            <td className="border-t border-[#f2f2f2] px-[.9rem] py-5 font-medium text-[#212837] text-sm whitespace-nowrap">
                                                مبارك الكبير
                                                - أبو فطيرة

                                            </td>

                                            <td className="border-t border-[#f2f2f2] px-[.9rem] py-5 font-medium text-[#212837] text-sm whitespace-nowrap text-center">
                                                900 د.ك
                                            </td>

                                            <td className="border-t border-[#f2f2f2] px-[.9rem] py-5 font-medium text-[#0671E3] text-sm whitespace-nowrap text-center">
                                                <div className='flex justify-center'>
                                                    <Link to='#'><MdEdit size={20} className='text-[#085b8f]' /> </Link>
                                                </div>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <UploadAdBtn />
        </div>
    )
}

export default Myads