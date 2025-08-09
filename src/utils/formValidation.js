const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//^ → matches from start of string
//[^\s@]+ → one or more characters that are not whitespace or @.
// @ → Must contain an @ symbol.
// [^\s@]+ → Domain name part (not whitespace or @).
//. in regex means “any single character” unless you escape it.
// \. → Must contain a dot before the domain extension.
// [^\s@]+$ → atleast one character after the dot (like .com, .net).
//$ → matches end of string

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
// (?=.*[a-z]) → at least one lowercase
// (?=.*[A-Z]) → at least one uppercase
// (?=.*\d) → at least one digit
// (?=.*[@$!%*?&]) → at least one special character
// [A-Za-z\d@$!%*?&]{8,10} → only these characters,  length between 8 and 10

const validateEmail = (email) => {
  return {
    isValid: emailRegex.test(email),
    message: "Email Id is not valid",
  };
};

const validatePassword = (password) => {
  const errors = [];
  errors.push({
    isValid: password.length >= 8,
    message: "At least 8 characters long.",
  });
  errors.push({
    isValid: /[A-Z]/.test(password),
    message: "At least one uppercase letter.",
  });
  errors.push({
    isValid: /[a-z]/.test(password),
    message: "At least one lowecase letter.",
  });
  errors.push({
    isValid: /[0-9]/.test(password),
    message: "At least one number.",
  });
  errors.push({
    isValid: /[@$!%*?&]/.test(password),
    message: "At least one special character.",
  });

  return {
    isValid: errors.filter((err) => err.isValid === false).length === 0,
    errors,
  };
};

export { validateEmail, validatePassword };
