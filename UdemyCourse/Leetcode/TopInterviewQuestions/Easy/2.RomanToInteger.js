/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer. (THIS IS WHAT NEED TO DONE)

Understand this one line : In roman numbers if you have given CM where value of C is
100 which is less then value of M which is 1000 then you substract it from M and ans
of CM would be 900.

Approch First comes in mind : Loop from back and see if value at index -1 is less then
value at current index if yes subtract else add.
*/

function romanToInteger(str){
  if(!str || str.length === 0){
    return 0;
  }
  let rToi = {
    'I' : 1,
    'V' : 5,
    'X' : 10,
    'L' : 50,
    'C' : 100,
    'D' : 500,
    'M' : 1000
  }
  let i = str.length - 1;
  let sum = 0;
  while(i >= 0){ // Made mistake with i > 0 rather then i >= 0 bhai 0 index ki value kon lega
   if(rToi[str[i-1]] < rToi[str[i]]){
    sum+=rToi[str[i]] -rToi[str[i-1]];
    i-=2;
   }else{
    sum+=rToi[str[i]];
    i--;
   }
  }
  return sum;
}

const result = romanToInteger('III');
console.log(result)

function romanToIntegerBest(str){
  let legends = {
    'I' : 1,
    'V' : 5,
    'X' : 10,
    'L' : 50,
    'C' : 100,
    'D' : 500,
    'M' : 1000
  }

  let total = 0;
  for(let i = 0 ; i < str.length ; i++){
    if(legends[str[i]] < legends[str[i+1]]){
      total+= legends[str[i+1]] - legends[str[i]];
      i++; // this looks little confusing thats why have't done with for loop
    }else{
      total+=legends[str[i]];
    }
  }
  return total;
}

const resultBest = romanToIntegerBest('III');
console.log(resultBest)