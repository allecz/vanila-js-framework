import getCurrentTypeForError from "./utils/get-current-type-for-error.js";

const getElementFromDescription = (description) => {
  if (typeof description === "string" || typeof description === "number") {
    return document.createTextNode(description.toString());
  }

  if (typeof description.type === "function") {
    const normalizedDescription = description.type(description.props);

    return getElementFromDescription(normalizedDescription);
  }

  const element = document.createElement(description.type);
  const { children, ...props } = description.props;
  Object.assign(element, props);

  for (const child of children) {
    element.appendChild(getElementFromDescription(child));
  }

  return element;
};

const render = (description, container) => {
  if (!(container instanceof HTMLElement)) {
    throw new TypeError(
      `container is not a HTMLElement, received ${getCurrentTypeForError(container)}`,
    );
  }

  const element = getElementFromDescription(description);

  container.appendChild(element);
};

export default render;
