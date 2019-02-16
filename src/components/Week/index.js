import React from "react";
import Day from "../Day";
import "./style.scss";

class Week extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      days: [
        {
          id: 0,
          name: "Monday",
          recipes: [1, 2, 3, 4, 5]
        },
        {
          id: 1,
          name: "Tuesday",
          recipes: []
        },
        {
          id: 2,
          name: "Wednesday",
          recipes: []
        },
        {
          id: 3,
          name: "Thursday",
          recipes: []
        },
        {
          id: 4,
          name: "Friday",
          recipes: []
        },
        {
          id: 5,
          name: "Saturday",
          recipes: []
        },
        {
          id: 7,
          name: "Sunday",
          recipes: []
        }
      ]
    };
  }

  addRecipe = (day, recipe) => {
    let newDays = [...this.state.days];
    let newRecepies = [...newDays[day].recipes];
    newRecepies.push(recipe);

    newDays[day].recipes = newRecepies;

    this.setState({
      ...this.state,
      days: newDays
    });
  };

  removeRecipe = (day, recipe) => {
    // needs to be implemented
  };

  clearRecipes = day => {
    // needs to be implemented
  };

  render() {
    return (
      <section className="week">
        {this.state.days.map((day, key) => (
          <Day
            key={key}
            id={day.id}
            title={day.name}
            recipes={day.recipes}
            addRecipe={this.addRecipe}
            removeRecipe={this.removeRecipe}
            clearRecipes={this.clearRecipes}
          />
        ))}
      </section>
    );
  }
}

export default Week;
