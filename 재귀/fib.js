const fib = (maxCount) => {
  // result, past, count 변수를 선언한다.
  let result = 0;
  let past = 1;
  let count = 0;
  // calc 재귀함수를 선언한다.
  const calc = (now) => {
    console.log(now);
    // count의 값이 maxCount보다 크다면 종료 조건으로 설정한다.
    if (count > maxCount) return;
    // count값을 1 상승시킨다.
    count = count + 1;
    // pastTmp변수를 선언하고 past값을 할당한다.
    let pastTmp = past;
    // past에 past값과 now값을 더한 값을 할당한다.
    past = past + now;
    // pastTmp값과 now값을 더하여 calc의 인자로 호출한다.
    calc(pastTmp + now);
  };
  // calc 함수를 실행한다.
  calc(1);
  // result 변수를 반환한다.
  return past;
};

console.log(fib(4));
console.log(fib(10));
