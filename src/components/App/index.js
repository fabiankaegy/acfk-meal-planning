import React, { useContext, useEffect } from 'react';
import Week from '../Week';
import { Recipes } from '../AvailableRecipesContext';
import './style.scss';
import Wrapper from '../Wrapper';

const App = () => {
	return (
		<div className="App">
			<Recipes>
				<Wrapper />
			</Recipes>
		</div>
	);
};

export default App;
