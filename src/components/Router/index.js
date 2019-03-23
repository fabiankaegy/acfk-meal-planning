import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from '../NotFound';
import Home from '../Home';
import Wrapper from '../Wrapper';
import DocumentTitle from 'react-document-title';

const Router = props => {
	return (
		<Fragment>
			<DocumentTitle title="ACFK Mealplaning" />
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/recipe/:id" component={Wrapper} />
					<Route component={NotFound} />
				</Switch>
			</BrowserRouter>
		</Fragment>
	);
};

export default Router;
