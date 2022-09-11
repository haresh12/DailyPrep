
/*
  In this question you will get one valid number and just need to check how many
  zeros that number have.
*/
function countZeros(number,count){
 number = Math.floor(number);
 if(number === 0){
  return count;
 }
 let digit = number%10;
 if(digit === 0){
  count++;
 }
 return countZeros(number/10,count)
}

let number = 123883246541
console.log(countZeros(number,0))