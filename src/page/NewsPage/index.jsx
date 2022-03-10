import React from "react";
import { Link } from "react-router-dom";
import News from "../home/components/news";
import NewsPageImg1 from "../../assets/images/newsPageImg1.png";
import NewsPageImg2 from "../../assets/images/newsPageImg2.png";
import NewsPageImg3 from "../../assets/images/newsPageImg3.png";
import RightArrow from "../../assets/images/icons/right-arrow.svg";
import Hero from '../../components/hero2'
import {heroData2} from '../../components/heroData'
import "./style.scss";

export default function NewsPage() {
  const newsPageData = [
    {
      id: 1,
      title: "Ijtimoiy tarmoqlarni kuzatish",
      desc: "Avariyalarning ildizi bilimsizlikda – Haydovchilik guvohnomasi qanday olinsa jamiyat uchun xavfsiz bo‘ladi?",
      time: "March 01, 2021",
      img: NewsPageImg1,
    },
    {
      id: 2,
      title: "E’lonlar",
      desc: "UzAuto Motors’ga savol: Avtomagnitolasiz «Cobalt»ni texnik soz deb atash mumkinmi?",
      time: "March 01, 2021",
      img: NewsPageImg2,
    },
    {
      id: 3,
      title: "Akkreditatsiya",
      desc: "Mudofaa sohasida zamonaviy tahdidlarni inobatga olgan holda yangi dastur qabul qilinadi",
      time: "March 01, 2021",
      img: NewsPageImg3,
    },
    {
      id: 4,
      title: "OAV biz haqimizda",
      desc: "Avariyalarning ildizi bilimsizlikda – Haydovchilik guvohnomasi qanday olinsa jamiyat uchun xavfsiz bo‘ladi?",
      time: "March 01, 2021",
      img: NewsPageImg1,
    },
    {
      id: 5,
      title: "Ijtimoiy tarmoqlarni kuzatish",
      desc: "Avariyalarning ildizi bilimsizlikda – Haydovchilik guvohnomasi qanday olinsa jamiyat uchun xavfsiz bo‘ladi?",
      time: "March 01, 2021",
      img: NewsPageImg1,
    },
    {
      id: 6,
      title: "E’lonlar",
      desc: "Avariyalarning ildizi bilimsizlikda – Haydovchilik guvohnomasi qanday olinsa jamiyat uchun xavfsiz bo‘ladi?",
      time: "March 01, 2021",
      img: NewsPageImg2,
    },
    {
      id: 7,
      title: "Ijtimoiy tarmoqlarni kuzatish",
      desc: "Avariyalarning ildizi bilimsizlikda – Haydovchilik guvohnomasi qanday olinsa jamiyat uchun xavfsiz bo‘ladi?",
      time: "March 01, 2021",
      img: NewsPageImg3,
    },
    {
      id: 8,
      title: "Ijtimoiy tarmoqlarni kuzatish",
      desc: "Avariyalarning ildizi bilimsizlikda – Haydovchilik guvohnomasi qanday olinsa jamiyat uchun xavfsiz bo‘ladi?",
      time: "March 01, 2021",
      img: NewsPageImg1,
    },
  ];

  return (
    <>
    <Hero data={heroData2} index={2}/>
      <News />
      <div className="newsPage container">
        <div className="newsPage__inner">
          {newsPageData.map((item, id) => (
            <div className="newsPage__box" key={id}>
              <div className="newsPage__box__hidden">
                <div className="newsPage__box__img">
                  <img src={item.img} alt="" />
                  <span>{item.title}</span>
                </div>
                <div className="newsPage__box__text">
                  <p>
                    {item.desc?.length < 120
                      ? item.desc
                      : item.desc.slice(0, 120) + "..."}
                  </p>
                  <p>{item.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="newsPage__button">
          <Link to="/news/about" className="btn">
            <span>Ko'proq ko'rish</span>
            <img src={RightArrow} alt="" />
          </Link>
        </div>
      </div>
    </>
  );
}
