import React from 'react';
//import "./style.scss";

const RecipeData = ({ servings, prepTime, cookingTime }) => {
	return (
		<React.Fragment>
			<div className="servings">{servings}</div>
			<div className="prep-time">{prepTime}</div>
			<div className="cooking-time">{cookingTime}</div>
		</React.Fragment>
	);
};

export default RecipeData;
