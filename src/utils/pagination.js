import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize; //formula to calcule the IndexStart
  return _(items).slice(startIndex).take(pageSize).value();
  //  _() to create a wrapper lodash type
  // .value() to return a regular js expression !=  _()
  // slice and take , working with arrays
}
