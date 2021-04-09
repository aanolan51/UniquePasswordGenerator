// Assignment Code
//Set all the variables to be used.
var generateBtn = document.querySelector("#generate");

var password;
var userLength;
var upperCaseIncluded;
var lowerCaseIncluded;
var numbersIncluded;
var symbolsIncluded;

// Create the constant variables for all character sets to be included:
const upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '?', '+', '=', '/']
//Create an initial array to store all the characters in based on user input if they are to be included or not:
var charactersIncluded;



//Create functions to store each prompted response

function lenth(){
  // Store the user input into a variable for the length of the password:
  userLength = prompt("Choose a password length between 8 and 128:");

  //Ensure user has selected the correct password length. Test two conditions, first for the wrong input, prompt to try again. 
  //If correct input is selected, the else if statement will end the while loop and move to the next input.
  do {
    if(userLength < 8 || userLength > 128){
      userLength = prompt("Try again. Choose a password length between 8 and 128:");
      var continue1 = 0;
    } else if (userLength >= 8 && userLength <= 128){
      var continue1 = 1;
    }
  } while (continue1 !== 1);
  console.log(userLength);
}

function upper(){
  /* Create the variables for which character sets the user wants included. Convert input string to all uppercase to 
  simplify if conditions:*/
  upperCaseIncluded = prompt("Include UPPERCASE letters, yes or no?").toUpperCase();
  // Ensure the user has put in the correct input. Continue to prompt until correct input is received. 
  do {
    if(upperCaseIncluded !== "YES" && upperCaseIncluded !== "NO"){
      upperCaseIncluded = prompt("Try again. Include UPPERCASE letters, yes or no?").toUpperCase();
      var continue2 =0;
    } else if(upperCaseIncluded == "YES" || upperCaseIncluded == "NO"){
      var continue2 = 1;
    }
  } while (continue2 !== 1);
}

function lower(){
  lowerCaseIncluded = prompt("Include lowercase letters, yes or no?").toUpperCase();
  do {
    if(lowerCaseIncluded !== "YES" && lowerCaseIncluded !== "NO"){
      lowerCaseIncluded = prompt("Try again. Include lowercase letters, yes or no?").toUpperCase();
      var continue3 = 0;
    } else if(lowerCaseIncluded == "YES" || lowerCaseIncluded == "NO"){
      var continue3 = 1;
    }
  } while (continue3 !== 1);
}

function numsInc(){
  numbersIncluded = prompt("Include numbers, yes or no?").toUpperCase();
  do {
    if(numbersIncluded !== "YES" && numbersIncluded !== "NO"){
      numbersIncluded = prompt("Try again. Include numbers, yes or no?").toUpperCase();
      var continue4 = 0;
    } else if(numbersIncluded == "YES" || numbersIncluded == "NO"){
      var continue4 = 1;
    }
  } while (continue4 !== 1);
}

function symbInc(){
  symbolsIncluded = prompt("Include symbols, yes or no?").toUpperCase();
  do {
    if(symbolsIncluded !== "YES" && symbolsIncluded !== "NO"){
      symbolsIncluded = prompt("Try again. Include symbols, yes or no?").toUpperCase();
      var continue5 = 0;
    } else if(symbolsIncluded == "YES" || symbolsIncluded == "NO"){
      var continue5 = 1;
    }
  } while (continue5 !== 1);
}



// Create the function to generate the password:
function generatePassword(){
  // Reset the password to an empty string:
  password = '';

  //Call the functions for user input:
  lenth();
  upper();
  lower();
  numsInc();
  symbInc();

  //Create an initial array to store all the characters in based on user input if they are to be included or not:
  charactersIncluded= [];

  /* Create the if statements to pass in the character set a user chooses to include. Using the initial array, 
  each if statement will continue to add to that array, or skip over it if that character set it not included by the user:*/
  if (upperCaseIncluded == "YES" ){
    charactersIncluded = charactersIncluded.concat(upperCase);
  }
  if(lowerCaseIncluded == "YES"){
    charactersIncluded = charactersIncluded.concat(lowerCase);
  }
  if(numbersIncluded == "YES"){
    charactersIncluded = charactersIncluded.concat(numbers);
  }
  if(symbolsIncluded == "YES"){
    charactersIncluded = charactersIncluded.concat(symbols);
  }

  //Test to ensure correct information was passed into the array for the characters that will be used for the random generator:
  console.log(charactersIncluded);

  //Create the random password using the input from the userLength:
  /*Using math floor (convert math random to an intger), create a random index that will be called from the charactersIncluded array to display
  that character at that specificed random index. This will then be added to the password until it reaches the specified userLength. 
  Function will return the characters now stored in the variable password. */
  for (i = 0; i < userLength; i++){
    password = password + charactersIncluded[Math.floor(Math.random()* charactersIncluded.length)];
  }

return password;
}

//Test the password is being written properly:
console.log(password);



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
