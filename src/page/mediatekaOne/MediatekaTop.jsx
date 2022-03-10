import React from "react";
import MediatekaOneTopPlay from "../../assets/images/icons/mediatekaOneTop.svg";
export default function MediatekaTop({ mediaData }) {
  return (
    <div className="mediatekaTop__inner">
      {mediaData.slice(0, 2).map((item, id) => (
        <div className="mediatekaTop__card" key={id}>
          <div className="mediatekaTop__img">
            <div className="mediatekaTop__background">
              <img src={item.img} alt="" />
            </div>
            <div className="mediatekaTop__play">
              <img src={MediatekaOneTopPlay} alt="" />
            </div>
            <div className="mediatekaTop__p">
              <p>{item.title}</p>
              <span>{item.time}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
