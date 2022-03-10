import React from "react";
import "./SidebarBtn.scss";

const SidebarBtn = ({ modal, setModal }) => {
    // const [toggle, setToggle] = useState(false);

    return (
        <div
            onClick={() => setModal(!modal)}
            className={`sidebar__btn ${modal ? "toggle" : ""}`}
        >
            <div className="hamburger">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
};

export default SidebarBtn;
