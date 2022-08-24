const object = {
  day: "Monday",
  date: 23,
  month: "February",
};
const someString = "year";

function stringIsKey(obj, str) {
  const isKey = Object.keys(obj).includes(str) ? true : false;
  return isKey;
}

console.log(stringIsKey(object, someString));
