import React from 'react'
import Header from '../../components/Header'
import AreaSearchDropdwon from './AreaSearchDropdwon'
import PropertyTypeDropdown from './PropertyTypeDropdown'
import Tabs from './Tabs'
import Ads from '../../components/Ads'
import Footer from '../../components/Footer'
import UploadAdBtn from '../../components/UploadAdBtn'

const Category = () => {

    return (
        <main>
            <Header />
            <section className='relative z-0 bo-px-page pt-5 md:pt-10 min-h-[calc(100lvh-80px)] px-4'>
                <div className='bo-home-top-section-bg  min-h-[calc(100lvh-80px)] absolute inset-0'></div>
                <div className='sm:max-w-96 sm:mx-auto pb-28 relative'>
                    <div className='pt-5 md:pt-16 pb-7'>
                        <h3 className='text-[#242424] text-2xl md:text-3xl font-medium text-center pb-2 md:pb-4'>شقق للإيجار | بيوت للبيع</h3>
                        <p className='text-center text-[#556885]'>إبحث عن عقارك مجانًا وبسهولة</p>
                    </div>

                    <div className='flex flex-col gap-4 max-w-[384px] mx-auto w-full'>
                        <AreaSearchDropdwon />
                        <PropertyTypeDropdown />
                        <Tabs />

                        <button className='text-base shrink-0 inline-flex items-center justify-center mt-2 select-none whitespace-nowrap transition-colors h-12 px-8 font-bold bg-[#3a7bb7] text-white w-full rounded-full'>
                            بحث
                        </button>
                    </div>
                </div>
            </section>

            <section className='px-4 py-10 bg-[#f5f7f9]'>
                <div className='max-w-[1000px] mx-auto w-full'>
                    <h1 className='text-[#242424] font-bold text-lg md:text-2xl mb-6'>أحدث إعلانات العقارات في الكويت</h1>
                    <Ads />
                </div>
            </section>


            <UploadAdBtn />
            <Footer />
        </main>
    )
}

export default Category
