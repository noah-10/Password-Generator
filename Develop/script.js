// Creating variables that hold each prompts value
var upperValues = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerValues = "abcdefghijklmnopqrstuvwxyz";
var numberValues = "0123456789";
var specialValues = "!@#$%^&*()?.<>|=+:;,[-_]";
var keyLength = null;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Function to create the password
function writePassword() {
  // Pop up prompts for password
    // Identifying criteria
    keyLength = Number(prompt("Choose a length between 8 and 128"));

    // Checks to make sure the value for keyLength the user inputed mathes criteria and if not is replayed until it is true
    while (keyLength < 8 || keyLength > 128 || isNaN(keyLength)) {
      window.alert("Please choose a number between 8 and 128");
      keyLength = Number(prompt("Choose a length between 8 and 128"));
    }

    // Confirming or not what values the user wants
    var capitalLetters = confirm("Press \"OK\" to confirm you would like capital letters in your password!");
    var lowerCase = confirm("Press \"OK\" to confirm you would like lower case letters in your password!");
    var numericValues = confirm("Press \"OK\" to confirm you would like number values in your password!");
    var specialCharacters = confirm("Press \"OK\" to confirm you would like special characters in your password!");

    // Checks to make sure the user selected atleast one character to use
    while (capitalLetters === false && lowerCase === false && numericValues === false && specialCharacters === false){
      window.alert("Please confirm atleast one character type");
      capitalLetters = confirm("Press \"OK\" to confirm you would like capital letters in your password!");
      lowerCase = confirm("Press \"OK\" to confirm you would like lower case letters in your password!");
      numericValues = confirm("Press \"OK\" to confirm you would like number values in your password!");
      specialCharacters = confirm("Press \"OK\" to confirm you would like special characters in your password!");
    }

    // This variable will hold all values the user wants
    allPrompts = [""];

    // If user selected they want capital letters it will add the variable containing all capital letters to the variable allPrompts
    if (capitalLetters === true){
      allPrompts += upperValues ;
    }

    // If user selected they want lower case letters it will add the variable containing all lower case letters to the variable allPrompts
    if(lowerCase === true){
      allPrompts += lowerValues ;
    }

    // If user selected they want number values it will add the variable containing all number values to the variable allPrompts
    if(numericValues === true) {
      allPrompts += numberValues ;
    }

    // If user selected they want special characters it will add the variable containing all special characters to the variable allPrompts
    if(specialCharacters === true){
      allPrompts += specialValues ;
    }

    // Takes the length of the variable allPrompts that now contains all of the characters the user wants
    allPromptsLength = allPrompts.length
    
    var password = "";
    for(var i = 0; i < keyLength; i++) {

      // A for loop that uses Math floor and random to create a random number based on the length of allPrompts.
      var randomNumber = Math.floor(Math.random() * allPromptsLength);

      // Takes a character from allPrompts in the index of randomNumber 
      password += allPrompts.charAt(randomNumber);
    }

    // Returns the final password to the function
    return password;
  }

  function generatePassword(){
  
    // Stores the value of the function writePassword to a variable called password
    var password = writePassword();

    // Selects the id password which is where the password will be displayed at and stores in a variable
    var passwordText = document.querySelector("#password");

    // The variable containing containing where the password will be displayed, adds the value of the password from the function writePassword
    passwordText.value = password;

  }

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
