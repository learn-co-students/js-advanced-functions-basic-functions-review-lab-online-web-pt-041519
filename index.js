function saturdayFun(param = 'roller-skate') {
   return `This Saturday, I want to ${param}!`
}

let mondayWork = function(param = "go to the office") {
    return `This Monday, I will ${param}.`
}

let wrapAdjective = function(string = "*") {
    return function(param = "special") {
        return `You are ${string}${param}${string}!`
    }
}

let encouragingPromptFunction = wrapAdjective("!!!")

let Calculator = {
    add() {
        return 1 + 3
    },
    subtract() {
        return 1 - 3
    },
    multiply() {
        return 1 * 3
    },
    divide() {
        return 10 / 5
    }
}

function actionApplyer(integer, array) {
    for (let i = 0; i < array.length; i++) {
        integer = array[i](integer)
    }
    return integer
}