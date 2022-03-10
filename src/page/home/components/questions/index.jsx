import React, { useState } from "react";
import NewsHeader from "../../../../components/newsHeader/index";
import "./style.scss";
import IconsLeftNext from "../../../../assets/images/icons/icon_left_next.svg";
import IconsRightNext from "../../../../assets/images/icons/icon_right_next.svg";
import { questionsData } from "./data";

export default function Questions() {
  const [show, setShow] = useState(0);
  const [idItems, setIdItems] = useState([...questionsData[0].accardion]);
  const [activeItem, setActiveItem] = useState(1);
  const filterId = id => {
    const newItem = questionsData.filter(item => item.id === id);
    setIdItems(newItem[0].accardion);
    setActiveItem(id);
  };

  const toggle = id => {
    if (show === id) {
      return setShow(null);
    }
    setShow(id);
  };

  // const handleActive = () => {};

  return (
    <div className="questions container">
      <NewsHeader name="Ko'p so'raladigan savollar" />
      <div className="questions__background"></div>
      <div className="questions__box">
        <div className="questions__box__card">
          <div className="questions__box__card__info">
            {questionsData.map(item => (
              <div
                className={`questions__box__card__info__p ${
                  activeItem === item.id ? "active" : ""
                }`}
                key={item.id}
              >
                <p onClick={() => filterId(item.id)}>{item.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="questions__box__card">
          {idItems.map((item) => (
            <div className="questions__box__card__accardion" key={item.id}>
              <div
                className="questions__box__card__accardion__info"
                onClick={() => toggle(item.id)}
              >
                <p>{item.title}</p>
                <span>{show === item.id ? "-" : "+"}</span>
              </div>
              <div
                className={`questions__box__card__accardion__text ${
                  show === item.id ? "show" : ""
                }`}
              >
                <div className="questions__box__card__accardion__text__info">
                  <p>{item.desc}</p>
                  <div className="questions__box__card__accardion__text__info__opacity">
                    <a
                      href="#"
                      className="questions__box__card__accardion__text__a"
                    >
                      Batafsil o'qish
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="questions__box__next">
        <div className="questions__box__next__info">
          <span>Sahifa 1 dan 14</span>

          <div className="questions__box__next__info__icons">
            <img src={IconsLeftNext} alt="" />
            <span>1</span>
            <img src={IconsRightNext} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
