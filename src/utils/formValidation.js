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
  const isValidEmail = emailRegex.test(email);
  if (!isValidEmail) {
    return "Email Id is not valid";
  }
};

const validatePassword = (password) => {
  const isPasswordVaild = passwordRegex.test(password);
  if (!isPasswordVaild) {
    return "Password is not valid";
  }
};

export { validateEmail, validatePassword };
