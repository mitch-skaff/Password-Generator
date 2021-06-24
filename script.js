// Add characters for generating password
var specialCharacters = ["@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", ".",];
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCasedCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var upperCasedCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];

let totalCharacters = [].concat(specialCharacters, numericCharacters, lowerCasedCharacters, upperCasedCharacters);

// function to generate password
function generatePassword() {
  var passWordLength = prompt("How many characters would you like your password to contain?");
  console.log(passWordLength);

  // If/else statement to validate conditions
  if (isNaN(passWordLength)) {
    alert("Password length must be provided as a number.");
    return null;
  }

  if (passWordLength < 8) {
    alert("Password length must be at least 8 characters");
    return null;
  }

  if (passWordLength > 128) {
    alert("Password length must be at less than 129 characters");
    return null;
  }

  else {
    var containsNumericCharacters = confirm("Click OK to confirm including numerical characters in your password.");
    console.log("containsNumericCharacters", containsNumericCharacters);
    var containsSpecialCharacters = confirm("Click OK to confirm including special characters.");
    console.log(containsSpecialCharacters);
    var containsLowerCaseCharacters = confirm("Click OK to confirm including lowercase characters.");
    console.log(containsLowerCaseCharacters);
    var containsUpperCaseCharacters = confirm("Click OK to confirm including uppercase characters.");
    console.log(containsUpperCaseCharacters);
  };

  // if none of the above criteria was met, alert them to pick an option
  if (!containsNumericCharacters && !containsSpecialCharacters && !containsLowerCaseCharacters && !containsUpperCaseCharacters) {
    passwordOptions = alert("Please choose a characters option!");
  }

  var acceptableCharacters = [];

  // Creating seprate array for each response/option
  if (containsNumericCharacters) {
    acceptableCharacters.push(numericCharacters);
  }

  if (containsSpecialCharacters) {
    acceptableCharacters.push(specialCharacters);
  }

  if (containsLowerCaseCharacters) {
    acceptableCharacters.push(lowerCasedCharacters);
  }

  if (containsUpperCaseCharacters) {
    acceptableCharacters.push(upperCasedCharacters);
  }

  // merging arrays based on user options
  var mergedArrays = [].concat.apply([], acceptableCharacters);

  console.log(mergedArrays);

  var finalPassword = [];

  // 
  for (let i = 0; i < passWordLength; i++) {

    var randomCharacter = mergedArrays[Math.floor(Math.random() * mergedArrays.length)];
    finalPassword.push(randomCharacter);
  }

  console.log(finalPassword)
  return finalPassword.join("");
};




// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);