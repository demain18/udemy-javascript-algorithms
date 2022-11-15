function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;

  // i, j 포인터중 하나가 끝까지 도달할때까지 요소를 비교하며 result에 삽입시켜준다.
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }

  // arr1에 요소가 남아있다면 result에 삽입시켜준다.
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }

  // arr2에 요소가 남아있다면 result에 삽입시켜준다.
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
}

function mergeSort(arr) {
  // console.log(arr);
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let lft = mergeSort(arr.slice(0, mid));
  let rgt = mergeSort(arr.slice(mid));

  return merge(lft, rgt);
}

console.log(mergeSort([3, 9, 52, 13, 1, 93, 82, 33, 22]));
