function naiveSearch(sentence, match) {
  sentence = sentence.split("").filter((i) => i !== " ");
  match = match.split("");
  let count = 0;

  sentence.map((i1, x1) => {
    let matchCount = 0;

    match.map((i2, x2) => {
      if (sentence[x1 + x2] !== i2) {
        return;
      } else {
        matchCount++;
      }
    });

    if (matchCount >= match.length) count++;
  });

  return count;
}

console.log(naiveSearch("we are the world we ard the children", "we"));
