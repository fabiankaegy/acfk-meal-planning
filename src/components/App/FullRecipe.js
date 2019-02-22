import React, { Component, useEffect } from "react";
import "./style.scss";
import logo from "../../logo.svg";

const restRoot = "http://acfk.fabian-kaegy.de/wp-json";

let url = `${restRoot}/wp/v2/acfk_recipes/`;

fetch(url)
  .then(response => {
    return response.json();
  })
  .then(post => {
    return displayPost(post);
  })
  .catch(error => {
    console.log(error);
  });

function displayPost(post) {
  console.log(post.title.rendered);
};

// Large Featured Img
// Description
// servings, prep time, cook time --icon, text
// Ingredients list (later amt, ing colum output)
// Instructions (Later, steped output)

function FeaturedImg() {

  useEffect(() => {
    // Grab recipe info from REST api
  });
  return (
    <div>
     <img src="" alt="Large Recipe Image"/>
    </div>
  );
}
