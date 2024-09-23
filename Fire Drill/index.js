// let array = [1,2,3,"home",true];//Array literal

// //console.log(array)
// let newArray = new Array(3);
// newArray[0] = 12
// newArray.push(2);
// newArray.push(3);
// newArray.push(4);
// newArray.push(5);

// //console.log(newArray)
// let result = Array.from("semicolon");
// //console.log(result)

// let answer = Array.of(1,2,3,4,6,7,3,4,6)
// //console.log(answer) 
// let arrayOfNumbers = [1,2,3,45,67]
// let slice = arrayOfNumbers.slice(2,4);
// console.log(slice)

function CountNumber(numbers){
    let obj = {}; 
   
     for(let count of numbers){
       obj[count] = (obj[count]||0)+1  
                
                 
     }
     return obj
    
     }

console.log(CountNumber([1,1,2,3,2]))
console.log("hello world")

function test(testScore){     //parameter  //if statement
let scores = testScore.filter((greater) => greater >= 70)
return scores;
}
let testScore =[10,20,30,40,50,60,70,80]
console.log(test(testScore))


function score(plusFive){
let test = plusFive.map((addfive) =>addfive +5)
return test;
}
let plusFive = [15,56,78,3,6,13,20]
console.log(score(plusFive))

function squareOfNumbers(squareroot){
let square = squareEach.map((squares) =>squares * squares)
return square;
}
let squareEach = [2,4,6,8,5]
console.log(squareOfNumbers(squareEach))

function  distribute(members){
    let book = {}
    let books = (["fashion", "wedding party", "biro", "champion"])
    for(count in members)
        book[members[count]] = books[count]
    return book;
}
console.log(distribute(["Emily", "Jack", "Sophia", "Daniel"]))

function plannedSchedule(time){
    let afternoon = time.filter((clas) =>clas.includes("PM"))
    return afternoon
}
let timing = ["11:00 AM", "1:00 PM", "3:00 PM", "5:00 PM"]
console.log(plannedSchedule(timing))
//module.exports = {test}