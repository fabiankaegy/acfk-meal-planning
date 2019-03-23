import React, { useState, useEffect } from 'react';
import Day from '../Day';
import './style.scss';

const Week = props => {
	const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
	const [activeDay, setActiveDay] = useState({ name: days[0], key: 0 });
	const [isDesktop, setIsDesktop] = useState(false);

	useEffect(() => {
		window.addEventListener('resize', event => {
			window.innerWidth > 800 ? setIsDesktop(true) : setIsDesktop(false);
		});

		return () => {
			window.removeEventListener('resize', event => {
				window.innerWidth > 800 ? setIsDesktop(true) : setIsDesktop(false);
			});
		};
	});

	return isDesktop ? (
		<section className="week">
			{days.map((name, key) => (
				<Day key={key} title={name} />
			))}
		</section>
	) : (
		<section className="mobile-calendar">
			{days.map((name, key) => (
				<button
					onClick={() => {
						setActiveDay({ name: name, key: key });
					}}
				>
					{name}
				</button>
			))}
			<Day title={activeDay.name} key={activeDay.key} />
		</section>
	);
};

export default Week;
