const{sumEvenNumbers,findMax,countOddNumbers,isPrime,findFirstDuplicate,reverseArray,factorial} = require("./Task1.js");



test("Add even numbers",()=>{
let numbers = [2,1,5,7,8]
let result = sumEvenNumbers(numbers);
expect(result).toBe(10);

})


test("check the highest numbers",()=>{
let numbers = [2,1,5,7,8]
let result = findMax(numbers);
expect(result).toBe(8);

})

test("count the odd numbers",()=>{
let numbers = [2,1,5,7,8]
let result = countOddNumbers(numbers);
expect(result).toBe(3);

})

test("check if a number is a prime number",()=>{
let number = 8 ;
let result = isPrime(number);
expect(result).toBe(false);

})

test("return the first duplicate number",()=>{
let number = [1,2,3,2,3,4,5];
let result = findFirstDuplicate(number);
expect(result).toBe(2);

})

test("reverse numbers",()=>{
let number = [1,2,3,4,5];
let result = reverseArray(number);
expect(result).toEqual([5,4,3,2,1]);

})

test("get factorial",()=>{
let number = 5;
let result = factorial(number);
expect(result).toBe(120);

})







