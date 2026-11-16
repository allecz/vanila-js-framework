import getCurrentTypeForError from "./utils/get-current-type-for-error.js";

const isEventProp = (key, value) => {
  if (/^on[A-Z]/.test(key) && typeof value === "function") {
    return true;
  }

  return false;
};

const assignProperties = (element, props) => {
  const normalizedProps = {};

  for (const [key, value] of Object.entries(props)) {
    if (key === "style") {
      for (const [styleKey, styleValue] of Object.entries(props.style)) {
        element.style[styleKey] = styleValue;
      }
    } else if (isEventProp(key, value)) {
      element[key.toLowerCase()] = value;
    } else if (key in element) {
      normalizedProps[key] = value;
    } else {
      element.setAttribute(key, value);
    }
  }

  Object.assign(element, normalizedProps);

  return element;
};

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
  assignProperties(element, props);

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
