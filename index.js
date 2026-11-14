import { createElement, render } from "./framework/index.js";

const card = createElement(
  "div",
  { className: "card", id: "closures" },
  createElement("h2", null, "Topic: Closures"),
  createElement("p", null, "Încredere: ", 4, " / 5"),
  createElement(
    "ul",
    null,
    createElement("li", null, "Recapitulat azi"),
    createElement("li", null, "Următoarea: peste ", 14, " zile"),
  ),
);

render(card, document.getElementById("root"));
