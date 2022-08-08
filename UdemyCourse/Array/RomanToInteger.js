function romanToIntegerLeetcode13(string){
  let obj = {
    'I' : 1,
    'V' : 5,
    'X' : 10,
    'L' : 50,
    'C' : 100,
    'D' : 500,
    'M' : 1000
  }
  let i =  0; 
  let ans = 0;
  while(i < string.length){
    if(obj[string[i+1]] > obj[string[i]]){
      ans = ans + (obj[string[i+1]] - obj[string[i]])
      i+=2
    }else{
      ans+=obj[string[i]]
      i++;
    }
  }
  return ans
}

console.log(romanToIntegerLeetcode13('MCMXCIV'))