/**
 * External dependencies
 */
import React, { useState, useEffect, Fragment } from 'react';
/**
 * Internal dependencies
 */
import Day from '../Day';
import Modal from '../Modal';
import useModal from '../Modal/useModal';
import './style.scss';

const Week = ( { recipeToAdd, done } ) => {
	const days = [ 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun' ];
	const [ activeDay, setActiveDay ] = useState( { name: days[ 0 ], key: 0 } );
	const [ isDesktop, setIsDesktop ] = useState( false );
	const [ selectedDay, setSelectedDay ] = useState( null, { showDialog: true } );

	const addRecipesModal = useModal();

	const setSize = () => {
		return window.innerWidth > 600 ? setIsDesktop( true ) : setIsDesktop( false );
	};

	useEffect( () => {
		setSize();
		window.addEventListener( 'resize', setSize );

		return () => {
			window.removeEventListener( 'resize', setSize );
		};
	}, [] );

	useEffect( () => {
		if ( selectedDay ) {
			setActiveDay( { name: selectedDay, key: days.indexOf( selectedDay ) } );
		}

		if ( selectedDay === activeDay.name ) {
			setSelectedDay( null );
		}
	}, [ selectedDay, activeDay ] );

	useEffect( () => {
		if ( recipeToAdd ) {
			addRecipesModal.setIsShown( true );
		}
	}, [ recipeToAdd ] );

	const handleModalClose = () => {
		done();
		addRecipesModal.setIsShown( false );
	};

	return (
		<Fragment>
			{ recipeToAdd && addRecipesModal.isShown && (
				<Modal close={ handleModalClose }>
					<h3>What Day do you want to add it to?</h3>
					<ul className="dayList">
						{ days.map( ( name, key ) => (
							<li key={ key }>
								<button onClick={ () => setSelectedDay( name ) }>{ name }</button>
							</li>
						) ) }
					</ul>
				</Modal>
			) }
			<ul className="week">
				{ isDesktop ? (
					days.map( ( name, key ) => (
						<Day
							recipeToAdd={ selectedDay === name && recipeToAdd }
							done={ done }
							index={ key + 1 }
							key={ key }
							title={ name }
						/>
					) )
				) : (
					<Fragment>
						<div className="navigation days-navgaiton">
							{ days.map( ( name, key ) => (
								<button
									className={ name === activeDay.name ? 'active' : undefined }
									onClick={ () => {
										setActiveDay( { name, key } );
									} }
									key={ key }
								>
									{ name.substring( 0, 2 ) }
								</button>
							) ) }
						</div>
						<Day
							recipeToAdd={ selectedDay === activeDay.name && recipeToAdd }
							done={ done }
							index={ activeDay.key + 1 }
							title={ activeDay.name }
							key={ activeDay.key }
						/>
					</Fragment>
				) }
			</ul>
		</Fragment>
	);
};

export default Week;
