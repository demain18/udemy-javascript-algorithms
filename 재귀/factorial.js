const factorial = (num) => {
  if (num === 0) return 1;
  let hap = 1;

  const calc = (calcNum) => {
    if (calcNum <= 1) return 1;
    hap = hap * calcNum;
    calc(calcNum - 1);
  };

  calc(num);

  return hap;
};

console.log(factorial(1));
console.log(factorial(4));
