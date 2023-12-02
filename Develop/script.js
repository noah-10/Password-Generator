// Assignment code here
var upperValues = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerValues = "abcdefghijklmnopqrstuvwxyz";
var numberValues = "0123456789";
var specialValues = "!@#$%^&*()?.<>|=+:;,[-_]";
var keyLength = null;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // Pop up prompts for password
    // Identifying criteria
    keyLength = Number(prompt("Choose a length between 8 and 128"));

    while (keyLength < 8 || keyLength > 128 || isNaN(keyLength)) {
      window.alert("Please choose a number between 8 and 128");
      keyLength = Number(prompt("Choose a length between 8 and 128"));
    }

    var capitalLetters = confirm("Press \"OK\" to confirm you would like capital letters in your password!");
    var lowerCase = confirm("Press \"OK\" to confirm you would like lower case letters in your password!");
    var numericValues = confirm("Press \"OK\" to confirm you would like number values in your password!");
    var specialCharacters = confirm("Press \"OK\" to confirm you would like special characters in your password!");

    while (capitalLetters === false && lowerCase === false && numericValues === false && specialCharacters === false){
      window.alert("Please confirm atleast one character type");
      capitalLetters = confirm("Press \"OK\" to confirm you would like capital letters in your password!");
      lowerCase = confirm("Press \"OK\" to confirm you would like lower case letters in your password!");
      numericValues = confirm("Press \"OK\" to confirm you would like number values in your password!");
      specialCharacters = confirm("Press \"OK\" to confirm you would like special characters in your password!");
    }

    allPrompts = [""];

    if (capitalLetters === true){
      allPrompts += upperValues ;
    }

    if(lowerCase === true){
      allPrompts += lowerValues ;
    }

    if(numericValues === true) {
      allPrompts += numberValues ;
    }

    if(specialCharacters === true){
      allPrompts += specialValues ;
    }

    allPromptsLength = allPrompts.length
    
    var password = "";
    for(var i = 0; i < keyLength; i++) {
      var rng = Math.floor(Math.random() * allPromptsLength);
      password += allPrompts.charAt(rng);
    }

    return password;
  }

  function generatePassword(){
  
    var password = writePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;

  }
console.log()
// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
