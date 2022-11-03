function linearSearch(list, target) {
  const result = list
    .map((i, x) => {
      if (i === target) return x;
    })
    .filter((i) => i !== undefined)[0];

  return result !== undefined ? result : -1;
}

console.log(linearSearch([1, 3, 5], 3));
console.log(linearSearch([1, 3, 5], 7));
console.log(linearSearch([100], 100));
