/**
 * External dependencies
 */
import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
/**
 * Internal dependencies
 */
import { Recipes } from '../AvailableRecipesContext';
import NotFound from '../NotFound';
import Home from '../Home';
import Wrapper from '../Wrapper';
import DocumentTitle from 'react-document-title';
import ErrorMessage from '../ErrorMessage';

const Router = () => {
	return (
		<Fragment>
			<DocumentTitle title="ACFK Mealplaning" />
			<BrowserRouter>
				<Recipes>
					<Switch>
						<Route exact path="/" component={ Home } />
						<Route path="/recipe/:id" component={ Wrapper } />
						<Route path="/error/:message/" component={ ErrorMessage } />
						<Route component={ NotFound } />
					</Switch>
				</Recipes>
			</BrowserRouter>
		</Fragment>
	);
};

export default Router;
