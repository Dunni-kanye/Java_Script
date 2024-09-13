function sumEvenNumbers(numbers){
let sum = 0 ;

for(count = 0; count < numbers.length; count++){
	
	if(numbers[count] % 2 == 0){
	sum += numbers[count];
	}
}
	return sum
}

function findMax(numbers) {
let max = 0 ;

for(count = 0; count < numbers.length; count++){
	
	if(numbers[count] > max ){
	max = numbers[count]; 
	}
}
	return max
}

function countOddNumbers(numbers){
let oddNumber = 0;

for(count = 0; count < numbers.length; count++){
	
	if(numbers[count] % 2 != 0){
	oddNumber ++;
	
	}

}
	
	return oddNumber;

}
function isPrime(number) { 

let prime = 0;
for(count = 1; count < number; count++){
	if(number % count == 0){
	prime++;
	}
 }

if(prime == 1) {return true;

} else {
	return false;

}
}


function findFirstDuplicate(numbers){

let Answer = -1;
 for(count = 0; count < numbers.length; count++) {
	for(index = numbers.length; index > 0; index--) {
	 if (count == index){
		continue;
	}

		if(numbers[count] == numbers[index]){
			result = numbers[count];
			return result;
		
		}
	}

}
	
	return answer;

}


function reverseArray(numbers) {
let reverse = [];
	for(let count = numbers.length-1; count > -1; count--) {
	reverse.push(numbers[count]);
	}
 
	return reverse;
	}
function factorial(number) {
let factorial = 1;
	for(count = 1; count <= 5; count++) {
	factorial *= count;
	}
	
	return factorial;

}
function leapYear(year){
if(year % 4 == 0 || year % 100 == 0 && year % 400 == 0){
return true
}
else{
  return false
}	

}
	console.log(leapYear(2023));

//module.exports = {sumEvenNumbers,findMax,countOddNumbers,isPrime,findFirstDuplicate,reverseArray,factorial};

