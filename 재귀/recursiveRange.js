const recursiveRange = (input) => {
  // result 변수를 선언한다.
  let result = 0;
  // calc 재귀함수를 선언한다.
  const calc = (count) => {
    // count가 1보다 작다면 종료 조건으로 설정한다.
    if (count < 1) return;
    // result에 count를 더한다.
    result += count;
    // 재귀 함수로 calc를 실행한다. 이때 인자의 값은 count - 1이 된다.
    calc(count - 1);
  };
  // calc 함수를 실행한다.
  calc(input);
  // result 변수를 반환한다.
  return result;
};

console.log(recursiveRange(6));
console.log(recursiveRange(10));
