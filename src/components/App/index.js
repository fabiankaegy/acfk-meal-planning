import React from 'react';
import Week from '../Week';
import { Recipes } from '../AvailableRecipesContext';
import './style.scss';

const App = () => {
	return (
		<div className="App">
			<Recipes>
				<Week />
			</Recipes>
		</div>
	);
};

export default App;
