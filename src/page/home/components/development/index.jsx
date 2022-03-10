import NavHeader from '../../../../components/newsHeader'

import grid2 from '../../../../assets/images/grid2.jpg';
import grid3 from '../../../../assets/images/grid3.jpg';
import grid5 from '../../../../assets/images/grid5.jpg';
import grid8 from '../../../../assets/images/grid8.jpg';
import grid10 from '../../../../assets/images/grid10.jpg';

import './style.scss'

const development = () => {
	const data = [
		{ id: 1, img: grid3, content: "Kurs haqida" },
		{ id: 2, img: grid2, content: "Kurs haqida" },
		{ id: 3, img: grid3, content: "Faoliyatdan lavhalar" },
		{ id: 4, img: grid3, content: "O'quv dasturlari" },
		{ id: 5, img: grid5, content: "Sertifikat" },
		{ id: 6, img: grid3, content: "Sertifikat" },
		{ id: 7, img: grid3, content: "Mutaxasislar jamoasi" },
		{ id: 8, img: grid8, content: "O'quv dasturlari" },
		{ id: 9, img: grid3, content: "Sertifikat" },
		{ id: 10, img: grid10, content: "Mutaxasislar jamoasi" },
	]

  return (
	  <div className='grid container'>
	  	<NavHeader name='Malaka oshirish'/>
			<div className="grid__inner">
				{data.map(({id, img, content}) => (
					<a href='#' key={id} className="grid__item">
							<img src={img} alt="box-image" />
								<span>{content}</span>
					</a>
				))}  
			</div>		  
	  </div>
  )
};

export default development;
