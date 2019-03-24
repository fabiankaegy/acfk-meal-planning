import React from 'react';

const IconInfo = ({ icon, text, unit, label }) => {
	return (
		<li className="icon">
			{icon}
			<label className="screen-reader-text">{label}</label>
			<span className="info" aria-hidden="true">
				{`${text} ${unit}`}
			</span>
		</li>
	);
};

export default IconInfo;
