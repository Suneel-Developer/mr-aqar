import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import ImageOne from "../assets/carousel-1.webp"
import ImageTwo from "../assets/carousel-2.webp"


const Carousel = () => {
    return (
        <div className="px-8 pt-5">
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
                            <div className="rounded-xl cursor-pointer overflow-hidden bg-white shadow-2 m-2 h-[140px] shadow-2">
                                <Link to="/create-ad">
                                    <img src={ImageOne} alt="Image" className='w-full h-full object-cover' />
                                </Link>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="rounded-xl cursor-pointer overflow-hidden bg-white shadow-2 m-2 h-[140px] shadow-2">
                                <Link to="/create-ad">
                                    <img src={ImageTwo} alt="Image" className='w-full h-full object-cover' />
                                </Link>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="rounded-xl cursor-pointer overflow-hidden bg-white shadow-2 m-2 h-[140px] shadow-2">
                                <Link to="/create-ad">
                                    <img src={ImageOne} alt="Image" className='w-full h-full object-cover' />
                                </Link>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="rounded-xl cursor-pointer overflow-hidden bg-white shadow-2 m-2 h-[140px] shadow-2">
                                <Link to="/create-ad">
                                    <img src={ImageTwo} alt="Image" className='w-full h-full object-cover' />
                                </Link>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="rounded-xl cursor-pointer overflow-hidden bg-white shadow-2 m-2 h-[140px] shadow-2">
                                <Link to="/create-ad">
                                    <img src={ImageOne} alt="Image" className='w-full h-full object-cover' />
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
