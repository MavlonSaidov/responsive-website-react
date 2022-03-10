import React from "react";
import "./style.scss";

import photoGallery1 from "../../../assets/images/photoGallery1.jpg";
import photoGallery2 from "../../../assets/images/photoGallery2.jpg";
import photoGallery3 from "../../../assets/images/photoGallery3.jpg";
import photoGallery4 from "../../../assets/images/photoGallery4.jpg";
import photoGallery5 from "../../../assets/images/photoGallery5.jpg";
import photoGallery6 from "../../../assets/images/photoGallery6.jpg";
import photoGallery7 from "../../../assets/images/photoGallery7.jpg";
import photoGallery8 from "../../../assets/images/photoGallery8.jpg";

const Photos = () => {
    const photoData = [
        {
            id: 1,
            img: photoGallery1,
            text: "“Ishga marhamat” monomarkazlarida turkiyalik mutaxassislar faoliyat olib bormoqda",
        },
        {
            id: 2,
            img: photoGallery2,
            text: "“Ishga marhamat” monomarkazlarida turkiyalik mutaxassislar faoliyat olib bormoqda",
        },
        {
            id: 3,
            img: photoGallery3,
            text: "“Ishga marhamat” monomarkazlarida turkiyalik mutaxassislar faoliyat olib bormoqda",
        },
        {
            id: 4,
            img: photoGallery4,
            text: "“Ishga marhamat” monomarkazlarida turkiyalik mutaxassislar faoliyat olib bormoqda",
        },
        {
            id: 5,
            img: photoGallery5,
            text: "“Ishga marhamat” monomarkazlarida turkiyalik mutaxassislar faoliyat olib bormoqda",
        },
        {
            id: 6,
            img: photoGallery6,
            text: "“Ishga marhamat” monomarkazlarida turkiyalik mutaxassislar faoliyat olib bormoqda",
        },
        {
            id: 7,
            img: photoGallery7,
            text: "“Ishga marhamat” monomarkazlarida turkiyalik mutaxassislar faoliyat olib bormoqda",
        },
        {
            id: 8,
            img: photoGallery8,
            text: "“Ishga marhamat” monomarkazlarida turkiyalik mutaxassislar faoliyat olib bormoqda",
        },
    ];

    return (
        <div className="photos">
            <div className="container">
                <div className="photos__inner">
                    {photoData.map(({ id, img, text }) => (
                        <div className="photos__item" key={id}>
                            <img src={img} alt="photo" />
                            <p className="photos__item-text">{text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Photos;
