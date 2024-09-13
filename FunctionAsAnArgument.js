function calculate(num, callBackFunction){
	return callBackFunction(num)

};

console.log(calculate(3,(number)=>{
	let multiplier = 2;
	return number * multiplier;
}));