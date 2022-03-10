import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import Arrow from "../../../../../assets/images/icons/scroll-arrow.svg";

import "./SidebarScroll.scss";

const SidebarScroll = () => {
    return (
        <div className="sidebar__scroll">
            <div className="sidebar__scroll-mouse">
                <div></div>
            </div>
            <div className="sidebar__scroll-dots">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <Link to="/">
                <div className="sidebar__scroll-arrow">
                    <img src={Arrow} alt="arrow-icon" />
                </div>
            </Link>
        </div>
    );
};

export default SidebarScroll;
