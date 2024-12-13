import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { FiPlusCircle } from "react-icons/fi";


const Carousel = () => {
    return (
        <div className="px-14 pt-5">
            <div className="max-w-[1280px] mx-auto">
                <div className="relative rounded-xl overflow-hidden">
                    <Swiper
                        spaceBetween={10}
                        pagination={false}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        breakpoints={{
                            10: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 4,
                            },
                        }}
                        modules={[Autoplay]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="rounded-[40px] cursor-pointer overflow-hidden bg-white shadow-2 m-2 h-[140px] shadow-2 p-2">
                                <Link to="/create-ad" className='text-black w-full h-full flex flex-col items-center justify-center gap-4 font-semibold text-2xl'>
                                    <FiPlusCircle size={30} className='text-[#085b8f]' />
                                    أضف الإعلان هنا
                                </Link>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="rounded-[40px] cursor-pointer overflow-hidden bg-white shadow-2 m-2 h-[140px] shadow-2 p-2">
                                <Link to="/create-ad" className='text-black w-full h-full flex flex-col items-center justify-center gap-4 font-semibold text-2xl'>
                                    <FiPlusCircle size={30} className='text-[#085b8f]' />
                                    أضف الإعلان هنا
                                </Link>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="rounded-[40px] cursor-pointer overflow-hidden bg-white shadow-2 m-2 h-[140px] shadow-2 p-2">
                                <Link to="/create-ad" className='text-black w-full h-full flex flex-col items-center justify-center gap-4 font-semibold text-2xl'>
                                    <FiPlusCircle size={30} className='text-[#085b8f]' />
                                    أضف الإعلان هنا
                                </Link>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="rounded-[40px] cursor-pointer overflow-hidden bg-white shadow-2 m-2 h-[140px] shadow-2 p-2">
                                <Link to="/create-ad" className='text-black w-full h-full flex flex-col items-center justify-center gap-4 font-semibold text-2xl'>
                                    <FiPlusCircle size={30} className='text-[#085b8f]' />
                                    أضف الإعلان هنا
                                </Link>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="rounded-[40px] cursor-pointer overflow-hidden bg-white shadow-2 m-2 h-[140px] shadow-2 p-2">
                                <Link to="/create-ad" className='text-black w-full h-full flex flex-col items-center justify-center gap-4 font-semibold text-2xl'>
                                    <FiPlusCircle size={30} className='text-[#085b8f]' />
                                    أضف الإعلان هنا
                                </Link>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
