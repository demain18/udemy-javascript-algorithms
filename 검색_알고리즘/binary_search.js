const binarySearch = (list, target) => {
  let lft = 0;
  let mid = Math.round(list.length / 2);
  let rgt = list.length - 1;

  while (lft < rgt) {
    mid = Math.round(lft + rgt / 2);

    if (list[mid] === target) return mid;

    if (target < list[mid]) {
      rgt = mid - 1;
    } else if (target > list[mid]) {
      lft = mid + 1;
    }
    console.log(lft, mid, rgt);
  }
};

console.log(
  binarySearch([1, 5, 23, 50, 122, 133, 155, 293, 599, 611, 612, 657, 999], 612)
);
