function filter_list(array) {
  const filtered_list = array.filter(el => typeof el === 'number');

  return filtered_list;
}

console.log(filter_list([1, 2, 'a', 'b']));
