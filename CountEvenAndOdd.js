function CountEvenAndNumber(numbers){
let oddAndEven = [];
let oddNumber = 0;
let evenNumber = 0;

for(count = 0; count < numbers.length; count++){
	
	if(numbers[count] % 2 == 0){
	evenNumber ++;
	}else {
		oddNumber++;
	
	}

}
	oddAndEven.push(oddNumber,evenNumber);
	
	return oddAndEven;

}
console.log(CountEvenAndNumber([2,1,5,7,8]));