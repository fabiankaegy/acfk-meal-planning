"use strict";

const restRoot = "http://acfk.fabian-kaegy.de/wp-json";
const postId = get_permalink();

let url = `${restRoot}/wp/v2/posts/${postId}`;

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