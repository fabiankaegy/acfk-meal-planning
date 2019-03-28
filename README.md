# acfk-meal-planning
[![Netlify Status](https://api.netlify.com/api/v1/badges/d961fa01-c0f4-4496-827a-4e23c634218c/deploy-status)](https://app.netlify.com/sites/acfk-meal-planning/deploys)

A meal planning site that allows you to create your meal plan for the next week from a list of stored recipes.

## Application structure

This react application uses the new hooks syntax, and is based around the usage of context. 
Upon loading the page, the recipes will be fetched from the WordPress Rest API, transformed into a nicer data structure, and stored inside the `availableRecipeContext`. This context it wrapped around all the routes, so you can always have access to all the recipes from the server. This data will also never be modified. 

The recipes you want to add to a day, are stored inside the day component itself, so each day is living in its own 'sandbox'. That way we can make sure, that there is no direct way of modifying the recipes in a day from outside the day.

The only exposed way for you to interact with the data of the day, is by passing a prop called `recipeToAdd` into the day. This prop needs to be an object with the recipe and an callback function called done attached to it. Once the passed recipe is added to the day, the callback function will be called.

Upon adding a recipe to a day, it will get an unique identifier, to enable having the same recipe multiple times in a day and still being able to remove each one individually.


## WordPress data structure

### Custom Post Type
name: `acfk_recipes`
 

#### Meta Fields
| meta_key            | data_type     | required |
| ------------------- | ------------- | -------- |
| `acfk_prep_time`    | int (seconds) | true     |
| `acfk_cooking_time` | int (seconds) | true     |
| `acfk_description`  | string        | true     |
| `acfk_ingredients`  | string        | true     |
| `acfk_servings`     | int           | true     |
| `acfk_prep_time`    | int (seconds) | true     |

#### default fields
- title
- content
- excerpt
- featuredImage
- categories
- tags

#### additional taxonomies
- diets


## Contributers
A project by [@amberchunn](https://github.com/amberchunn) & [@fabiankaegy](https://github.com/fabiankaegy). Created as an entry for the [javascriptforwp](https://javascriptforwp.com) hackathon early 2019.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

#### `npm run deploy`

Takes the contents of the build directory and pushes them to the `gh-pages` branch. This will result in the site being deployed to the url: [https://fabiankaegy.github.io/acfk-meal-planning/](https://fabiankaegy.github.io/acfk-meal-planning/).

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**
