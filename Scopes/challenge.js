//Return a Boolean if a number is divisible by 10
// Here you'll create a function that will give you a "true" or "false"
// boolean as its output. The inputted number shoudl only return a "true"
// if it's divisible by 10. Otherwise, your program should reutne a "false" answer.

let optionOne = 3;
let optionTwo = 30;

function isDisvisibleByTen(){
    let result = null;
    if(optionOne % 10 === 0) {
        result = true;
    }else{
        result = false;
    }
    return result;
}

console.log(IsDivisibileByTen())