/**
 * External dependencies
 */
import React from 'react';

const ErrorMessage = ( props ) => {
	return (
		<div className="error-message">
			<p>{ props.match.params.message }</p>
		</div>
	);
};

export default ErrorMessage;
