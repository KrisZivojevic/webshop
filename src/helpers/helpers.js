export const validate = (values) => {
  for (let key in values) {
    if (values[key].trim() === "") {
      return false;
    };
    return true;
  }
}