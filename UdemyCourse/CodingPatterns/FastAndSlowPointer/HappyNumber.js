/*
     Happy Number (medium) : 
     Problem Statement
     Any number will be called a happy number if, after repeatedly replacing it with a number equal to the sum of the 
     square of all of its digits, leads us to number ‘1’. All other (not-happy) numbers will never reach ‘1’. Instead, 
     they will be stuck in a cycle of numbers which does not include ‘1’.


     Example 1:

     Input: 23
     Output: true (23 is a happy number)
     Explanations: Here are the steps to find out that 23 is a happy number:

      2^2 + 3^3  = 4 + 9 = 13
      1^1 + 3^3  = 1 + 9 = 10
      1^1 + 0^0  = 1 + 0 = 1 (Happy Number)


*/

/*
  See this is little bit tricky question and you won't mostly get intuition because here we have possibly two cases 
  first do the square do the addition and if you are lucky then one day you will get additions of those square 1 and
  we are good to go.
  
  See first case is easy because we just need to do square addition square addition but what if we never found 1 and 
  thats the intuition i was talking about in that case you have to keep going keep going but stop when you have similar
  digit that you have checked and did square in past because now you ended into cycle and this is the negative case and
  we need to stop here and return that number is not happy number.

 We will first do this problem with recursion as submitted in leetcode and next we will see how we can use fast and slow pointer
 approach
  
*/

/*
  Done in 6 minutes
*/
function isHappyNumber(number){
 let seen = {};
 return checkHappyNumber(number,seen)
}

function checkHappyNumber(number,seen){
   if(seen[number]){
    return false;
  } 
  seen[number] = true; // bul jauga main line bale 10 min jaye
  if(number === 1)return true;
  
  let newNumber = 0;
  while(number > 0){
    newNumber = newNumber + (Math.floor(number%10) * Math.floor(number%10))
    number = number/10;
  }
  return checkHappyNumber(newNumber,seen)
}

console.log(isHappyNumber(23))

/*
   Now lets see fast and slow pointer approach

   I SEE INCREDIBLE USE OF FAST AND SLOW APPROACH UNDERSTAND THIS THING CLEARLY THAT CYCLE WILL BE DETECTED IN
   BOTH CASE IN NOT HAPPY NUMBER AND ALSO IN HAPPY NUMBER HOW IN HAPPY NUMBER BECAUSE LAST ME BHAI 1 BACHEGA
   AND USKA SQUARE KROGE TO FIRSE 1 AAYGA AND WE GOT CYCLE.
   
   ONLY THING WE NEED TO CHECK THAT CYCLE 1 PE STUCK HE YA OR KOI NUMBER PE 1 PE HE TO CYCLE HE ELSE NHI
*/


function find_happy_number(num) {
    let slow = num,
        fast = num;
    while (true) {
        slow = find_square_sum(slow); // move one step
        fast = find_square_sum(find_square_sum(fast)); // move two steps
        if (slow === fast) { // found the cycle
            break;
        }
    }
    return slow === 1; // see if the cycle is stuck on the number '1'
}

function find_square_sum(num) {
    let sum = 0;
    while ((num > 0)) {
        digit = num % 10;
        sum += digit * digit;
        num = Math.floor(num / 10);
    }
    return sum;
}