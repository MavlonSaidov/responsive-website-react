import React from "react";
import RightArrow from "../../assets/images/icons/right-arrow.svg";
import "./style.scss";
import { Link } from "react-router-dom";
export default function NewsHeader({ name }) {
  return (
    <div className="container">
      <div className="newsHeader">
        <div className="newsHeader__title">
          <span className="newsHeader__title-border"></span>
          <h1 className="bold">{name}</h1>
          <Link to="/leadership" className="btn">
            <span>Barchasi</span>
            <img src={RightArrow} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
}
