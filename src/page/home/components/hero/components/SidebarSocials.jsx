import React from 'react';

import telegram from '../../../../../assets/images/icons/telegramHero.svg'
import facebook from '../../../../../assets/images/icons/facebookHero.svg'
import instagram from '../../../../../assets/images/icons/instagramHero.svg'
import twitter from '../../../../../assets/images/icons/twitterHero.svg'

import './SidebarSocials.scss';


const SidebarSocials = () => {

	const socials = [
		{
			id: 1,
			icon: telegram,
			url: '#'
		},
		{
			id: 2,
			icon: facebook,
			url: '#'
		},
		{
			id: 3,
			icon: instagram,
			url: '#'
		},
		{
			id: 4,
			icon: twitter,
			url: '#'
		}
	]

  return (
	<div className="sidebar__socials">
		{socials.map(({id, icon, url}) => (
			<div key={id} className="social">
				<a className='social-link' href={url}><img src={icon} alt="social-icon" /></a>
		</div>
		))}
	</div>
  )
};

export default SidebarSocials;
