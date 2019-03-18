import React from 'react';
import Router from '../Router';
import './style.scss';
import { Recipes } from '../AvailableRecipesContext';

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
