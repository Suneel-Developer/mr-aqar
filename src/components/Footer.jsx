import React from 'react'
import Appfooterlogo from "../assets/app-footer.png"
import HuaweiStorelogo from "../assets/Huawei-Store.png"
import Googleplaystorelogo from "../assets/Google-Play-Store.png"
import AppStorelogo from "../assets/App-Store.png"
import UserProfile from "../assets/user-profile.jpg"
import { Link } from 'react-router-dom'



const Footer = () => {
    return (
        <div className='px-5 pt-10 pb-10 md:pb-0 border-t md:border-t-0 relative bg-white'>
            <div className='max-w-[1280px] w-full mx-auto grid grid-cols-1 md:grid-cols-2'>
                <div className='flex flex-col justify-center items-center gap-10'>
                    <Link to="/myads" className='flex items-center gap-4'>
                        <div className='w-14 md:w-16 h-14 md:h-16 rounded-full overflow-hidden border'>
                            <img src={UserProfile} alt="UserProfile" className='w-full h-full object-cover' />
                        </div>

                        <p className='text-lg font-medium'>حمد</p>

                    </Link>

                    <div className='flex flex-col justify-center items-center'>
                        <h2 className='text-center text-[#085b8f] font-bold text-2xl mb-10'>Download the application</h2>
                        <div className='flex flex-wrap items-center justify-center gap-4'>
                            <Link to="https://apps.apple.com/us/app/mr-aqar/id6443540095">
                                <img src={AppStorelogo} alt="AppStore logo" />
                            </Link>

                            <Link to="https://play.google.com/store/apps/details?id=net.gulfclick.mraqar">
                                <img src={Googleplaystorelogo} alt="Googleplay store logo" />
                            </Link>

                            <Link to="https://play.google.com/store/apps/details?id=net.gulfclick.mraqar">
                                <img src={HuaweiStorelogo} alt="Huawei Store logo" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='hidden md:flex items-center justify-center'>
                    <img src={Appfooterlogo} alt="mr-aqar logo" />
                </div>



            </div>
        </div>
    )
}

export default Footer