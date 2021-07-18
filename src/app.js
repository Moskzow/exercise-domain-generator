/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

let pronoun = ["the", "your", "a"];
let adj = ["sleepy", "big", "sad", "hungry", "crazy"];
let noun = ["jogger", "racoon", "pirate", "loco", "detective"];
let domain = [".com", ".es", ".org", ".io", ".net"];

const Generator = () => {
  for (let a = 0; a < pronoun.length; a++) {
    for (let b = 0; b < adj.length; b++) {
      for (let c = 0; c < noun.length; c++) {
        for (let d = 0; d < domain.length; d++) {
          console.log(pronoun[a] + adj[b] + noun[c] + domain[d]);
        }
      }
    }
  }
};
Generator();
