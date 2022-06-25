// *** Write your code here***
let display = document.querySelector("#display")
let clearNum = document.querySelector("#clearNumbers")


function calcNumbers(x){
    display.value = display.value + x;
}

//DELETE AND CLEAR
clearNum.addEventListener('click', ()=>{
    if ("c"){
        display.value =""
    }
})



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

