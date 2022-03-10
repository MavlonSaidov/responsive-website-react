import './style.scss'

const BookCard = ({text, type, url}) => {
  return (
    <a href={url} target="_blank" className={`book-card ${type}`}>
        <p className="book-card__text"> <b>{text.length < 60 ? text : text.slice(0, 60) + '...' }</b></p>
        <span className="book-card__line"></span>
    </a>
  )
}

export default BookCard