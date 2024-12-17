import React from 'react';
import Header from '../../components/Header';
import AreaSearchDropdwon from './AreaSearchDropdwon';
import PropertyTypeDropdown from './PropertyTypeDropdown';
import Tabs from './Tabs';
import Ads from '../../components/Ads';
import Footer from '../../components/Footer';
import UploadAdBtn from '../../components/UploadAdBtn';
import SearchByWord from './SearchByWord';
import PriceRange from './PriceRange';

const Search = () => {


    return (
        <main>
            <Header />
            <section className="relative pt-5 px-4">
                <div className="max-w-[600px] mx-auto pb-20 relative">
                    <div className="pt-5 md:pt-16 pb-7">
                        <h3 className="text-[#242424] text-2xl md:text-3xl font-medium text-center pb-2 md:pb-4">
                            شقق للإيجار | بيوت للبيع
                        </h3>
                        <p className="text-center text-[#556885]">إبحث عن عقارك مجانًا وبسهولة</p>
                    </div>

                    <div className="flex flex-col gap-4 max-w-[600px] mx-auto w-full">
                        <AreaSearchDropdwon />

                        <div className='flex gap-3 flex-wrap xs:flex-nowrap'>
                            <Tabs />
                            <PropertyTypeDropdown />
                            <PriceRange />
                            <SearchByWord />
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-4 py-10 bg-[#f5f7f9]">
                <div className="max-w-[1000px] mx-auto w-full">
                    <h1 className="text-[#242424] font-bold text-lg md:text-2xl mb-6">
                        شقق للبيع في الكويت
                        <span className='text-[#556885] font-normal mr-2'>(3 إعلان)</span>
                    </h1>
                    <Ads />
                </div>
            </section>

            <UploadAdBtn />
            <Footer />
        </main>
    );
};

export default Search;
