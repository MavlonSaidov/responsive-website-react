import React from "react";
import "./style.scss";
import call from "../../../assets/images/icons/connectionCall.svg";
import mail from "../../../assets/images/icons/connectionMail.svg";

const Connect = () => {
    const infoData = [
        {
            id: 1,
            icon: call,
            label: "Murojat uchun telefon",
            contact: "+998 (71) 123-45-67",
            realContact: "+998711234567",
        },
        {
            id: 2,
            icon: mail,
            label: "E-mail",
            contact: "info@ilmr.uz",
            realContact: "info@ilmr.uz",
        },
        {
            id: 3,
            icon: call,
            label: "Fax raqam",
            contact: "+998 (71) 123-45-67",
            realContact: "+998711234567",
        },
    ];

    return (
        <div className="connect ">
            <div className="container">
                <div className="connect__inner">
                    <h2 className="connect__title">Biz bilan bog'lanish</h2>
                    <p className="connect__text">
                        O'zbekiston Respublikasi Bandlik va mehnat munosabatlari
                        vazirligi huzuridagi Mehnat bozori tadqiqotlari
                        instituti
                    </p>

                    <div className="connect__content">
                        <div className="connect__left">
                            {infoData.map(
                                (
                                    { id, icon, label, contact, realContact },
                                    index
                                ) => {
                                    return (
                                        <div
                                            className="connect__left-item"
                                            key={id}
                                        >
                                            <div className="connect__left-icon">
                                                <img
                                                    src={icon}
                                                    alt="call-icon"
                                                />
                                            </div>
                                            <div className="connect__left-info">
                                                <h3 className="connect__left-label">
                                                    {label}
                                                </h3>
                                                <a
                                                    href={
                                                        index === 1
                                                            ? `mailto:${realContact}`
                                                            : `tel:${realContact}`
                                                    }
                                                    className="connect__left-contact"
                                                >
                                                    {contact}
                                                </a>
                                            </div>
                                        </div>
                                    );
                                }
                            )}
                        </div>
                        <form className="connect__right">
                            <div className="connect__right-items">
                                <div className="connect__right-item">
                                    <h4 className="connect__right-label">
                                        Ism Familiya
                                    </h4>
                                    <input
                                        className="connect__right-input"
                                        placeholder="Ism familiyangizni kiriting"
                                    ></input>
                                </div>
                                <div className="connect__right-item">
                                    <h4 className="connect__right-label">
                                        Xabar
                                    </h4>
                                    <textarea
                                        className="connect__right-input"
                                        placeholder="Xabaringizni kiriting"
                                    ></textarea>
                                </div>
                                <div className="connect__right-item">
                                    <h4 className="connect__right-label">
                                        Telefon Raqam
                                    </h4>
                                    <input
                                        className="connect__right-input"
                                        placeholder="Telefon raqamingizni kiriting"
                                    ></input>
                                </div>
                                <div className="connect__right-item">
                                    <h4 className="connect__right-label">
                                        E-Mail
                                    </h4>
                                    <input
                                        className="connect__right-input"
                                        placeholder="Elektron pochtangizni kiriting"
                                    ></input>
                                </div>
                            </div>
                            <button className="connect__right-btn">
                                Yuborish
                            </button>
                        </form>
                    </div>

                    <div className="connect__map">
                        {/* eslint-disable */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23958.90333325021!2d69.29284562848773!3d41.35533323676051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef35cf20159d9%3A0x66e8bbcc60111a1b!2sOKS%20TECHNOLOGIES%20(oks.uz)!5e0!3m2!1sru!2s!4v1644580483445!5m2!1sru!2s"
                            allowFullScreen=""
                            loading="lazy"
                            style={{ border: 0 }}
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Connect;
