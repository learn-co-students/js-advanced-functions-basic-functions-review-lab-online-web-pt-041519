// Your code here
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}
// saturdayFun();


function mondayWork(activity="go to the office") {

    return `This Monday, I will ${activity}.`
}

mondayWork();

let wrapAdjective = function(thing1="*"){
    return function(thing="special"){
        return `You are ${thing1}${thing}${thing1}!`
    } 
}

wrapAdjective();


let Calculator = {
    add: function(a,b) {
        return a + b
    },
    subtract: function(a,b){
        return a - b
    },
    multiply: function(a,b){
        return a * b
    },
    divide: function(a,b){
        return a / b
    }
}

Calculator.add(1,3);
Calculator.subtract(1,3);
Calculator.divide(1,3);
Calculator.mulltiply(10,5);

function actionApplyer(integer,array){
    let a = integer

    for(let i = 0; i < array.length; i++){
        a = array[i](a)
    }
    return a
}

