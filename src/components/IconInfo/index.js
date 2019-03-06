import React from 'react';

const IconInfo = ({ icon, text }) => {
	return (
		<div className="icon-info">
			<p>
				<span class="icon">{icon}</span>
				{text}
			</p>
		</div>
	);
};

export default IconInfo;
