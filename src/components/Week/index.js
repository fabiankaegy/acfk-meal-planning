import React, { useState, useEffect, Fragment } from 'react';
import Day from '../Day';
import './style.scss';

const Week = props => {
	const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
	const [activeDay, setActiveDay] = useState({ name: days[0], key: 0 });
	const [isDesktop, setIsDesktop] = useState(false);

	const setSize = () => {
		window.innerWidth > 600 ? setIsDesktop(true) : setIsDesktop(false);
	};

	useEffect(() => {
		setSize();
		window.addEventListener('resize', setSize);

		return () => {
			window.removeEventListener('resize', setSize);
		};
	}, []);

	return (
		<section className="week">
			{isDesktop ? (
				days.map((name, key) => <Day key={key} title={name} />)
			) : (
				<Fragment>
					<div className="navigation">
						{days.map((name, key) => (
							<button
								onClick={() => {
									setActiveDay({ name: name, key: key });
								}}
								key={key}
							>
								{name}
							</button>
						))}
					</div>
					<Day title={activeDay.name} key={activeDay.key} />
				</Fragment>
			)}
		</section>
	);
};

export default Week;
