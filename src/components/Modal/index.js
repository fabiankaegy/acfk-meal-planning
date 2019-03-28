/**
 * External dependencies
 */
import React, { useRef, useEffect } from 'react';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import '@reach/dialog/styles.css';

/**
 * Internal dependencies
 */
import './style.scss';

const Modal = props => {
	const modalRef = useRef(null);

	const closeWhenClickedOutside = event => {
		let targetElement = event.target; // clicked element

		do {
			if (targetElement === modalRef.current) {
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

	return (
		<DialogOverlay>
			<DialogContent>
				<div className="popup" ref={modalRef}>
					{props.children}
				</div>
			</DialogContent>
		</DialogOverlay>
	);
};

export default Modal;
