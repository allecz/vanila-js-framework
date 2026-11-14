import { createElement, render } from "./framework/index.js";

const TopicTitle = (props) => createElement("h2", null, "Topic: ", props.name);

const Confidence = (props) =>
  createElement(
    "p",
    { className: "confidence" },
    "Încredere: ",
    props.level,
    " / 5",
  );

const TopicCard = (props) =>
  createElement(
    "div",
    { className: "card" },
    createElement(TopicTitle, { name: props.name }),
    createElement(Confidence, { level: props.level }),
  );

const Panel = (props) =>
  createElement(
    "section",
    { className: "panel" },
    createElement("h1", null, props.title),
    createElement("div", { className: "panel-body" }, ...props.children),
  );

const app = createElement(
  Panel,
  { title: "De recapitulat azi" },
  createElement(TopicCard, { name: "Closures", level: 4 }),
  createElement(TopicCard, { name: "Event loop", level: 2 }),
);

render(app, document.getElementById("root"));
