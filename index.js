// Return string with first parameter; include default.
function saturdayFun(verb = "roller-skate") {
  return `This Saturday, I want to ${verb}!`
}

// Return string with first parameter; include default. 
let mondayWork = function (verb = "go to the office") {
  return `This Monday, I will ${verb}.`
}

// Return string from closure
function wrapAdjective(flair = "*") {
  return function(adjective = "special") {
    return `You are ${flair}${adjective}${flair}!`
  }
}

// Define object with functions
let Calculator = {}
Calculator.add = (a, b) => a + b
Calculator.subtract = (a, b) => a - b
Calculator.multiply = (a, b) => a * b
Calculator.divide = (a, b) => a / b

// Return result of starting integer parameter fed to array of functions
function actionApplyer(start, functionArray) {
  let total = start
  if (functionArray.length !== 0) {
    functionArray.forEach(op => {
      total = op(start)
      start = total
    })
  }
  return total
}