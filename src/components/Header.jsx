import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/logo_header_ar.png';
import PlusIcon from '../assets/plus-icon.svg';
import { FaWhatsapp, FaInstagram, FaTwitter, FaUserAlt, FaHome } from 'react-icons/fa';
import { MdOutlineLogin } from 'react-icons/md';
import { HiBars3BottomRight } from 'react-icons/hi2';
import { IoMdClose, IoMdCall } from 'react-icons/io';
import { PiBuildingOffice } from 'react-icons/pi';
import { AiOutlineInfoCircle } from "react-icons/ai";
import UserProfile from "../assets/user-profile.jpg"


const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const location = useLocation();


    // Function to toggle modal visibility
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const isActive = (path) => location.pathname === path;

    return (
        <header className="w-full bg-white z-30">
            {/* Top Sub-header */}
            <div className="bg-[#3a7bb7] hidden lg:flex items-center px-4 h-10">
                <div className="max-w-[1280px] mx-auto w-full flex items-center justify-between">
                    <div className="flex items-center gap-4 text-white text-xl">
                        <Link to="https://twitter.com/mr_aqar_?t=MAG8O24oQN6QXBTvheflvw&s=09" target="_blank">
                            <FaTwitter />
                        </Link>
                        <Link to="https://www.instagram.com/mr_aqar_kw/?igshid=YmMyMTA2M2Y=" target="_blank">
                            <FaInstagram />
                        </Link>
                        <Link to="https://api.whatsapp.com/send?phone=wa.me/96590078005&text=Hello,I need your help." target="_blank">
                            <FaWhatsapp />
                        </Link>
                    </div>
                    <div>
                        <ul className="flex items-center gap-5 text-white">
                            <li>
                                <Link to="/register" className="flex items-center gap-2 font-medium text-sm">
                                    <FaUserAlt size={15} /> تسجيل
                                </Link>
                            </li>
                            <li>
                                <Link to="/login" className="flex items-center gap-2 text-sm font-medium">
                                    <MdOutlineLogin size={18} /> تسجيل الدخول
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <header className="shadow-1 bg-white px-4 h-20 flex items-center">
                <div className="max-w-[1280px] w-full mx-auto flex items-center justify-between">
                    {/* Toggle Button */}
                    <button onClick={toggleModal} className="flex lg:hidden text-3xl">
                        <HiBars3BottomRight />
                    </button>

                    {/* Logo */}
                    <div>
                        <Link to="/">
                            <img src={Logo} alt="Logo" className="h-14" />
                        </Link>
                    </div>

                    {/* Navigation */}
                    <nav>
                        <ul className="hidden lg:flex items-center gap-6">
                            {[
                                { path: '/', label: 'الرئيسية' },
                                { path: '/offices', label: 'قائمة المكاتب' },
                                { path: '/aboutus', label: 'نبذه عنا' },
                                { path: '/contactus', label: 'الاتصال بنا' },
                            ].map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className={`${isActive(link.path) ? 'text-[#2e6290]' : 'text-[#242424]'
                                            } font-bold text-base hover:text-[#2e6290] transition-colors duration-300`}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Profile btn when user logged Button */}
                    <Link to="/myads" className='hidden lg:flex items-center gap-4 pt-4 pb-2 px-4'>
                        <div className='w-14 h-14 rounded-full overflow-hidden border'>
                            <img src={UserProfile} alt="UserProfile" className='w-full h-full object-cover' />
                        </div>

                        <p className='text-lg font-medium'>حمد</p>

                    </Link>
                </div>
            </header>

            {/* Mobile Menu */}
            {isModalOpen && (
                <>
                    <div
                        className={`fixed top-0 right-0 w-[324px] bg-white shadow-lg z-50 transform transition-transform duration-300 h-screen overflow-y-auto ${isModalOpen ? 'translate-x-0' : 'translate-x-full'
                            }`}
                    >
                        <div className="flex flex-col justify-between h-full">
                            <div>
                                {/* Header */}
                                <div className="flex items-center justify-between h-20 px-4 shadow-1">
                                    <Link to="/">
                                        <img src={Logo} alt="Logo" className="h-14" />
                                    </Link>
                                    <button onClick={toggleModal}>
                                        <IoMdClose size={30} />
                                    </button>
                                </div>

                                <Link to="/myads" className='flex items-center gap-4 pt-4 pb-2 px-4'>
                                    <div className='w-14 md:w-16 h-14 md:h-16 rounded-full overflow-hidden border'>
                                        <img src={UserProfile} alt="UserProfile" className='w-full h-full object-cover' />
                                    </div>

                                    <p className='text-lg font-medium'>حمد</p>

                                </Link>

                                {/* Links */}
                                <ul className="flex flex-col pe-2 pt-3">
                                    {[
                                        { path: '/', label: 'الرئيسية', icon: <FaHome size={20} /> },
                                        { path: '/offices', label: 'قائمة المكاتب', icon: <PiBuildingOffice size={22} /> },
                                        { path: '/register', label: 'تسجيل', icon: <FaUserAlt size={18} /> },
                                        { path: '/login', label: 'الدخول تسجيل', icon: <MdOutlineLogin size={22} /> },
                                        { path: '/aboutus', label: 'نبذه عنا', icon: <AiOutlineInfoCircle size={22} /> },
                                        { path: '/contactus', label: 'الاتصال بنا', icon: <IoMdCall size={22} /> },
                                    ].map((link) => (
                                        <li key={link.path}>
                                            <Link
                                                to={link.path}
                                                className={`flex items-center gap-3 text-base ${isActive(link.path)
                                                    ? 'bg-[#e8f0f7] text-[#2e6290]'
                                                    : 'bg-transparent text-[#242424]'
                                                    } rounded-e-2xl font-bold ps-6 w-full py-[14px]`}
                                            >
                                                {link.icon} {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                    <li className="my-4 border-b"></li>
                                    <li>
                                        <Link
                                            to="/create-ad"
                                            className={`flex items-center gap-3 text-base rounded-e-2xl font-bold ps-6 w-full py-[14px] ${location.pathname === "/create-ad"
                                                ? "bg-[#e8f0f7] text-[#2e6290]"
                                                : "bg-transparent text-[#242424]"
                                                }`}
                                        >
                                            <img src={PlusIcon} alt="PlusIcon" className="size-6" />
                                            إضافة اعلان
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            {/* Social Links */}
                            <div className="flex items-center justify-center gap-4 pb-20">
                                <Link
                                    to="https://twitter.com/mr_aqar_?t=MAG8O24oQN6QXBTvheflvw&s=09"
                                    target="_blank"
                                    className="bg-[#f5f7f9] text-[#2e6290] rounded-lg p-0 h-10 w-10 flex items-center justify-center"
                                >
                                    <FaTwitter size={20} />
                                </Link>

                                <Link
                                    to="https://www.instagram.com/mr_aqar_kw/?igshid=YmMyMTA2M2Y="
                                    target="_blank"
                                    className="bg-[#f5f7f9] text-[#2e6290] rounded-lg p-0 h-10 w-10 flex items-center justify-center"
                                >
                                    <FaInstagram size={20} />
                                </Link>

                                <Link
                                    to="https://api.whatsapp.com/send?phone=wa.me/96590078005&text=Hello,I need your help."
                                    target="_blank"
                                    className="bg-[#f5f7f9] text-[#2e6290] rounded-lg p-0 h-10 w-10 flex items-center justify-center"
                                >
                                    <FaWhatsapp size={20} />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Overlay */}
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-40"
                        onClick={toggleModal}
                    ></div>
                </>
            )}
        </header>
    );
};

export default Header;
