function linearSearch(list, target) {
  return (
    list
      .map((i, x) => {
        if (i === target) return x;
      })
      .filter((i) => i !== undefined)[0] || -1
  );
}

console.log(linearSearch([1, 3, 5], 3));
console.log(linearSearch([1, 3, 5], 7));
