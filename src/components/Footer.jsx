import React from 'react'
import HuaweiStorelogo from "../assets/Huawei-Store.png"
import Googleplaystorelogo from "../assets/Google-Play-Store.png"
import AppStorelogo from "../assets/App-Store.png"
import { Link } from 'react-router-dom'



const Footer = () => {
    return (
        <div className='px-4 py-16 relative bg-[#2e6290] mt-10'>
            <div className='max-w-[1280px] w-full mx-auto flex items-center gap-20 lg:gap-10 flex-col lg:flex-row'>
                <div className='flex-1 max-w-[1000px] w-full grid grid-cols-2 md:grid-cols-4 gap-8'>
                    <div>
                        <h3 className='font-bold mb-2 text-xl text-white'>عقارات للايجار</h3>

                        <ul className='text-white space-y-2 list-none'>
                            <li>
                                <Link to="/search" className='text-sm'>شقق للايجار</Link>
                            </li>

                            <li>
                                <Link to="/search" className='text-sm'>بيوت للايجار</Link>
                            </li>

                            <li>
                                <Link to="/search" className='text-sm'>تجاري للايجار</Link>
                            </li>

                            <li>
                                <Link to="/search" className='text-sm'>عمارات للايجار</Link>
                            </li>

                            <li>
                                <Link to="/search" className='text-sm'>شاليهات للايجار</Link>
                            </li>

                            <li>
                                <Link to="/search" className='text-sm'>مزارع للايجار</Link>
                            </li>

                            <li>
                                <Link to="/search" className='text-sm'>أراضي للايجار</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className='font-bold mb-2 text-xl text-white'>عقارات للبيع</h3>

                        <ul className='text-white space-y-2 list-none'>
                            <li>
                                <Link to="/search" className='text-sm'>بيوت للبيع</Link>
                            </li>
                            <li>
                                <Link to="/search" className='text-sm'>أراضي للبيع</Link>
                            </li>
                            <li>
                                <Link to="/search" className='text-sm'>عمارات للبيع</Link>
                            </li>
                            <li>
                                <Link to="/search" className='text-sm'>شقق للبيع</Link>
                            </li>
                            <li>
                                <Link to="/search" className='text-sm'>شاليهات للبيع</Link>
                            </li>
                            <li>
                                <Link to="/search" className='text-sm'>تجاري للبيع</Link>
                            </li>
                            <li>
                                <Link to="/search" className='text-sm'>مزارع للبيع</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className='font-bold mb-2 text-xl text-white'>عقارات للبدل</h3>
                        <ul className='text-white space-y-2 list-none'>
                            <li>
                                <Link to="/search" className='text-sm'>أراضي للبدل</Link>
                            </li>
                            <li>
                                <Link to="/search" className='text-sm'>بيوت للبدل</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className='font-bold mb-2 text-xl text-white'>صفحات</h3>
                        <ul className='text-white space-y-2 list-none'>
                            <li>
                                <Link to="/search" className='text-sm'>نبذه عنا</Link>
                            </li>
                            <li>
                                <Link to="/search" className='text-sm'>اتصل بنا</Link>
                            </li>
                            <li>
                                <Link to="/search" className='text-sm'>الشروط والأحكام</Link>
                            </li>
                            <li>
                                <Link to="/search" className='text-sm'>خريطة الموقع</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div>
                    <h2 className='text-center text-white font-bold text-2xl mb-5'>تحمیل التطبیق</h2>
                    <div className='flex flex-wrap items-center justify-center gap-4'>
                        <Link to="https://apps.apple.com/us/app/mr-aqar/id6443540095">
                            <img src={AppStorelogo} alt="AppStore logo" className='h-10' />
                        </Link>

                        <Link to="https://play.google.com/store/apps/details?id=net.gulfclick.mraqar">
                            <img src={Googleplaystorelogo} alt="Googleplay store logo" className='h-10' />
                        </Link>

                        <Link to="https://play.google.com/store/apps/details?id=net.gulfclick.mraqar">
                            <img src={HuaweiStorelogo} alt="Huawei Store logo" className='h-10' />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer

