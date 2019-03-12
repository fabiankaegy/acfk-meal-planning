import React, { useContext, useEffect } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
  } from 'react-router-dom'
import './style.scss';
import { Recipes } from '../AvailableRecipesContext';
import Week from '../Week';
import RecipeView from '../RecipeView';

class App extends React.Component {

	render () {
		return (
				<Router>
				<div className="App">
					<ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/recipe">Recipe</Link></li>
					</ul>
					<Route exact path="/" component={ Week } />
					<Route exact path="/recipe" component={ RecipeView } />
				</div>
				</Router>
		);
	}
};

export default App;
