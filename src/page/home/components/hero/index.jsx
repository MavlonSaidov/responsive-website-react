import React, { useState } from "react";

import logo from "../../../../assets/images/icons/logo.svg";
import hero1 from "../../../../assets/images/hero1.jpg";

import "./style.scss";
import Sidebar from "./components/Sidebar";
import HeroModal from "./components/HeroModal";

const Hero = () => {
    const [modal, setModal] = useState(false);
    const sections = [
        {
            id: 1,
            img: hero1,
            title: ["Tarmoq", "kengashi"],
            text: "Institut tomonidan amalga oshiriladigan ilmiy-tadqiqot ishlari dasturlari, rejalari hamda tematikasini ko'rib chiqadi va ma'qullaydi",
        },
        {
            id: 2,
            img: hero1,
            title: ["Hududiy", "kengash"],
            text: "Institut tomonidan amalga oshiriladigan ilmiy-tadqiqot ishlari dasturlari, rejalari hamda tematikasini ko'rib chiqadi va ma'qullaydi",
        },
        {
            id: 3,
            img: hero1,
            title: ["Respublika", "kengashi"],
            text: "Institut tomonidan amalga oshiriladigan ilmiy-tadqiqot ishlari dasturlari, rejalari hamda tematikasini ko'rib chiqadi va ma'qullaydi",
        },
        {
            id: 4,
            img: hero1,
            title: ["Umumiy", "kengash"],
            text: "Institut tomonidan amalga oshiriladigan ilmiy-tadqiqot ishlari dasturlari, rejalari hamda tematikasini ko'rib chiqadi va ma'qullaydi",
        },
    ];

    return (
        <div className="hero">
            <HeroModal {...{ modal, setModal }} />
            <div className="hero-container">
                <div className="sidebar">
                    <Sidebar {...{ modal, setModal }} />
                </div>

                <div className="hero__logo">
                    <img src={logo} alt="logo" />
                </div>

                {sections.slice(0, 1).map(({ id, title, text }) => (
                    <div key={id} className="hero__section">
                        <div className="hero__section-content">
                            <div className="hero__section-number">{id}</div>
                            <div className="hero__section-info">
                                <div className="hero__section-title">
                                    <div>{title[0]}</div>
                                    <span>{title[1]}</span>
                                </div>
                                <div className="hero__section-text">{text}</div>
                                <a className="hero__section-btn" href="#">
                                    <h4>Batafsil</h4>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="hero__left ">
                <div className="hero__left-image">
                    <img src={hero1} alt="hero-image" />
                </div>
            </div>
            <div className="hero__right">
                {sections.slice(1, 4).map(({ id, img, title, text }) => (
                    <div key={id} className="hero__section">
                        <div className="hero__section-image">
                            <img src={img} alt="hero-image" />
                        </div>
                        <div className="hero__section-content">
                            <div className="hero__section-number">{id}</div>
                            <div className="hero__section-info">
                                <div className="hero__section-title">
                                    <div>{title[0]}</div>
                                    <span>{title[1]}</span>
                                </div>
                                <div className="hero__section-text">{text}</div>
                                <a
                                    className="hero__section-btn hover__btn"
                                    href="#"
                                >
                                    <h4>Batafsil</h4>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Hero;
