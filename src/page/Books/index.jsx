import BookCard from './components/bookCard'
import Button from '../../components/button'
import Hero from '../../components/hero2'
import {heroData5} from '../../components/heroData'

import './style.scss'

const Books = () => {
    const data = [
        {
          id: 1,
          type: 'doc',
          text: 'Ekskavatorlar va gusenitsali texnikani ta’mirlash zavodini qurish to‘g‘risida',
          url: 'https://www.free-ebooks.net/poetry/With-These-Four-Keep-me-in-Mind'
        },
        {
          id: 2,
          type: 'pdf',
          text: '2017 — 2020 yillarda shaharlarda arzon ko‘p kvartirali uylarni qurish va ',
          url: 'https://www.free-ebooks.net/poetry/With-These-Four-Keep-me-in-Mind'
        },
        {
          id: 3,
          type: 'xls',
          text: "Mamlakat iqtisodiyotining tarmoqlarini talab yuqori bo'lgan mahsulot va hom",
          url: 'https://www.free-ebooks.net/poetry/With-These-Four-Keep-me-in-Mind'
        },
        {
          id: 4,
          type: 'ppt',
          text: "«Obod qishloq» dasturini 2018 yilda amalga oshirish bo‘yicha qo‘shimcha chora",
          url: 'https://www.free-ebooks.net/poetry/With-These-Four-Keep-me-in-Mind'
        },
        {
          id: 5,
          type: 'jpeg',
          text: "Amalga oshirish bo‘yicha ekskavatorlar va gusenitsali texnikani ta’mirlash zavodini qurish to‘g‘risida yilda  qo‘shimcha chora",
          url: 'https://www.free-ebooks.net/poetry/With-These-Four-Keep-me-in-Mind'
        },
        {
          id: 6,
          type: 'docx',
          text: "Amalga oshirish bo‘yicha ekskavatorlar va gusenitsali texnikani ta’mirlash zavodini qurish to‘g‘risida yilda  qo‘shimcha chora",
          url: 'https://www.free-ebooks.net/poetry/With-These-Four-Keep-me-in-Mind'
        },
        {
          id: 7,
          type: 'mp3',
          text: "This branch is 1 commit ahead, 24 commits behind master.This branch is 1 commit ahead, 24 commits behind master.",
          url: 'https://www.free-ebooks.net/poetry/With-These-Four-Keep-me-in-Mind'
        },
        {
          id: 8,
          type: 'xlsx',
          text: "Amalga oshirish bo‘yicha ekskavatorlar va gusenitsali texnikani 24 commits behind master.This branch is 1 commit ahead, 24 commits behind master.",
          url: 'https://www.free-ebooks.net/poetry/With-These-Four-Keep-me-in-Mind'
        }
    ]
  return (
    <div className="books">
    <Hero data={heroData5} index={1}/>
      <div className="books__inner container">
         { data.map((item,id) => (
          <BookCard text={item.text} type={item.type} url={item.url} key={id} />
         ))}
      </div>
          <Button name={'Ko’proq ko’rish'} className="books__btn" arrow={'none'} />
    </div>
  )
}

export default Books