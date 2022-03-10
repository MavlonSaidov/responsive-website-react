import React, { useState } from "react";
import "./style.scss";
import SidebarBtn from "../../components/SidebarBtn";
import SidebarEye from "../../components/SidebarEye";
import SidebarLanguage from "../../components/SidebarLanguage";
import logo from "../../assets/images/logo.svg";
import HeroModal from "../../page/home/components/hero/components/HeroModal";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Hero2 = ({ data, index }) => {
    const [modal, setModal] = useState(false);
    return (
        <div className="hero2">
            <div className="hero2__inner">
                <div className="hero2__background">
                    <img src={data.img} alt="background" />
                </div>
                <div className="hero2__container">
                    {data.texts
                        .slice(index - 1, index)
                        .map(({ id, text, url }) => (
                            <div key={id} className="hero2__sections">
                                <div className="hero2__sidebar">
                                    <SidebarBtn {...{ modal, setModal }} />
                                    <SidebarEye />
                                    <SidebarLanguage />
                                </div>
                                <HeroModal {...{ modal, setModal }} />

                                <div className="hero2__content">
                                    <div className="hero2__logo">
                                        <img src={logo} alt="" />
                                    </div>
                                    <h1 className="hero2__title">
                                        <span>{text.split(" ")[0]}</span>
                                        <div>{text.split(" ")[1]}</div>
                                    </h1>
                                    <div className="hero2__pages">
                                        <a href="/">
                                            Asosiy <span>{">"}</span>
                                        </a>
                                        <a href="/">
                                            {data.title} <span>{">"}</span>
                                        </a>
                                        <a href={url}> {text} </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    <div className="hero2__navbar">
                        {data.texts.map(({ id, text, url }) => (
                            <Link key={id} className={"link"} to={url}>
                                {text}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero2;
