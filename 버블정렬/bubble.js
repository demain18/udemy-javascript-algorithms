function bubble(arr) {
  // result 변수를 선언한다.
  let result = [];
  // 배열의 길이가 0보다 크다면 while문을 실행한다.
  while (arr.length > 0) {
    // arr에서 반복문을 돌린다.
    arr.map((i, x) => {
      // 1번과 2번 항목을 비교하고, 1번이 2번보다 더 크거나, 2번의 값이 undefined가 아니라면 값을 교환한다.
      if (arr[x] > arr[x + 1] && arr[x + 1] !== undefined) {
        let tmp = arr[x + 1];
        arr[x + 1] = arr[x];
        arr[x] = tmp;
      }
    });
    // arr에서 끝에 있는 값을 result에 unshift한다.
    result.unshift(arr[arr.length - 1]);
    // arr에서 끝에 있는 값을 제거한다.
    arr = arr.splice(0, arr.length - 1);
  }

  return result;
}

console.log(bubble([21, 61, 83, 11, 13, 3, 33, 93]));
