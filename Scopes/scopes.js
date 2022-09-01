// Scopes

//global scropes
let x = 0;

// local scopes/inner scope/block scope

//exampels: functions/conditional statements/classes/loops/etc.

function logToConsole(){
    let y = 1;
    console.log(x, y);
}

logToConsole();


console.log(y); // error, does not have access to y
// does not have access to inner scopes
