import { createElement, render } from "./framework/index.js";

const Toolbar = () =>
  createElement(
    "div",
    {
      className: "toolbar",
      style: { display: "flex", gap: "8px", backgroundColor: "#222" },
    },

    // F4.1: handler de click
    createElement(
      "button",
      { onClick: () => console.log("Salvat!") },
      "Salvează",
    ),

    // F4.3: atribute booleene
    createElement("button", { disabled: true }, "Șterge"),
    createElement("button", { disabled: false }, "Editează"),
    createElement("input", { type: "checkbox", checked: true }),

    // F4.2: atribute obișnuite, inclusiv cele fără proprietate DOM
    createElement("input", {
      type: "text",
      placeholder: "Caută topic...",
      "aria-label": "Caută topic",
      "data-testid": "search",
    }),
    createElement("label", { htmlFor: "search" }, "Caută"),
  );

render(createElement(Toolbar, null), document.getElementById("root"));
