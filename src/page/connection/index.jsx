import React from "react";
import Footer from "../../components/footer";
import Hero2 from "../../components/hero2";
import {
    heroData2,
} from "../../components/heroData";
import Connect from "./connect";

const Connection = () => {
    return (
        <div>
            <Hero2 data={heroData2} index={3} />
            <Connect />
            <Footer />
        </div>
    );
};

export default Connection;
