
// First way to reverse string. Here input will be string value. (With decrement loop)
// Here rather then arr you can take '' string also and then do newString+=s[i] then you don't have to use join
function reverseStringWithDecrementLoop(s){
  if(!s) return;
 let arr = [];
 for(let i = s.length -1 ; i == 0 ; i--){
  arr.push(s[i]); // newString[i] this way we can not add values in string use += or concate to add char
 }
 return arr.join('');
}

console.log(reverseStringWithDecrementLoop('Haresh'))

// in short split string into array , reverse array then converse array to string with join
// split , reverse , join
function reverseStringWithInBuildMethods(s){
  // step : 1 use split method to turn string into array
  let splitString  = s.split("");
  // var splitString = "hello".split("Haresh");
  // ["h","a","r","e","s","h"]
  // Step 2. Use the reverse() method to reverse the new created array
  let reverseArr = splitString.reverse();
  // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"] this will reverse the array but now we need to string so convert array to string

  // Step 3. Use the join() method to join all elements of the array into a string
  let joinArr = reverseArr.join("");

  return joinArr;

  // with es6 chaning feature  in single line return split('').reverse().join('');
}

console.log(reverseStringWithInBuildMethods('Allo'))


//Write a function that reverses a string. The input string is given as an array of characters s.
//You must do this by modifying the input array in-place with O(1) extra memory.
// This is same way you will reverse array also swiping the value will be used in many other problem
function reverseStringLeetcode344(charArr){
  if(!charArr || charArr.length === 0) return
  let start = 0;
  let end = charArr.length - 1;
  while(start < end){
    let temp = charArr[start];
    charArr[start] =  charArr[end];
    charArr[end] = temp;
    start++;
    end--;
  }
  return charArr;
}


console.log(reverseStringLeetcode344(['H','A','R','E','S','H']))