import React from 'react'
import Appfooterlogo from "../assets/app-footer.png"
import HuaweiStorelogo from "../assets/Huawei-Store.png"
import Googleplaystorelogo from "../assets/Google-Play-Store.png"
import AppStorelogo from "../assets/App-Store.png"
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='px-5 pt-10 pb-10 md:pb-0 border-t md:border-t-0 mt-5'>
            <div className='max-w-[1280px] w-full mx-auto grid grid-cols-1 md:grid-cols-2'>
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

                <div className='hidden md:flex items-center justify-center'>
                    <img src={Appfooterlogo} alt="mr-aqar logo" />
                </div>

            </div>
        </div>
    )
}

export default Footer