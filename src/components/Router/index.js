import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from '../NotFound';
import Home from '../Home';
import Wrapper from '../Wrapper';

const Router = props => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/recipe/:id" component={Wrapper} />
				<Route component={NotFound} />
			</Switch>
		</BrowserRouter>
	);
};

export default Router;
