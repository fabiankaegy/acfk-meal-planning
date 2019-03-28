/**
 * External dependencies
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from 'react-testing-library';
/**
 * Internal dependencies
 */
import Day from './index';

describe( 'Day Component', function() {
	let wrapper;
	beforeEach( function() {
		wrapper = render( <Day title="Title" /> );
	} );

	afterEach( () => {
		cleanup( wrapper );
	} );

	it( 'renders without crashing', () => {
		const div = document.createElement( 'div' );
		ReactDOM.render( <Day title="Title" />, div );
		ReactDOM.unmountComponentAtNode( div );
	} );

	it( 'matches snapshot', () => {
		expect( wrapper ).toMatchSnapshot();
	} );
} );
