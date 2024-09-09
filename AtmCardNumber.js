function AtmCardNumber(number){
let cardNumber = ""
for(count = 0; count < number.length; count++) {
if(number[count] !="-"){
 cardNumber += number[count];
}


}

if( cardNumber.length == 16) {
if (cardNumber.startsWith("4") || cardNumber.startsWith("5") || cardNumber.startsWith("6")){

} 
return true;

}

else{
return false;
}
}	


console.log(AtmCardNumber("6234-5678-9012-3045"))