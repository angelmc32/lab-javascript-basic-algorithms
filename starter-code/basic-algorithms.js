// Names and Input, print variables and prompt user for string
let hacker1 = "Driver Name";
console.log(`The driver's name is ${hacker1}.`);
let hacker2 = prompt("What's your name?");
console.log(`The navigator's name is ${hacker2}.`);

// Conditionals

// Evaluate length property of 2 variables and determine which is the longest
if (hacker1.length > hacker2.length){
  console.log(`The Driver has the longest name, it has ${hacker1.length} characters.`)
}
else if (hacker1.length < hacker2.length) {
  console.log(`Yo, Navigator got the longest name, it has ${hacker2.length} characters.`)
}
else
  console.log(`Wow, you both got equally long names, ${hacker2.length} characters.`);

// Stores string characters into an array and prints them in uppercase, separated by a space
console.log(hacker1.split('').join(' ').toUpperCase());

// Stores string characters into an array, reverses the order and prints it
console.log(hacker2.split('').reverse().join(' '));

// Determines which of 2 variables goes first according to their lexicographic order
var lex = hacker1.localeCompare(hacker2);

switch( true ) {
  case (lex < 0): 
    console.log(`The driver's name goes first`);
    break;
  case (lex > 0):
    console.log(`Yo, the navigator goes first definitely`);
    break;
  case (lex == 0):
    console.log(`What?! You both got the same name?`);
    break;
}

// Palindrome

// This function receives a string and determines if it's a palindrome
function isPalindrome( phrase ) {
  var forward = phrase.toLowerCase().split(''); //lowercase and store the string's characters in an array and stay in the original order
  var backward = phrase.toLowerCase().split('');//lowercase and store the string's characters in another array to reverse the order
  backward.reverse();// reverse the order of the characters for comparison
  var lex = forward.join(' ').localeCompare(backward.join(' '));//if the 2 arrays are the same, it will assign a value of 0 to the variable lex

  //prints whether the array comparison determined forward and backward variables are the same or not: a palindrome or not
  if ( lex == 0 )
    console.log(`Wow, ${forward.join(' ')} is a palindrome, check it reversed: ${backward.join(' ')}`);
  else
    console.log(`Nope, ${phrase} is NOT a palindrome, check it reversed: ${backward.join(' ')}`);
}

//ask user for string for palindrome verification
var phrase = prompt("Enter phrase or word for palindrome check");

isPalindrome(phrase);

// Lorem ipsum generator
