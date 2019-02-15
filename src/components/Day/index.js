import React from 'react';
import './style.scss';

const Day = props => {
    return (
        <div className="day">
            <header className="header">
                <h2>{props.title}</h2></header>
            <div className="recipes">
                {props.recipes.map( recipe => (
                    <span>A Recipe will go here</span>
                ) )}
            </div>
        </div>
    )
}

export default Day;