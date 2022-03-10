import React, { useState } from 'react';
import './SidebarLanguage.scss';

const SidebarLanguage = () => {
	const [langToggle, setLangToggle] = useState(false)
  return (
	<div className="sidebar__language" onClick={() => setLangToggle(!langToggle)} >
		<span>UZB</span>
			<div className={`${langToggle ? 'language__options lang__show': 'language__options'}`}>
				<div className="language__option">ENG</div>
				<div className="language__option">RUS</div>
	  		</div>
	</div>
  )
};

export default SidebarLanguage;
