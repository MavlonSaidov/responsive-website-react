import React from "react";
import MediatekaOneTopPlay from "../../assets/images/icons/mediatekaOneTop.svg";

export default function MediatekaBottom({ mediaData }) {
  return (
    <div className="mediatekaBottom__inner">
      {mediaData.slice(2, 6).map((item, id) => (
        <div className="mediatekaBottom__card" key={id}>
          <div className="mediatekaBottom__img">
            <div className="mediatekaBottom__img__info">
              <img src={item.img} alt="" />
            </div>

            <div className="mediatekaBottom__play">
              <img src={MediatekaOneTopPlay} alt="" />
            </div>
          </div>
          <div className="mediatekaBottom__text">
            <p>{item.country}</p>
            <p>
              {item.desc?.length < 100
                ? item.desc
                : item.desc.slice(0, 100) + "..."}
            </p>
            <span>{item.time}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
