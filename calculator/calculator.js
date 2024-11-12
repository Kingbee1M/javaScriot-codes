// get the users input
// calculate the value
// gives the user the feedback
// gives the user the opportunity of input another value

function addition(input, input2nd) {
    value = input1 + input2;
    return value
}

function subtraction(input, input2nd) {
    value = input1 - input2
    return value
}

function division(input, input2nd) {
    value = input1 / input2
    return value
}

function multiplication(input, input2nd) {
    value = input1 * input2
    return value
}

function squares(input, input2nd) {
    value = input1 ** input2
    return value
}

const add = "+"
const minus = "-"
const divide = "/"
const mulitiply = "*"
const square = "**"
console.log("hello, welcome to my first javascript code. this is a simple calculator to try out");
endOperator = '=';
const input = prompt("please enter 1st value: ");
input1 = parseFloat(input);
const operator = prompt("please input the mathematical operator: ")
const input2nd = prompt("please enter value the 2nd value: ");
input2 = parseFloat(input2nd);

if (operator == add) {
    addition(input1, input2)
    console.log("your answer is" +" "+ value)
} else if (operator == minus) {
    subtraction(inpit1, input2)
    console.log("your answer is" +" "+ value)
} else if (operator == mulitiply) {
    multiplication(input1, input2)
    console.log("your answer is" +" "+ value)
} else if (operator == divide) {
    division(input1, input2)
    console.log("your answer is" +" "+ value)
} else if (operator == square) {
    squares(input1, input2)
    console.log("your answer is" +" "+ value)
}
    


// const values = [];
// values.push(input);
// while (true) {
//     const input = prompt("please enter value: ");
//     input1 = parseFloat(input)
//     const operator = prompt('please input the mathematical operator: ')
//     operator != endOperator
//     const values = [];
//     values.push(input);

// }
