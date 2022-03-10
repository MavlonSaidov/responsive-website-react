import React from "react";
import ContactIcon from "../../assets/images/icons/contact1.svg";
import PhoneIcon from "../../assets/images/icons/phone.svg";
import EmailIcon from "../../assets/images/icons/email.svg";
import LocationIcon from "../../assets/images/icons/location.svg";

export default function LeaderShip({ item }) {
  return (
    <div className="contact__card">
      <div className="contact__card__box">
        <div className="contact__card__img__style">
          <div className="contact__card__img">
            <img src={item.img} alt="" />
          </div>
        </div>

        <div className="contact__card__info">
          <h3>{item.title}</h3>
          <p>
            <img src={ContactIcon} alt="" />
            {item.name}
          </p>
          <p>
            <img src={PhoneIcon} alt="" />
            {item.phone}
          </p>
          <p>
            <img src={EmailIcon} alt="" /> {item.email}
          </p>
          <p>
            <img src={LocationIcon} alt="" /> {item.location}
          </p>
        </div>
      </div>
      <div className="contact__card__box">
        <div className="contact__right">
          <div className="contact__right__header">
            <button className="contact-btn">
              Vazifalar
              <span></span>
            </button>
            <p>{item.accardion[0].info}</p>
          </div>
          <div className="contact__right__accardion">
            <p>
              {item.accardion[0].desc}
              <div className="contact__accardion__opacity">
                <a href="">Batafsil</a>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
