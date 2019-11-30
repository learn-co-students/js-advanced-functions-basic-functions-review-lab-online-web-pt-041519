// Your code here
function saturdayFun(phrase='roller-skate'){
  return "This Saturday, I want to " + phrase + "!"
}

let mondayWork = function(string="go to the office"){
    return `This Monday, I will ${string}.`
}

function wrapAdjective(flair="*"){
    return function(adjective="special"){
        return `You are ${flair}${adjective}${flair}!`
    }
}

const Calculator = {
    add: (num1, num2)=> num1 + num2,
    subtract: (num1, num2)=> num1 - num2,
    multiply: (num1, num2)=> num1 * num2,
    divide: (num1, num2)=> num1 / num2
 }

 function actionApplyer(int, arr){
     let a = int
     for(const func of arr){
         a = func(a)
     }
     return a
 }