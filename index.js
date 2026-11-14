import { createElement } from "./utils/createElement.js";

const title = createElement("h1", null, "Salut!");

const link = createElement("a", { href: "/about", className: "nav" }, "Despre");

const card = createElement(
  "div",
  { className: "card" },
  createElement("h2", null, "Topic: Closures"),
  createElement("p", null, "Încredere: ", 4, " / 5"),
  createElement(
    "ul",
    null,
    createElement("li", null, "Recapitulat azi"),
    createElement("li", null, "Următoarea: peste ", 14, " zile"),
  ),
);
