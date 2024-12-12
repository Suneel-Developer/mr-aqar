import React from 'react'
import Header from '../../components/Header'
import ProfileMenu from '../../components/ProfileMenu'

const ChangePassword = () => {
    return (
        <div>
            <Header />

            <section className='py-5 md:py-10 px-4'>
                <div className='max-w-[1280px] w-full mx-auto flex flex-col lg:flex-row gap-5'>
                    <ProfileMenu />

                    <div className='shadow-3 bg-white w-full flex-1 h-fit p-4 space-y-4'>
                        <input type="password" placeholder='كلمة المرور الحالية' className='border border-gray-300 rounded-md p-4 text-sm w-full flex-1' />

                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                            <input type="password" placeholder='كلمة السر الجديدة' className='border border-gray-300 rounded-md p-4 text-sm w-full flex-1' />
                            <input type="password" placeholder='تأكيد كلمة السر' className='border border-gray-300 rounded-md p-4 text-sm w-full flex-1' />
                        </div>

                        <button className='bg-[#085b8f] text-white px-4 py-2 rounded font-medium text-sm'>
                            حفظ & تحميل
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ChangePassword