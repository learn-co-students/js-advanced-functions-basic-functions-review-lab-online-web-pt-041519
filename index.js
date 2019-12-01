// Your code here

function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}

// saturdayFun();
// saturdayFun("bathe my dog");

function mondayWork(work = "go to the office"){
    return `This Monday, I will ${work}.`;
}

function wrapAdjective(var2 = "*"){
    return function(var1 = "special"){
        return `You are ${var2}${var1}${var2}!`;
    }
}

const Calculator = {
    add: (a,b) => a + b,
    subtract: (a,b) => a - b,
    multiply: (a,b) => a * b,
    divide: (a,b) => a / b    
}

function actionApplyer(num, arr){
    let currentNum = num;
    
    for(let fn of arr){
        currentNum = fn(currentNum);
    }

    return currentNum;
}