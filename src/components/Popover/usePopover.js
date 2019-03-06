import { useState } from 'react';

const usePopover = props => {
	const [isShown, setIsShown] = useState(props);

	const toggle = () => {
		setIsShown(!isShown);
	};
	return { isShown, setIsShown, toggle };
};

export default usePopover;
