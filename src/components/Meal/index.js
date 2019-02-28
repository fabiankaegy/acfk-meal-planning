import React from 'react';
import './style.scss';
import { Clock, People } from '../../icons';

const Meal = props => {
	const { prepTime, cookingTime, servings, image, title } = props.recipe;
	return (
		<div
			onClick={props.onClick}
			className="meal"
			style={{
				background: `linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7) ), url(${
					image.src
				}) center no-repeat`,
				backgroundSize: 'cover',
			}}
		>
			<span className="time">
				<Clock />
				{`${prepTime + cookingTime} min.`}
			</span>
			<span className="servings">
				<People />
				{`${servings} serv.`}
			</span>

			<h3 dangerouslySetInnerHTML={{ __html: title }} />
			<span className="hover-overlay">
				<span>
					<a href="#edit">Edit</a>
				</span>
				<span className="line" />
				<span>
					<a href="#view">View</a>
				</span>
			</span>
		</div>
	);
};

export default Meal;
