function outer(input) {
  let outerScopedVariable = [];

  function helper(helperInput) {
    helper(helperInput--);
  }
  helper(input);

  return outerScopedVariable;
}
