function saturdayFun(activity='roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

let mondayWork = function (activity='go to the office') {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair='*') {
    return function(adj='special') {
        return `You are ${flair}${adj}${flair}!`
    }
}

// Define Calculator obj
let Calculator = {}
// Calc obj has fn called add 
Calculator.add = (x, y) => x + y
// Calc obj has fn called subtract
Calculator.subtract = (x, y) => x - y
// Calc obj has fn called multiply
Calculator.multiply = (x, y) => x * y
// Calc obj has fn called divide
Calculator.divide = (x, y) => x / y

// Define fn actionApplyer with two args, starting int and an arr of fns
function actionApplyer(start, arr) {
    let base = start 
    // If empty arr return start
    if (!!arr.length) {
        // For ea el in arr, pass in start and update base var with new value
        arr.forEach(el => {
            base = el(start)
            // Update start value to base to be passed to the next el in arr
            start = base
        })
    }
    return base
}
