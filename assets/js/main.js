// *** Write your code here***
let display = document.querySelector("#displayNumber")
function calcValues(x){
        display.value = display.value + x;
        console.log(x)
}

//DELETE AND CLEAR
function deleteClearKeys(y){
    if (y === "c"){
        display.value =""
    }
    else if(y === "del"){
        let arr = display.value.split("")
        arr.pop()
        display.value = arr.join("")
    }
}

//  Was to imply this method but I had evverything simplified in my html file
// function clear(){
//     form.reset()
// }

// function del(){

// }

// function appendNumber(number){

// }

// function chooseOperation(operation){

// }

// function compute(){
//     function sum(num1, num2){
//         return num1 + num2
//     }

//     function sub(num1, num2){
//         return num1 - num2
//     }

//     function mul(num1, num2){
//         return num1 * num2
//     }

//     function div(num1, num2){
//         return num1 / num2
//     }
// }

// function updateDisplay(){
    
// }

