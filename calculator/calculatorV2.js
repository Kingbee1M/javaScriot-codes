// function submitform(event){
//     Event.preventDefault();
//     const input1 = document.getElementById(inputA).value;
//     let inputs1 = parseFloat(input1);
//     const input2 = document.getElementById(inputB).value;
//     let inputs2 = parseFloat(input2);
//     let inputs = [];
//     inputs = [inputs1, inputs2];
//     return inputs;
// }

// let form = document.getElementById(forms)

// form.eventlistener('submit', function call(event) {
//     event.preventDefault()
//     let input1 = document.getElementById('inputA').value
//     console.log(input1)
// })

// document.getElementById('submits').addEventListener('submit', function (event) {
//     Event.preventDefault();
//     let input1 = document.getElementById('inputA');
//     return input1
// })
// console.log(event);
// let values = submitform()
// console.log(values)

// display.innerHTML = 'hey there'
function add() {
    console.log('hentai')
}

 let form = document.getElementById('forms')
 form.addEventListener('submit', function (event) {
    event.preventDefault();
    let input1 = document.getElementById('inputA').value;
    let input2 = document.getElementById('inputB').value; 
    let opp = document.getElementById('operator').value;
    display = document.getElementById('display');    
    if (opp){
        values = calculate(input1,input2, opp)
        display.innerHTML = input1 + ' ' + values[0] + ' ' + input2 + ' ' + '=' + ' ' + values[1]
        console.log('yes');
    }else{
        display.innerHTML = 'syntax error, please input a mathematical operator'
        console.log('no');

    }
     
})

let addButton = document.getElementById('add');
 addButton.addEventListener('click', function () {
    let opp = document.getElementById('operator');
    opp.value = 'plus';

})

let minusButton = document.getElementById('minus');
 minusButton.addEventListener('click', function () {
    let opp = document.getElementById('operator');
    opp.value = 'minus';

})

let timesButton = document.getElementById('times');
 timesButton.addEventListener('click', function () {
    let opp = document.getElementById('operator');
    opp.value = 'multiply';
})

let divideButton = document.getElementById('divide');
 divideButton.addEventListener('click', function () {
    let opp = document.getElementById('operator');
    opp.value = 'divide';
})

let powerButton = document.getElementById('power');
 powerButton.addEventListener('click', function () {
    let opp = document.getElementById('operator');
    opp.value = 'power';
})

let rootButton = document.getElementById('root');
 rootButton.addEventListener('click', function () {
    let opp = document.getElementById('operator');
    opp.value = 'root';
})

function addition(a,b){
    let answer = a + b;
    return answer
}

function subtraction(a,b){
    let answer = a - b;
    return answer
}

function multiplication(a,b){
    let answer = a * b;
    return answer
}

function division(a,b){
    let answer = a / b;
    return answer
}

function power(a,b){
    let answer = a ** b;
    return answer
}

function root(a,b){
    let answer = Math.pow(b, 1/a);
    return answer
}

function calculate (a,b,c) {
    if (c == 'plus') {        
        input1 = parseFloat(a)
        input2 = parseFloat(b)
        finals = addition(input1, input2)  
        values = ['+', finals]
        return values
    
    }  else if (c == 'minus') {
        input1 = parseFloat(a)
        input2 = parseFloat(b)
        finals = subtraction(input1, input2)
        values = ['-', finals]
        return values

    }  else if (c == 'divide') {
        input1 = parseFloat(a)
        input2 = parseFloat(b)
        finals = division(a, b)
        values = ['-', finals]
        return values

    }  else if (c == 'multiply') {
        input1 = parseFloat(a)
        input2 = parseFloat(b)
        finals = multiplication(input1, input2)
        values = ['*', finals]
        return values 

    }  else if (c == 'power') {
        input1 = parseFloat(a)
        input2 = parseFloat(b)
        finals = power(input1, input2)
        values = ['**', finals]
        return values

    }   else if (c == 'root') {
        input1 = parseFloat(a)
        input2 = parseFloat(b)
        finals = root(input1, input2)
        values = ['root', finals]
        return values
    } 

}    
