function selection(arr) {
  // result, minIndex 변수를 선언한다.
  let result = [];
  let minIndex = 0;
  // arr의 길이가 0보다 크다면 while문을 실행한다.
  while (arr.length > 0) {
    // arr에서 map을 실행한다.
    arr.map((i, x) => {
      // minIndex과 x의 값을 비교하며 최소값을 찾는다.
      if (arr[minIndex] > arr[x]) minIndex = x;
    });
    // 최소값을 result변수에 삽입한다.
    result.push(arr[minIndex]);
    // 최소값을 arr배열에서 삭제한다.
    arr.splice(minIndex, 1);
    // minIndex을 0으로 초기화시킨다.
    minIndex = 0;
  }
  // result변수를 반환한다.
  return result;
}

console.log(selection([23, 5, 15, 29, 38, 1, 2, 11, 30]));
