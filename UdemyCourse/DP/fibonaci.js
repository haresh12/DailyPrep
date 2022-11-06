
function fibonaci(n){
 if(n === 0 || n === 1){
  return n;
 }
 console.log('Hello',n);  // JUST SEE HOW MANY TIMES FUNCTION IS GETTING CALLED WITH SAME N VALUE;
  let fibn1 = fibonaci(n-1);
  let fibn2 = fibonaci(n-2);

  let fib = fibn1 + fibn2;

  return fib;
}

console.log(fibonaci(10));


function fibonaciWithMemoization(n,memo){
 if(n === 0 || n === 1){
  return n;
 }

 // agar already asnwer he to fir vapis se call krne ki jarur nhi he 
 if(memo[n]){
  return memo[n]
 }
 console.log('Hello now ',n )
 let fibn1 = fibonaciWithMemoization(n-1,memo);
 let fibn2 = fibonaciWithMemoization(n-2,memo);

 let fib = fibn1 + fibn2;

 memo[n] = fib; // Real magic happens here we are storing the answer so we don't have to call it next time again

 return fib
}

console.log(fibonaciWithMemoization(10,{}))

// You can take array or object where ever you want to store the value