/**
 * External dependencies
 */
import React from 'react';
/**
 * Internal dependencies
 */
import './style.scss';
import { Plus, Minus } from '../../icons';

const Button = ( props ) => {
	return (
		<button
			className="button"
			onClick={ props.onClick }
			aria-label={ props.label }
			tabIndex={ props.tabIndex }
		>
			{ props.plus ? <Plus /> : <Minus /> }
			{ props.children }
		</button>
	);
};

export default Button;
