import React from 'react'
import { Link } from "react-router-dom";

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import CompanyLogoSix from "../../assets/company-5.png"
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { MdOutlineMail } from "react-icons/md";
import { LuTwitter } from "react-icons/lu";
import { IoMdCall } from "react-icons/io";

const Officesdetails = () => {
    return (
        <>
            <Header />

            <section className='px-4 py-10 bg-[#3a7bb7]'>
                <div className='max-w-[670px] mx-auto flex flex-col items-center justify-center'>
                    <div className='size-[144px] p-1 bg-white rounded-lg flex items-center justify-center mb-5'>
                        <img src={CompanyLogoSix} alt="CompanyLogoSix" className='rounded-lg h-full w-full object-contain' />
                    </div>

                    <h2 className='text-lg font-semibold text-center text-white pb-2'>
                        مؤسسة الوثيقة الإقليمية
                    </h2>

                    <p className='text-sm text-center text-white'>
                        Real Estate Marketing Company ‎
                        متخصصون في الاستشارات
                        والتسويق العقاري ‎بيع | شراء خبرة في السوق العقاري منذ عام
                        2006 بيع وشراء : 96612389 | 66674742 | 55684388
                    </p>

                    <div className='flex gap-3 pt-6'>
                        <Link to={`tel:+96565584470`} className="text-base shrink-0 inline-flex items-center gap-1 justify-center select-none whitespace-nowrap transition-opacity hover:opacity-90 duration-300 h-12 rounded-lg font-medium bg-[#38a854] text-white px-2.5">
                            65584470
                            <IoMdCall size={18} />
                        </Link>

                        <Link to="#" className="border border-[#38a854] text-[#38a854] rounded-lg p-1 size-12 flex items-center justify-center bg-white">
                            <FaWhatsapp size={24} />
                        </Link>
                    </div>

                    <div className="flex items-center justify-center flex-wrap gap-2 pt-4">
                        <Link to="" className="flex items-center justify-center rounded-full size-7 bg-[#ffffff29] text-white">
                            <FaInstagram size={16} />
                        </Link>

                        <Link to="" className="flex items-center justify-center rounded-full size-7 bg-[#ffffff29] text-white">
                            <MdOutlineMail size={16} />
                        </Link>

                        <Link to="" className="flex items-center justify-center rounded-full size-7 bg-[#ffffff29] text-white">
                            <LuTwitter size={16} />
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default Officesdetails