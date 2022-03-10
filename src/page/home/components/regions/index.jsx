import Map from "./map";
import NavHeader from "../../../../components/newsHeader";
import Row from "../../../../assets/images/icons/inforow.svg";
import Image1 from "../../../../assets/images/icons/projects.svg";
import Image2 from "../../../../assets/images/icons/research.svg";
import Image3 from "../../../../assets/images/icons/legislation.svg";
import "./style.scss";

const Regions = () => {
    return (
        <div className="regions_container container">
            <NavHeader name="Kasbiy malaka va bilimlarni rivojlantirish bo'yicha hududiy kengash" />
            <div className="regions">
                <div className="regions-map">
                    <Map />
                </div>
                <div className="regions-info">
                    <div className="regions-info__card">
                        <h2 className="regions-info__card-title">Navoiy</h2>
                        <p className="regions-info__card-subtitle">
                            viloyatining asosiy ko'rsatkichlari
                        </p>
                        <div className="regions-info__card-info">
                            <div className="info-left">
                                <img
                                    src={Image1}
                                    alt=""
                                    className="info-left__img"
                                />
                                <p className="info-left__text">
                                    <span>12 ta</span>Tadqiqotlar
                                </p>
                                <img
                                    src={Image3}
                                    alt=""
                                    className="info-left__img"
                                />
                            </div>
                            <img src={Row} alt="" className="row" />
                            <div className="info-right">
                                <p className="info-right__text">
                                    <span>8 ta</span> Loyihalar
                                </p>
                                <img
                                    src={Image2}
                                    alt=""
                                    className="info-right__img"
                                />
                                <p className="info-right__text">
                                    <span>15 ta</span> Qonunchilikka takliflar
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Regions;
