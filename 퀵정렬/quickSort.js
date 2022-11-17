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
      // console.log(arr);
    }
  }

  swap(arr, start, swapIdx);
  // console.log(arr);

  return swapIdx;
}

function quickSort(arr, lft = 0, rgt = arr.length - 1) {
  if (lft < rgt) {
    let pivotIdx = pivot(arr, lft, rgt);

    // 왼쪽 배열 정렬
    quickSort(arr, lft, pivotIdx - 1);

    // 오른쪽 정렬
    quickSort(arr, pivotIdx + 1, rgt);
  }
  return arr;
}

console.log(quickSort([4, 6, 9, 1, 2, 5, 3]));
