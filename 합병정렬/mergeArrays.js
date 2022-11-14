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

console.log(merge([100, 200], [1, 2, 3, 5, 6]));
