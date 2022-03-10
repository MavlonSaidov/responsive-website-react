import "./style.scss";
import mail from "../../assets/images/icons/mail.svg";
import volume from "../../assets/images/icons/volume.svg";
import mobile from "../../assets/images/icons/mobile.svg";
import headphones from "../../assets/images/icons/headphone.svg";

const Header = () => {
  const links = [
    {
      id: 1,
      url: "mailto:info@toshkent.uz",
      text: "info@toshkent.uz",
      icon: mail,
    },
    {
      id: 2,
      url: "#",
      text: "Ovozli o'qish",
      icon: volume,
    },
    {
      id: 3,
      url: "#",
      text: "Mobil talqin",
      icon: mobile,
    },
  ];
  
  return (
    <div className="header">
      <div className="container">
        <div className="header__inner">
          <div className="header__links">
            {links.map(({ id, url, text, icon }) => (
              <li className="header__links-list" key={id}>
                <a className="header__links-link" href={url}>
                  <img src={icon} alt="message-icon" />
                  <span>{text}</span>
                </a>
              </li>
            ))}
          </div>
          <a href='tel:+998712002234' className="header__contact">
            <div className="header__contact-icon">
              <img src={headphones} alt="headphones-icon" />
            </div>
            <div className="header__contact-info">
              <div className="header__contact-phone">+998 71 200 22 34</div>
              <div className="header__contact-text">yagona call markaz</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
