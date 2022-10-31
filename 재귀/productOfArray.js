const productOfArray = (input) => {
  // 배열의 길이가 1보다 작다면 배열의 첫번째 값을 반환한다.
  if (input.length <= 1) return input[0];
  // result 변수를 선언한다.
  let result = 1;
  // calc 재귀함수를 선언한다.
  const calc = (arr) => {
    // 배열의 길이가 1보다 작다면 배열의 첫번째 요소를 반환한다.(종료조건)
    if (arr.length < 1) return;
    // result의 값을 result의 값과 첫번째 요소를 곱한 값으로 바꾼다.
    result = result * arr[0];
    // 자기 자신을 호출하며 인자 배열을 한칸 자른다.
    calc(arr.slice(1));
  };
  // calc 함수를 실행한다.
  calc(input);
  // result 변수를 반환한다.
  return result;
};

console.log(productOfArray([1, 2, 3])); // 6

sole.log(productOfArray([1, 2, 3, 10])); // 60
