
// Your code here
function saturdayFun(activity="roller-skate"){
  return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity='go to the office') {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(string='*'){
  return function(arg='special'){
    return `You are ${string}${arg}${string}!`
  }
}

const Calculator = {
  add(num1, num2){
    return num1 + num2
  },
  subtract(num1, num2){
    return num1 - num2
  },
  multiply(num1, num2){
    return num1 * num2
  },
  divide(num1, num2){
    return num1 / num2
  }
}

const actionApplyer = (num, funcArray) => {
  let startingInt = num
  if (funcArray.length !== 0 ){
    for (let i = 0; i < funcArray.length; i++) {
      startingInt = funcArray[i](startingInt)
    }
  } else {
    return 0
  }
  return startingInt
}

