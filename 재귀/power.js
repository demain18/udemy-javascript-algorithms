const power = (num, exponent) => {
  if (exponent == 0) return 1;

  let result = 0;

  const calc = (current, calcCount) => {
    if (calcCount >= exponent) return;

    if (current > result) result = current;

    calc(current * 2, calcCount + 1);
  };

  calc(num, 0);

  return result;
};

console.log(power(2, 0));
console.log(power(2, 2));
console.log(power(2, 4));
