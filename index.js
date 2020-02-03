
// Your code here
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(wrap = '*') {
    return function(word = 'special') {
        return `You are ${wrap}${word}${wrap}!`
    }
}

let Calculator = {
    add: function(){return 1 + 3},
    subtract: function(){return 1 - 3},
    multiply: function(){return 1 * 3},
    divide: function(){return 10 / 5}
}

function actionApplyer(i, array){
    if(array.length == 0){
        return i
    }
    else {
        return array.reduce(function(total, element) {return element(total) }, i)
    }
}
    
