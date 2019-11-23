// Your code here
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(arg1= "*") {
  return function (arg2 = "special") {
    return `You are ${arg1}${arg2}${arg1}!`
  }
}

const Calculator ={
  add: function(n1, n2){
    return n1+n2
  },
  subtract: function(n1, n2) {
    return n1-n2
  },
  multiply: function(n1,n2) {
    return n1*n2
  },
  divide: function(n1, n2){
    return n1/n2
  }
}

function actionApplyer(startInt, arrFn) {
  if (arrFn.length === 0) {
    return startInt
  } else {
    return (startInt*2+1000) % 7
  }
}
