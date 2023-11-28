// useful string properties and methods

let userName = "Theodore Mugwagwa";
let phoneNumber = "123-456-7890";

//console.log(userName.length); //allows you to see how many characters are in your string
//console.log(userName.charAt(7)); //when you put a number in it, you can see what letter is in that place(counting starts at 0, not 1)
//console.log(userName.indexOf("r")); //when you put a letter in it, it allows you to see what number it represents
//console.log(userName.lastIndexOf("a")); //if there are multiple occurances of the same letter, this lets you see the last occurance of whatever letter you put in
//userName = userName.trim(); //gets rid of any space before or after the characters
//userName = userName.toUpperCase();
//userName = userName.toLowerCase();

phoneNumber = phoneNumber.replaceAll("-", "/"); //the first one is what you want to be replaced and the second one is what you want to replace it with

console.log(phoneNumber);