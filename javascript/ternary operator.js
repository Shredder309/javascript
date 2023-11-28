// ternary operator = Shortcut for an 'if/else statement'
//                    Takes 3 operands 

//                    1. a condition with ?
//                    2. expressions if True :
//                    3. expressions if False

// condition? exprIfTrue : exprIfFalse

/*
let adult = checkAge(21);
console.log(adult);

function checkAge(age){

    if(age >= 18){
        return true;
    }
    else{
        return false;
    }
}
*/
/*
let adult = checkAge(21);
console.log(adult);

function checkAge(age){

    return age >= 18? true : false;
}
*/
checkWinner(true);

function checkWinner(win){
    win ? console.log("You win!") : console.log("You lose!");
}