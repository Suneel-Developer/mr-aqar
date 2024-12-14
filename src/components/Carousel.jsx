import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import { Link } from 'react-router-dom';
import ImageOne from "../assets/carousel-1.webp";
import ImageTwo from "../assets/carousel-2.webp";

const Carousel = () => {
    return (
        <div className="pt-5 px-3">
            <div className="max-w-[1280px] mx-auto">
                <div className="relative rounded-xl overflow-hidden">
                    <Swiper
                        spaceBetween={40}
                        pagination={false}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        centeredSlides={true}
                        slidesPerView="auto"
                        effect="coverflow"
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 50,
                            depth: 100,
                            modifier: 1,
                            slideShadows: false,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                centeredSlides: true,
                            },
                            768: {
                                slidesPerView: 3,
                                centeredSlides: true,
                            },
                            1024: {
                                slidesPerView: 3,
                                centeredSlides: true,
                            },
                        }}
                        modules={[Autoplay, EffectCoverflow]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="rounded-xl cursor-pointer overflow-hidden my-2 h-[180px] mx-5">
                                <Link to="/create-ad">
                                    <img src={ImageOne} alt="Image" className="w-full h-full object-cover" />
                                </Link>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="rounded-xl cursor-pointer overflow-hidden my-2 h-[180px] mx-5">
                                <Link to="/create-ad">
                                    <img src={ImageTwo} alt="Image" className="w-full h-full object-cover" />
                                </Link>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="rounded-xl cursor-pointer overflow-hidden  my-2 h-[180px] mx-5">
                                <Link to="/create-ad">
                                    <img src={ImageOne} alt="Image" className="w-full h-full object-cover" />
                                </Link>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="rounded-xl cursor-pointer overflow-hidden my-2 h-[180px] mx-5">
                                <Link to="/create-ad">
                                    <img src={ImageTwo} alt="Image" className="w-full h-full object-cover" />
                                </Link>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="rounded-xl cursor-pointer overflow-hidden my-2 h-[180px] mx-5">
                                <Link to="/create-ad">
                                    <img src={ImageTwo} alt="Image" className="w-full h-full object-cover" />
                                </Link>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="rounded-xl cursor-pointer overflow-hidden my-2 h-[180px] mx-5">
                                <Link to="/create-ad">
                                    <img src={ImageTwo} alt="Image" className="w-full h-full object-cover" />
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
