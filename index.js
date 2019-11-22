// Your code here

function saturdayFun(activity ="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(work="go to the office") {
    return `This Monday, I will ${work}.`
}

function wrapAdjective(string="*") {
    return function(parameter="special") {
        return `You are ${string}${parameter}${string}!`
    }
}

function add() {
    return 1 + 3
}

function subtract() {
    return 1 - 3
}

function multiply() {
    return 1 * 3
}

function divide() {
    return 10 / 5
}
let Calculator = { add, subtract, multiply, divide }

function actionApplyer(integer, arrayOfFunctions) {
    if (arrayOfFunctions.length === 0) {
        return integer
    } else {
            let result = arrayOfFunctions[0](integer)
            let secondResult = arrayOfFunctions[1](result)
            let thirdResult = arrayOfFunctions[2](secondResult)
            return thirdResult
        }
    }



