// Assignment code here
var upperValues = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerValues = "abcdefghijklmnopqrstuvwxyz";
  var numberValues = "0123456789";
  var specialValues = "!@#$%^&*()?.<\>|=+:;,[-_]";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // Pop up prompts for password
  function displayPrompt() {
    // Identifying criteria
    var characters = Number(prompt("Choose a length between 8 and 128"));
    var upperCase = confirm("You're password should have an uppercase letter!");
    var lowerCase = confirm("You're password should have a lowercase letter!");
    var numericValues = confirm("You're password should have numeric values!");
    var specialCharacters = confirm("You're password should have special characters");
    if (characters < 8 || characters > 128) {
      passwordLength = prompt("Choose a length between 8 and 128");
    };
  }
  displayPrompt()

  function generatePassword(){

    if (upperCase && lowerCase && numericValues && specialCharacters){

    }
  }
  

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
