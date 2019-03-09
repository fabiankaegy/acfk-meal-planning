import React from 'react';

const IconInfo = ({ icon, text, unit }) => {
	return (
		<div className="icon-info">
			<p className="icon">{icon}</p>
			<p className="info">{text} {unit}</p>
		</div>
	);
};

export default IconInfo;
