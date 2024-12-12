import React from 'react'
import profile from "../assets/company-5.png"
import { Link, useLocation } from 'react-router-dom';
import { MdLock, MdEdit } from "react-icons/md";
import { FaCirclePlus } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";

const HeaderProfileMenu = () => {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    return (
        <div className='shadow-3 bg-white rounded-b h-fit absolute top-[30px] left-0 w-[250px]' >
            {/* header  */}
            <div div className='p-4 flex items-center' >
                <div className='w-10 h-10 rounded-full overflow-hidden'>
                    <img src={profile} alt="profile" className='w-full h-full rounded-full object-cover' />
                </div>
                <div>
                    <p className='mx-3 text-lg font-medium text-[#0000008A]'>حمد</p>
                    <p className='mx-3 text-xs font-medium flex items-center gap-3 text-[#0000008A]'>
                        <span>0 إعلانات</span>
                        <span>28 مميز</span>
                    </p>
                </div>
            </div>

            <ul className='p-2 border-t'>
                {[
                    { path: '/buypackage', label: 'شراء باقة', icon: <FaCirclePlus size={18} className='mx-4' /> },
                    { path: '/myads', label: 'اعلاناتي', icon: <FaHome size={18} className='mx-4' /> },
                    { path: '/profile', label: 'تعديل الملف الشخصي', icon: <MdEdit size={18} className='mx-4' /> },
                ].map((link) => (
                    <li key={link.path}>
                        <Link
                            to={link.path}
                            className={`h-10 flex items-center text-sm font-medium ${isActive(link.path)
                                ? 'bg-[#085b8f] text-white'
                                : 'bg-transparent text-[#242424] hover:bg-[#e8f0f7] transition-all duration-300'
                                } rounded w-full`}
                        >
                            {link.icon} {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div >
    )
}

export default HeaderProfileMenu