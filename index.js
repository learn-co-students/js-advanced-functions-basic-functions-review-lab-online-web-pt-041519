
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
        let a = array[0](i)
        let b = array[1](a)
        return array[2](b)
    }
}

    
