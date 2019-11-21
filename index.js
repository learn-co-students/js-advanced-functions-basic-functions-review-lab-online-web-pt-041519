function saturdayFun(activity='roller-skate'){
   return `This Saturday, I want to ${activity}!`
}

function mondayWork(work = 'go to the office'){
    return `This Monday, I will ${work}.`
}

function wrapAdjective(flair = "*") {
    let visualFlair = flair 
    return function(param="special"){
        return `You are ${visualFlair}${param}${visualFlair}!`
    }
}

const Calculator = {
    add: function(a, b) {
       return a+b
    },
    subtract: function(a, b) {
        return a-b
    },
    multiply: function(a, b) {
       return a*b
    },
    divide: function(a, b) {
       return a/b
    }
}

function actionApplyer(start, array) {
    let totalInt = start
    if (array.length === 0 )
        return start 
    else  array.forEach(func => {

        totalInt = func(start)
        start = totalInt
      })
      return totalInt
}
