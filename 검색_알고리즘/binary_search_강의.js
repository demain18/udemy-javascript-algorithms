function binarySearch(arr, elem) {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);

  while (arr[mid] !== elem && start <= end) {
    elem < arr[mid] ? (end = mid - 1) : (start = mid + 1);
    mid = Math.floor((start + end) / 2);
  }

  return arr[mid] === elem ? mid : -1;
}

console.log(binarySearch([2, 5, 6, 9, 13, 15, 28], 28));
console.log(binarySearch([2, 5, 6, 9, 13, 15, 28], 50));
