
/*
  Reverse number thing to learn here
  with the same concept you can check whether number is palindrom or not like you 
  already reversed a number just store actual number before recursion and then check
  if actual number and reverse number are same.
*/
function reverseNumber(n,total,ans){
  n = Math.floor(n)
 if(total === 0){
  return ans;
 }
 let digit = n%10
 ans= ans+ (digit * Math.pow(10,total-1))
 console.log(ans,digit,n)
 return reverseNumber(n/10,--total,ans)
}
let number = 1234567
let total = 0;
let temp = number;
// GREAT MISTAKE MADE HERE LIKE NOT TAKING TEMP AND DIRECTLY DIVIDING THAT ACTUAL NUMBER THIS WHY
// IN ACTUAL METHOD CALL YOU IT WILL PASS ALMOST 0
while(Math.floor(temp) > 0){
  temp = temp/10;
  total++;
}

console.log(reverseNumber(number,total,0))
