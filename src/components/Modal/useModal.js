/**
 * External dependencies
 */
import { useState } from 'react';

const useModal = ( props ) => {
	const [ isShown, setIsShown ] = useState( props );

	const toggle = () => {
		setIsShown( ! isShown );
	};
	return { isShown, setIsShown, toggle };
};

export default useModal;
