const solution = (arr1, arr2) => {
  if (!arr1 && !arr2) return true;

  arr1 = arr1.split("").sort().join("");
  arr2 = arr2.split("").sort().join("");

  return arr1 === arr2 ? true : false;
};

console.log(solution("", ""));
console.log(solution("aaz", "zza"));
console.log(solution("anagram", "nagaram"));
console.log(solution("rat", "car"));
console.log(solution("awesome", "awesom"));
