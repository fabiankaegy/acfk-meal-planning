import React from 'react';
import Day from '../Day';
import './style.scss';

const Week = props => {
	const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

	return (
		<section className="week">
			{days.map((name, key) => (
				<Day key={key} title={name} />
			))}
		</section>
	);
};

export default Week;
