/**
 * External dependencies
 */
import React from 'react';

const IconInfo = ( { icon, text, unit, label } ) => {
	return (
		<li className="icon">
			{ icon }
			<label htmlFor={ `icon-${ text }` } className="screen-reader-text">{ label }</label>
			<span id={ `icon-${ text }` } className="info" aria-hidden="true">
				{ `${ text } ${ unit }` }
			</span>
		</li>
	);
};

export default IconInfo;
