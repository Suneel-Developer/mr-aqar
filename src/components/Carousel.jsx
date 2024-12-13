import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Carousel = () => {
    return (
        <div className="px-4 pt-5">
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
                            <div className="rounded-xl cursor-pointer overflow-hidden bg-[#3a7bb7] h-[100px] shadow-2 flex items-center justify-center">
                                <Link to="/create-ad" className='text-white'>
                                    إضافة اعلان
                                </Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="rounded-xl cursor-pointer overflow-hidden bg-[#3a7bb7] h-[100px] shadow-2 flex items-center justify-center">
                                <Link to="/create-ad" className='text-white'>
                                    إضافة اعلان
                                </Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="rounded-xl cursor-pointer overflow-hidden bg-[#3a7bb7] h-[100px] shadow-2 flex items-center justify-center">
                                <Link to="/create-ad" className='text-white'>
                                    إضافة اعلان
                                </Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="rounded-xl cursor-pointer overflow-hidden bg-[#3a7bb7] h-[100px] shadow-2 flex items-center justify-center">
                                <Link to="/create-ad" className='text-white'>
                                    إضافة اعلان
                                </Link>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="rounded-xl cursor-pointer overflow-hidden bg-[#3a7bb7] h-[100px] shadow-2 flex items-center justify-center">
                                <Link to="/create-ad" className='text-white'>
                                    إضافة اعلان
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
