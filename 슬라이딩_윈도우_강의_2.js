function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tmpSum = 0;

  if (arr.length < num) return null;

  for (let i = 0; i < num; i++) {
    tmpSum += arr[i];
  }

  for (let i = num; i < arr.length; i++) {
    tmpSum = tmpSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tmpSum);
  }

  return maxSum;
}

console.log(maxSubarraySum([2, 6, 9, 3, 1, 8, 5, 6, 3], 3));
