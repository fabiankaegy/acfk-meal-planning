import React from 'react';

const IconInfo = ({ icon, text, unit }) => {
	return (
		<li className="icon">
			{icon}
			<span className="info">
				{text} {unit}
			</span>
		</li>
	);
};

export default IconInfo;
