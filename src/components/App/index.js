import React from 'react';
import Router from '../Router';
import './style.scss';
import { Recipes } from '../AvailableRecipesContext';
//import RecipeList from '../RecipeList';
//import Week from '../Week';

class App extends React.Component {
	render() {
		return (
			<Recipes>
				<Router>
					<div className="App" />
				</Router>
			</Recipes>
		);
	}
}

export default App;
