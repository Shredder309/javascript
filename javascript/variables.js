//A variable is a container for storing data
//A variable bahves as if it were the value it caintains

//Two steps to it:
//1. Declaration (var, let, const)
//2. Assignment ("=" is the assignment operator)

let firstName = "Theo";//(string data type(a series of characters))
let age = 19; //the variable should be descriptive of what it contains
let student = true; //(boolean data type (only true or false))

age = age + 1;

//age = age + 1; (number data type(numbers))
console.log("Hello",firstName);
console.log("You are", age, "years old");
console.log("Enrolled: ", student);

document.getElementById("p1").innerHTML = "Hello " + firstName; //to showcase the information on the webpage
document.getElementById("p2").innerHTML = "You are " + age + "years old ";
document.getElementById("p3").innerHTML = "Enrolled: " + student;