const getCurrentTypeForError = (variable) => {
  if (variable === null) {
    return "null";
  }
  return typeof variable;
};

export default getCurrentTypeForError;
