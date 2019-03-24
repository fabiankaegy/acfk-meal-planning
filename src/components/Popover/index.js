import React, { useRef, useEffect } from 'react';
import './style.scss';

const Popover = props => {
	const popoverRef = useRef(null);

	const closeWhenClickedOutside = event => {
		let targetElement = event.target; // clicked element

		do {
			if (targetElement === popoverRef.current) {
				// This is a click inside. Do nothing, just return.
				return;
			}
			// Go up the DOM
			targetElement = targetElement.parentNode;
		} while (targetElement);

		// This is a click outside.
		props.close();
	};

	useEffect(() => {
		document.addEventListener('click', closeWhenClickedOutside);
		return () => {
			document.removeEventListener('click', closeWhenClickedOutside);
		};
	}, []);

	// take focus when opend
	useEffect(() => {
		console.log(popoverRef.current.children[0]);
		if (popoverRef.current.children[0]) {
			popoverRef.current.children[0].focus();
			console.log('focussed');
		}
	}, [popoverRef.current]);

	return (
		<div ref={popoverRef} className="popover">
			{props.children}
		</div>
	);
};

export default Popover;
