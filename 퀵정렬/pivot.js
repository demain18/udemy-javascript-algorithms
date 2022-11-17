function pivot(arr, start = 0, end = arr.length + 1) {
  function swap(arr, i, j) {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }

  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
      console.log(arr);
    }
  }

  swap(arr, start, swapIdx);
  console.log(arr);

  return swapIdx;
}

console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3])); // 3을 반환해야 한다.
