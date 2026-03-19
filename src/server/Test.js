function checkValidation(input, validation) {
  validation = "^.{1,2500}$"
  input = "ddd"
  console.log(input)
  console.log(validation)
  if (!validation) return true
  const validationPattern = new RegExp(validation);
  const valid = validationPattern.test(input);
  console.log(valid)
  return valid;
}

