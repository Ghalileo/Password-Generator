// Assignment Code
//This sections define all global variables 
var generateBtn = document.querySelector("#generate");
var letters = ["a" ,"b", "c", "d", "e" ,"f" ,"g", "h", "i", "j", "k", "l", "m" ,"n", "o", "p" ,"q", "r" ,"s" ,"t" ,"u", "g" ,"w" ,"x", "y", "z"];
var num =[1,3,4,5,6,8,9,0];
var schar = ["!" , "@" , "#" , "$", "%" , "^" , "&" , "*" ,];
var text = [];
var password = [];
var custpass=[];
alert("Welcome to your Custom Password Generator");
alert("Click Generate to begin");
//This section constructs the criteria in order to generate a password
function generatepassword(var1, var2, var3,) { 
  document.querySelector("textarea").innerHTML="";
  if (var1 !== true && var2 !== true && var3 !== true){
    alert("In order to create a passphrase, you must select from the previous criteria.  Please try again when you are ready.")
  }
  var charcount = prompt("Between 7 and 20, how many characters would you like your passphrase to consist of?");
  var entre = parseInt(charcount);
  if (var1 === true){
    text = text.concat(letters)
  }
  if(var2 === true){
    text = text.concat(num)
  }
  if(var3 === true){
    text = text.concat(schar)
  }
  for (var i = 0; i < entre; i++){
  
  password = text[Math.floor(Math.random() * text.length)];
  custpass = custpass.concat(password);
  document.querySelector("textarea").innerHTML += custpass[i];
  
}
password = [];
custpass = [];
text = [];
}



//This section confirms the usage of characters for the password
function writePassword() {  
  

  // var Qupper = confirm("Would you like to add uppercase?");
  var Qlower = confirm("Would you like to add lowercase?");
  var Qnumber = confirm("Would you like to add numbers?");
  var Qspec = confirm("Would you like to add characters?");



generatepassword(Qlower, Qnumber, Qspec);
}
// var password = generatePassword();
// var passwordText = document.querySelector("#password");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
