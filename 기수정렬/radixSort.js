// num에서 우측에서 i에 위치한 값을 반환한다.
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// num의 자릿수를 반환한다.
function digitCount(num) {
  if (num === 0) return 1;

  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// nums에서 가장 큰 자릿수를 반환한다.
function mostDigits(nums) {
  let maxDigits = 0;

  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }

  return maxDigits;
}

function radixSort(nums) {
  // nums에서 가장 큰 자릿수를 변수에 바인딩한다.
  let maxDigitsCount = mostDigits(nums);

  // maxDigitsCount만큼 루프를 실행한다.
  for (let k = 0; k < maxDigitsCount; k++) {
    // 10개의 비어있는 배열을 가진 하나의 배열을 변수에 바인딩한다.
    let digitBuckets = Array.from({ length: 10 }, () => []);

    // nums의 길이만큼 루프를 실행한다.
    for (let i = 0; i < nums.length; i++) {
      // nums의 요소마다 getDigit을 실행하고, digitBuckets에 삽입한다.
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }

    // digitBuckets을 모두 뭉쳐서 nums에 바인딩한다.
    console.log(digitBuckets);
    nums = digitBuckets.flatMap((i) => i);
  }

  return nums;
}

console.log(radixSort([23, 345, 5467, 12, 2345, 9852]));
