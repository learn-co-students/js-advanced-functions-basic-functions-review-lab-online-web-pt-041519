// Your code here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!` 
}
saturdayFun("chill-out");

// function mondayWork(activity = "go to the office"){
//     return `This Monday, I will ${activity}.`
// }
// mondayWork("study");

//anonymous function
let mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
  } 
  mondayWork("study");

//Scope chain
//scope chain which allows functions defined in functions
// to access all their parent scopes' variables. 
function wrapAdjective(part1 = "*"){ 
    return function(part2 = "special") { // Innermost
        return `You are ${part1}${part2}${part1}!` 
    }
}
 
wrapAdjective("%")("a dedicated programmer")

//wrapAdjective("%")("a dedicated programmer") //=> "You are %a dedicated programmer%!"

 const Calculator={//object
    add(a,b){ return a + b},
    subtract(a, b) {return a - b},
    multiply(a, b) {return a * b},
    divide(a, b){return a / b }
}

let actionApplyer = function(start, array)
    {
     if (array.length === 0){
         return start
     }
     else
     {
      let newnum = start
      array.forEach(element => {
         newnum = element(newnum) 
      })
       return newnum
     }
}
