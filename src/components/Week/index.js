import React, { useState, useEffect, Fragment } from 'react';
import { AvailableRecipesContext, Recipes } from '../AvailableRecipesContext';
import Day from '../Day';
import './style.scss';

const Week = ({ recipeToAdd }, props) => {
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

	useEffect(() => {
		const recipeToAdd = localStorage.setItem(`${props.title}-recipes`, JSON.stringify(recipes));
	}, [recipes]);

	return (
		<ul className="week">
			{recipeToAdd.id && (
				<div>
					What Day do you want to add it to?
					{days.map((name, key) => (
						<li key={key}>
							<button onClick={key => recipeToAdd(recipe)}>{name}</button>
						</li>
					))}
				</div>
			)}

			{isDesktop ? (
				days.map((name, key) => <Day index={key} key={key} title={name} />)
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
					<Day index={activeDay.key} title={activeDay.name} key={activeDay.key} />
				</Fragment>
			)}
		</ul>
	);
};

export default Week;
