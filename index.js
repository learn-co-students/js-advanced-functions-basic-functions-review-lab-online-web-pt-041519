// Your code here

function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
};

function mondayWork(activiy = "go to the office"){
    return `This Monday, I will ${activiy}.`;
};

function wrapAdjective(string = "*"){
    return function(thing = "special"){
        return `You are ${string}${thing}${string}!`;
    };
};

const Calculator = {
    add: function add(a,b){
        return a + b;
    },
    subtract: function subtract(a,b){
        return a - b;
    },
    multiply: function multiply(a,b){
        return a * b;
    },
    divide: function divide(a,b){
        return a / b;
    }
};

function actionApplyer(start, arr){
    let a = start;
    for (let i = 0; i < arr.length; i++){
        a = arr[i](a);
    };
    return a;
};