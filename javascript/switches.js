// switch = statement that examines a value
//          for a match against many case clauses.
//          More efficient than many "else if" statements

let grade = 59;

switch(true){
case grade >= 90:
    console.log("You did great!");
    break;
case grade >= 80:
    console.log("You did well!");
    break;
case grade >= 70:
    console.log("You did okay!");
    break;
case grade >= 60:
    console.log("You passed...barely");
    break;
case grade < 60:
    console.log("YOU FAILED!");
    break;
default:
        console.log(grade, "is not a letter grade");
}