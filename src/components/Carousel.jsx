import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import { Link } from 'react-router-dom';
import ImageOne from "../assets/house-1.jpg";
import ImageTwo from "../assets/house-2.jpg";
import ImageThree from "../assets/house-3.webp";
import ImageFour from "../assets/house-4.jpg";
import ImageFive from "../assets/house-5.jpg";
import ImageSix from "../assets/house-6.jpg";

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
                                    <img src={ImageOne} alt="gallery" className="w-full h-full object-cover" />
                                </Link>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="rounded-xl cursor-pointer overflow-hidden my-2 h-[180px] mx-5">
                                <Link to="/create-ad">
                                    <img src={ImageTwo} alt="gallery" className="w-full h-full object-cover" />
                                </Link>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="rounded-xl cursor-pointer overflow-hidden  my-2 h-[180px] mx-5">
                                <Link to="/create-ad">
                                    <img src={ImageThree} alt="gallery" className="w-full h-full object-cover" />
                                </Link>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="rounded-xl cursor-pointer overflow-hidden my-2 h-[180px] mx-5">
                                <Link to="/create-ad">
                                    <img src={ImageFour} alt="gallery" className="w-full h-full object-cover" />
                                </Link>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="rounded-xl cursor-pointer overflow-hidden my-2 h-[180px] mx-5">
                                <Link to="/create-ad">
                                    <img src={ImageFive} alt="gallery" className="w-full h-full object-cover" />
                                </Link>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="rounded-xl cursor-pointer overflow-hidden my-2 h-[180px] mx-5">
                                <Link to="/create-ad">
                                    <img src={ImageSix} alt="gallery" className="w-full h-full object-cover" />
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
