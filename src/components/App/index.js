/**
 * External dependencies
 */
import React, { Fragment } from 'react';
/**
 * Internal dependencies
 */
import Router from '../Router';
import Footer from '../Footer';
import './style.scss';

class App extends React.Component {
	render() {
		return (
			<Fragment>
				<Router />
				<Footer />
			</Fragment>
		);
	}
}

export default App;
