/**
 * External dependencies
 */
import React, { useState, useEffect, Fragment } from 'react';
import { Redirect } from 'react-router-dom';

const AvailableRecipesContext = React.createContext();

const Recipes = ( props ) => {
	const [ recipes, setRecipes ] = useState( [] );
	const [ error, setError ] = useState( false );

	useEffect( () => {
		window.fetch( 'https://acfk.fabian-kaegy.de/wp-json/wp/v2/acfk_recipes?_embed' )
			.then( ( response ) => {
				if ( response.ok ) {
					return response.json();
				}
				throw response.error;
			} )
			.then( ( fetchedRecipes ) => {
				const recipesData = fetchedRecipes.map( ( recipe ) => {
					return Object.assign(
						{},
						{
							id: recipe.id,
							title: recipe.title.rendered,
							content: recipe.content.rendered,
							description: recipe.meta.acfk_description,
							slug: recipe.slug,
							prepTime: recipe.meta.acfk_prep_time,
							cookingTime: recipe.meta.acfk_cooking_time,
							servings: recipe.meta.acfk_servings,
							ingredients: recipe.meta.acfk_ingredients,
							image: {
								src: recipe._embedded[ 'wp:featuredmedia' ][ 0 ].source_url,
								alt: recipe._embedded[ 'wp:featuredmedia' ][ 0 ].alt_text,
							},
						}
					);
				} );
				setRecipes( recipesData );
			} )
			.catch( ( fetchError ) => {
				setError( fetchError );
			} );
	}, [] );

	return (
		<Fragment>
			{ error &&
				<Redirect to={ `/error/${ error }` } />
			}
			<AvailableRecipesContext.Provider value={ recipes }>
				{ props.children }
			</AvailableRecipesContext.Provider>
		</Fragment>
	);
};

export { Recipes, AvailableRecipesContext };
