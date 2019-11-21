// Your code here
function saturdayFun(string="roller-skate") {
    return `This Saturday, I want to ${string}!`;
  }

function mondayWork(act="go to the office") {
    return `This Monday, I will ${act}.`
}

function wrapAdjective(flair="*"){
    return function(adj="special"){
        return `You are ${flair}${adj}${flair}!`
    }
}

const Calculator = {
    add: (num1, num2) => num1 + num2,
    subtract: (num1, num2) => num1 - num2,
    multiply: (num1, num2) => num1 * num2,
    divide: (num1, num2) => num1 / num2
 }


function actionApplyer(int, array){
    if (array.length === 0) {
        return int
     } else {
        let newInt = int
        array.forEach(fn => {
           newInt = fn(newInt); 
        })
        return newInt
     }
}
