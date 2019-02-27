import React from 'react';
import './style.scss';
import { Clock, People } from '../../icons';

const Meal = props => {
	const { recipe } = props;
	return (
		<div
			onClick={props.onClick}
			className="meal"
			style={{
				background: `linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7) ), url(${
					recipe._embedded['wp:featuredmedia'][0].source_url
				}) center no-repeat`,
				backgroundSize: 'cover',
			}}
		>
			<span className="time">
				<Clock />
				{`${recipe.meta.acfk_prep_time + recipe.meta.acfk_cooking_time} min.`}
			</span>
			<span className="servings">
				<People />
				{`${recipe.meta.acfk_servings} serv.`}
			</span>

			<h3 dangerouslySetInnerHTML={{ __html: recipe.title.rendered }} />
		</div>
	);
};

export default Meal;
