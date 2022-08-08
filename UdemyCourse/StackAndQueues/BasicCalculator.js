
// basic calculator
// Lot to learn about dry run
function basicCalculatorLeetcode227(string){
 if(!string) return null;
  let number = '';
  let stack = [];
  let currentSign = '+'
  let i = 0 ;
   while(i < string.length){
     
     if(string[i] === ' '){
      i++;
      continue
     }
     console.log("string[i]",string[i])
     console.log("parseInt(string[i]",parseInt(string[i]))
     while(!Number.isNaN(parseInt(string[i]))){
       number+=string[i];
       i++;
     }
     let currentNumber = parseInt(number)
     console.log("currentNumber",currentNumber)
     if(currentSign === '+'){
      stack.push(currentNumber)
     }else if(currentSign === '-'){
      stack.push(-currentNumber);  // convert positive number to negative
     }else if(currentSign === '*'){
       let val = stack.pop();
       let mul = val*number;
       stack.push(mul)
     }else if(currentSign === '/'){
      let val = stack.pop() 
      let div =Math.trunc(val/number);
      stack.push(div)
     }
     currentSign=string[i];
     number='';
     i++;
   }
   console.log(stack)
   let answer = 0;
   while(stack.length >0){
     let val  = stack.pop();
     answer+=val;
   }
   return answer
}
console.log(basicCalculatorLeetcode227('4+7'))