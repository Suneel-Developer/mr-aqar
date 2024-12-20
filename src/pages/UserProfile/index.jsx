import React, { useState } from 'react'
import Header from '../../components/Header'
import ProfileMenu from '../../components/ProfileMenu'
import { LuCloudUpload } from "react-icons/lu";
import UploadAdBtn from '../../components/UploadAdBtn';
import Profile from "../../assets/user-profile.jpg"
import CallIcon from "../../assets/call-icon.svg"
import { FaWhatsapp } from "react-icons/fa";
import Ads from '../Search/Ads';
import Footer from '../../components/Footer';


const UserProfile = () => {


    return (
        <div>
            <Header />

            <section>
                <div className='bg-[#3A7AB7] py-10 md:py-20 px-4'>
                    <div className='max-w-[1280px] w-full mx-auto'>
                        <div className='w-24 md:w-40 mx-auto h-24 md:h-40 rounded-full overflow-hidden'>
                            <img src={Profile} alt="" className='w-full h-full object-cover' />
                        </div>

                        <h1 className='py-4 text-3xl font-medium text-center text-white'>حمد</h1>

                        <p className='max-w-[400px] w-full mx-auto text-white text-lg py-4 text-center'>
                            للايجار شقه في السرداب في منطقه ابو فطيره تشطيب سوبر ديلوكس اربع غرف نوم
                        </p>

                        <div className="flex gap-3 justify-center pt-4">
                            <a href="tel:+90078005" className="text-base shrink-0 inline-flex text-white items-center justify-center whitespace-nowrap transition-colors h-12 rounded-lg font-bold bg-[#38a854] px-2.5">
                                <p className="text-xl font-normal">90078005</p>
                                <img src={CallIcon} alt="CallIcon" className="shrink-0 fill-current w-6 h-6 mr-1" />
                            </a>

                            <a href="" className="bg-white text-[#38a854] rounded-lg p-1 bg-main size-12 flex items-center justify-center">
                                <FaWhatsapp size={24} />
                            </a>
                        </div>

                    </div>
                </div>

                <div className='max-w-[800px] w-full mx-auto py-20 px-4'>
                    <h1 className='pb-7 text-xl font-semibold'>اعلاناتي</h1>
                    <Ads />
                </div>
            </section>


            <Footer />
            <UploadAdBtn />
        </div>
    )
}

export default UserProfile