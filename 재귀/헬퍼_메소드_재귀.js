function outer(input) {
  let outerScopedVariable = [];

  function helper(helperInput) {
    // modify the outerScpoedVariable
    helper(helperInput--);
  }
  helper(input);

  return outerScopedVariable;
}
