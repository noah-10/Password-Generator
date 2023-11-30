// Assignment code here
var upperValues = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerValues = "abcdefghijklmnopqrstuvwxyz";
var numberValues = "0123456789";
var specialValues = "!@#$%^&*()?.<>|=+:;,[-_]";
var allPrompts = [];
var keyLength = null;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // Pop up prompts for password
    // Identifying criteria
    keyLength = Number(prompt("Choose a length between 8 and 128"));
    var capitalLetters = confirm("You're password should have an uppercase letter!");
    var lowerCase = confirm("You're password should have a lowercase letter!");
    var numericValues = confirm("You're password should have numeric values!");
    var specialCharacters = confirm("You're password should have special characters");
    if (keyLength < 8 || keyLength > 128) {
      characters = prompt("Choose a length between 8 and 128");
    };

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
