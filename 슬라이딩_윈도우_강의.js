function maxSubarrySum(arr, num) {
  if (num > arr.length) return null;

  let max = -Infinity;

  for (let i = 0; i < arr.length - num + 1; i++) {
    let tmp = 0;

    for (let j = 0; j < num; j++) {
      tmp += arr[i + j];
    }

    if (tmp > max) max = tmp;
  }

  return max;
}

console.log(maxSubarrySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
