function saturdayFun(string = "roller-skate") {
    return `This Saturday, I want to ${string}!`;
}

let mondayWork = function(string = "go to the office") {
    return `This Monday, I will ${string}.`;
}

function wrapAdjective(flair = "*") {
    return function(description = "special") {
        return `You are ${flair}${description}${flair}!`
    }
}

const Calculator = {
    add: function(a, b) { return a + b }, 
    subtract: function(a, b) { return a - b },
    multiply: function(a, b) { return a * b },
    divide: function(a, b) { return a / b }
}

function actionApplyer(startingInt, functionArray) {
    if (functionArray.length === 0) {
        return startingInt
    } else {
        let result = startingInt;
        for (let f of functionArray) { result = f(result) }
        return result
    }
}