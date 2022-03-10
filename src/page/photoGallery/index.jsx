import React from "react";
import Hero2 from "../../components/hero2";
import { heroData11 } from "../../components/heroData";
import Photos from "./photos";

const PhotoGallery = () => {
    return (
        <div className="photoGallery">
            <Hero2 data={heroData11} index={2} />
            <Photos />
        </div>
    );
};

export default PhotoGallery;
