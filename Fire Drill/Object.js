
/**const car = { make:'Toyota', model:'Camry', year:2021};


function carAttributes(objects){

for(const attributes in objects){
console.log(attributes, objects[attributes]);
}
}
carAttributes(car);**/




/**const book = { title: 'The Great Gatsby', author:'F.Scott Fitzgerald', yearPublished: 1925};

let { title, author} = book;
console.log(title + ',' + 'by'+ author);**/

/**const counter = {count: 0, step: 1,
increment: function() {
this.count += this.step;
return this.count;
},
decrement: function() {
this.count -= this.step;
return this.count;
}
}


console.log(counter.increment())
console.log(counter.increment())
console.log(counter.decrement())**/

/**const person = { firstName:"Oladayo", lastName: "Samad",
fullName:function(){

return this.firstName + ' '+ this.lastName;
}
};
console.log(person.fullName());**/


const human = {firstName:"John", lastName:"Doe", Age: 25}

function name(human){
string = " ";
for(const person in human){
  string += person + ":"+ human[person];

}
return string;
}
console.log(name(human))