const solution = (arr1, arr2) => {
  // arr1로 map을 실행한다.
  arr1.map((i, x) => {
    // 요소를 제곱한 값으로 해당 요소의 값을 바꿔준다.
    arr1[x] = i * i;
  });

  // arr1을 sort해준 후 문자열로 변환시킨다.
  arr1 = arr1.sort().reduce((acc, cur) => acc.toString() + cur.toString());
  console.log(arr1);

  // arr2를 sort해준 후 문자열로 변환시킨다.
  arr2 = arr2.sort().reduce((acc, cur) => acc.toString() + cur.toString());
  console.log(arr2);

  // arr1과 arr2를 비교하고 서로 같다면 true를 반환하고 아니라면 false를 반환한다.
  return arr1 === arr2 ? true : false;
};

console.log(solution([1, 2, 3], [4, 1, 9]));
console.log(solution([1, 2, 3], [1, 9]));
