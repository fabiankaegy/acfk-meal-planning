import React from 'react';
import { Clock } from '../../icons';

const IconWithText = ({ icon, text }) => {
	return (
		<div className="icon">
			<Clock />
			<p>{text}</p>
		</div>
	);
};

export default IconWithText;
