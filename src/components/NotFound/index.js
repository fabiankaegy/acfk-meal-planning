/**
 * External dependencies
 */
import React, { Fragment } from 'react';
import DocumentTitle from 'react-document-title';

const NotFound = () => {
	return (
		<Fragment>
			<DocumentTitle title="Nothing found" />
			<p>Nothing to see here...</p>
		</Fragment>
	);
};
export default NotFound;
