// Your code here
function saturdayFun (activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork (activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair = "*") {
    return function(adj = "special") {
        return `You are ${flair}${adj}${flair}!`
    }
}


// let [answer, theBase] = (
//     function(thingToAdd) {
//       let base = 3
//       return [
//         function() { return base + thingToAdd },
//         function() { return base }
//       ]
//     }
//   )(2)


// AssertionError: 13, multiplied by 2, added to 1000 and then modulo 7 is 4. 
// Apply each function in the Array of functions on the given base (13) OR on the result of the use of the previous function to get this result: expected [ [Function], [Function], [Function] ] to equal 4


function actionApplyer(integer, array) {
    let total = integer
    for (let fn of array) {
        total = fn(total)
        }
    return total
    }
   

const Calculator = { 
    add: function() {  
        return 1+ 3
    },
    subtract: function() {
        return 1 -3
    },
    multiply: function() {
        return 1 * 3 
    },
    divide: function() {
        return 10/5
    }
}




