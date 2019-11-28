// Your code here
function saturdayFun(activity="roller-skate") {
	return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office") {
	return `This Monday, I will ${activity}.`
}

function wrapAdjective(str="*") {
	return function(param="special") {
		return `You are ${str + param + str}!`
	}
}

let Calculator = {
	add: function() {
		return 1 + 3;
	}, 
	subtract: function() {
		return 1 - 3;
	},
	multiply: function() {
		return 1 * 3;
	},
	divide: function() {
		return 10 / 5;
	}
};

function actionApplyer(int, func_arr) {
	let a = int;
	for (let i = 0; i < func_arr.length; i++) {
		a = func_arr[i](a);
	}
	return a;
}