import React from 'react';
import './style.scss';
import { Plus, Minus } from '../../icons';

const Button = props => {
	return (
		<div className="button-wrapper">
			<button className="button" onClick={props.onClick}>
				{props.plus ? <Plus /> : <Minus />}
			</button>
			{props.children}
		</div>
	);
};

export default Button;
