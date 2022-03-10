import './style.scss'

const LeaderCard = ({url, fullname, position}) => {
  return (
    <div className="leader-card">
        <div className="leader-card__img-wrapper">
          <img src={url} alt="leaders-image" className="leader-card__img" />
          <span className="img-line"></span>
        </div>
        <div className="leader-card__content">
          <p className="leader-card__name">
            {fullname}
            <span className="content-line"></span>
          </p>
          <p className="leader-card__position">{position}</p>
        </div>
    </div>
  )
}

export default LeaderCard