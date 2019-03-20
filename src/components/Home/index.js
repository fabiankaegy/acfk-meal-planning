import React from 'react';
import RecipeList from '../RecipeList';
import Week from '../Week';

const Home = props => {
	return (
		<div className="main">
			<Week />
			<RecipeList />
		</div>
	);
};

export default Home;
