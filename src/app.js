/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let valorRandom1 = Math.floor(Math.random() * who.length);
  let valorRandom2 = Math.floor(Math.random() * action.length);
  let valorRandom3 = Math.floor(Math.random() * what.length);
  let valorRandom4 = Math.floor(Math.random() * when.length);

  document.getElementById("excuse").innerHTML =
    who[valorRandom1] +
    " " +
    action[valorRandom2] +
    " " +
    what[valorRandom3] +
    " " +
    when[valorRandom4];
};
