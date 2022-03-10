import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CarouselIcon from "../../../../assets/images/icons/carouselIcon.png";
import "./style.scss";

import RightArrow from "../../../../assets/images/icons/carousel-right-arrow.svg";
import LeftArrow from "../../../../assets/images/icons/carousel-left-arrow.svg";

SwiperCore.use([Navigation]);

const content1 = `Аholi bandligini ta'minlashning hududiy va tarmoq dasturlarini ishlab chiqish, takomillashtirish va ijtimoiy-iqtisodiy baholash bo'yicha loyiha`;
const content2 = `Uy xo'jaliklarini bandlik masalalari bo'yicha o'rganish va boshqa dala tadqiqotlarini tashkil qilish guruhi`;
const content3 = `Mehnat munosabatlari va mehnatga haq to'lashni rivojlantirish bo'yicha loyiha`;

const ProjectsCarousel = () => {
    return (
        <div className="projects-carousel">
            <button className="swiper-prev-btn">
                <img className="left-arrow" src={LeftArrow} alt="icon" />
            </button>

            <button className="swiper-next-btn">
                <img className="right-arrow" src={RightArrow} alt="icon" />
            </button>
            <Swiper
                grabCursor={true}
                loop={true}
                navigation={{
                    prevEl: ".swiper-prev-btn",
                    nextEl: ".swiper-next-btn",
                }}
                slidesPerView={3}
                spaceBetween={1}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="swipe-wrapper">
                        <div className="projects-carousel__content red-shadow">
                            <img
                                src={CarouselIcon}
                                alt="humans"
                                className="projects-carousel__content-icon"
                            />
                            <p className="projects-carousel__content-text">
                                {content1?.length < 100
                                    ? content1
                                    : content1.slice(0, 100) + "..."}
                            </p>
                        </div>
                        <div className="projects-carousel__more red-background">
                            <p className="projects-carousel__more-link">
                                Batafsil
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swipe-wrapper">
                        <div className="projects-carousel__content yellow-shadow">
                            <img
                                src={CarouselIcon}
                                alt="humans"
                                className="projects-carousel__content-icon"
                            />
                            <p className="projects-carousel__content-text">
                                {content2?.length < 100
                                    ? content2
                                    : content2.slice(0, 100) + "..."}
                            </p>
                        </div>
                        <div className="projects-carousel__more yellow-background">
                            <p className="projects-carousel__more-link">
                                Batafsil
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swipe-wrapper">
                        <div className="projects-carousel__content blue-shadow">
                            <img
                                src={CarouselIcon}
                                alt="humans"
                                className="projects-carousel__content-icon"
                            />
                            <p className="projects-carousel__content-text">
                                {content3?.length < 100
                                    ? content3
                                    : content3.slice(0, 100) + "..."}
                            </p>
                        </div>
                        <div className="projects-carousel__more blue-background">
                            <p className="projects-carousel__more-link">
                                Batafsil
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default ProjectsCarousel;
