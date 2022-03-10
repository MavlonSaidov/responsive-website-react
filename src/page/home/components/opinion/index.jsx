import { Swiper, SwiperSlide } from "swiper/react";
import Item1 from "../../../../assets/images/scientist1.jpg";
import Item2 from "../../../../assets/images/scientist2.jpg";
import Item3 from "../../../../assets/images/scientist3.jpg";
import RightBtn from "../../../../assets/images/icons/carousel-right-arrow.svg";
import LeftBtn from "../../../../assets/images/icons/carousel-left-arrow.svg";
import RightArrow from "../../../../assets/images/icons/right-arrow.svg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.scss";

import { Navigation } from "swiper";

const content1 = `I am very pleased to be participating in this event. The President's Address is a very meaningful and important document. Personally, I consider it a "road map" for this year and the next 5 years. I must say that over the past three years, Uzbekistan has made great strides in foreign policy, investment, tourism and education`;
const content2 = `Мне очень приятно участвовать в этом мероприятии. Послание Президента – очень содержательный и важный документ. Лично я считаю его «дорожной картой» на этот год и ближайшие 5 лет. Надо сказать, что за последние три года Узбекистан добился больших успехов во внешней политике, инвестициях, туризме и образовании`;
const content3 = `Men ushbu tadbirda ishtirok etayotganimdan juda ham mamnunman. Prezident Murojaatnomasi juda ham mazmunli va ahamiyatli hujjatdir. Shaxsan men uni shu yil va yaqin 5 yilga mo‘ljallangan "yo‘l xaritasi" deb hisoblayman. Aytishim kerakki, so‘nggi 3 yilda O‘zbekiston tashqi siyosat, investitsiyalarni jalb qilish, turizm va ta'limni rivojlantirish kabi sohalarda katta muvaffaqiyatlarga erishdi`;

export default function App() {
    return (
        <div className="opinion container">
            <div className="opinion__left">
                <div className="nav-header">
                    <div className="newsHeader">
                        <div className="newsHeader__title">
                            <span className="newsHeader__title-border"></span>
                            <h1 className="bold">Olimlar fikrlari</h1>
                        </div>
                    </div>
                    <a href="#" className="btn">
                        <span>Barchasi</span>
                        <img src={RightArrow} alt="" />
                    </a>
                </div>

                <div className="nav-header-mobile">
                    <div className="newsHeader">
                        <div className="newsHeader__title">
                            <span className="newsHeader__title-border"></span>
                            <h1 className="bold">Olimlar fikrlari</h1>
                            <a href="#" className="btn">
                                <span>Barchasi</span>
                                <img src={RightArrow} alt="" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="desktop-carousel">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={25}
                        loop={true}
                        effect={"fade"}
                        speed={200}
                        allowTouchMove={false}
                        navigation={{
                            nextEl: ".navBtnRight",
                            prevEl: ".navBtnLeft",
                        }}
                        modules={[Navigation]}
                        breakpoints={{
                            1199: {
                                spaceBetween: 15,
                            },
                            991: {
                                spaceBetween: 10,
                            },
                            576: {
                                slidesPerView: 1,
                            },
                        }}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="opinion__left-item">
                                <img
                                    src={Item1}
                                    alt=""
                                    className="opinion__left-img"
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="opinion__left-item">
                                <img
                                    src={Item2}
                                    alt=""
                                    className="opinion__left-img"
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="opinion__left-item">
                                <img
                                    src={Item3}
                                    alt=""
                                    className="opinion__left-img"
                                />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

                <div className="mobile-carousel">
                    <Swiper
                        slidesPerView={1}
                        allowTouchMove={false}
                        navigation={{
                            nextEl: ".navBtnRight",
                            prevEl: ".navBtnLeft",
                        }}
                        loop={true}
                        modules={[Navigation]}
                        speed={200}
                        className="mySwiper2"
                    >
                        <SwiperSlide>
                            <div className="img">
                                <img src={Item1} alt="" className="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="img">
                                <img src={Item2} alt="" className="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="img">
                                <img src={Item3} alt="" className="" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className="opinion__right">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    effect={"fade"}
                    speed={50}
                    allowTouchMove={false}
                    navigation={{
                        nextEl: ".navBtnRight",
                        prevEl: ".navBtnLeft",
                    }}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    <div className="navigation-wrap">
                        <button className="navBtnRight navArr">
                            <img
                                src={LeftBtn}
                                alt=""
                                className="navBtnRightArrow"
                            />
                        </button>
                        <button className="navBtnLeft navArr">
                            <img
                                src={RightBtn}
                                alt=""
                                className="navBtnLeftArrow"
                            />
                        </button>
                    </div>

                    <SwiperSlide>
                        <div className="opinion__right-content">
                            <p className="opinion__right-content-text">
                                {content1?.length < 250
                                    ? content1
                                    : content1.slice(0, 250) + "..."}
                            </p>
                            <button className="carousel-more">Batafsil</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="opinion__right-content">
                            <p className="opinion__right-content-text">
                                {content2?.length < 250
                                    ? content2
                                    : content2.slice(0, 250) + "..."}
                            </p>
                            <button className="carousel-more">Batafsil</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="opinion__right-content">
                            <p className="opinion__right-content-text">
                                {content3?.length < 250
                                    ? content3
                                    : content3.slice(0, 250) + "..."}
                            </p>
                            <button className="carousel-more">Batafsil</button>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}
