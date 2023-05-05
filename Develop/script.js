//List of variables declaring the criteria

var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // uppercase letters
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";  // lowercase letter
var numbers = "0123456789" // numbers
var specialCharacters = "!@#$%^&*()_+~`|}{[]:;?></-=;" // special characters
var finalpassword = [""] // The password that will be generated

//Created function that is refrenced in line 66
function generatePassword() {
  console.log("button is working")

  //1. Prompt the user for the password criteria
  //  a. Password lenght between 8 < 128
  //  b. Lowercase, uppercase, number, special character
var criteriaCharacters = window.prompt("Select password character count 8 - 128");
var criteriaLowerCase = window.confirm("Would you like Lowercase characters? If yes, select ok");
var criteriaUpperCase = window.confirm("Would you like Uppercase characters, If yes, select ok");
var criteriaNumbers = window.confirm("Numbers? If yes, select ok")
var criteriaSpecialCharacters = window.confirm("Would you like any Special Characters. If yes, select ok");
  //2. Validate the input. Need to ensure that it meets the requirement of characters 8 < 128 and at least one character is selected
  var actualpassword =[]
  
  
 var validCriteria = false; 
  while (!validCriteria) {
    var criteriaCharacters = window.prompt("Select password character count 8 - 128");
    if (criteriaCharacters >= 8 && criteriaCharacters <= 128){
      validCriteria = true;
    }
  //Need assistance in making this while loop continue to prompt the user to enter valid integer
  } 
  //3. Generate password based on below criteria

var selectedCriteria ="";

if (criteriaLowerCase == true) {
selectedCriteria += lowercaseLetters;
}
if (criteriaUpperCase==true) {
selectedCriteria += uppercaseLetters;
}
if (criteriaNumbers==true) {
  selectedCriteria += numbers;
}
if (criteriaSpecialCharacters==true) {
  selectedCriteria += specialCharacters;
}

  for (var i = 0; i < criteriaCharacters; i += 1) {
    var randomSelection = 
    selectedCriteria[Math.floor(Math.random() * selectedCriteria.length)]; 
  
    actualpassword.push(randomSelection);
    }
  finalpassword = actualpassword.join(""); // adds the resulted "array" of "actualpassword" to globally scoped var "finalpassword" as a string to eventually be shown on the page
  return finalpassword;
  }
  

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





