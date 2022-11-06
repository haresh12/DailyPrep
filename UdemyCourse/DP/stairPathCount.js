
/*
   Stair path count : in this question we need to return count of paths that we can go
   to the top stair. And you can either jump 1 or 2 or 3.
*/


function stairPath(n, psf){
if(n === 0 ){
  console.log('psf',psf);
  return;
}
// Tum to bhut dur chle gye
if(n < 0){
  return;
}
  // See we have three options so lets try all of them
 stairPath(n-1,psf+'1');
 stairPath(n-2,psf+'2');
 stairPath(n-3,psf+'3');
}

// stairPath(10,'');

// non optimized way
function stairPathCount(n){
 if(n === 0){
   return 1; // jese he n === 0 me phoche means tume ek rasta or mila so return 1;
 }
 if( n < 0){
  return 0; // fir se bhut dur aa gye tume bhai
 }
 console.log('Hello not optizimed n ',n); // see how many times we have repeated calls
 // here same three option
 let jump1 = stairPathCount(n-1);
 let jump2 = stairPathCount(n-2);
 let jump3 = stairPathCount(n-3);

 let total = jump1 + jump2 + jump3;

 return total
}

console.log('stairPathCount ',stairPathCount(10)); // 274 ways wowww


function stairPathCountMemo(n,memo){
 if(n === 0){
  return 1; // mil gya ek path to
 }

 if(n < 0){
  return 0; // galat rasta hamesha 0 result deta he
 }

 // Now most importent part what if we already know the count path of this specific n call just return it

 if(memo[n]){
  return memo[n];
 }
 console.log('Hello  optizimed n ',n); // see how many times we have repeated calls

  // explor all the options
  let jump1 = stairPathCountMemo(n-1,memo);
  let jump2 = stairPathCountMemo(n-2,memo);
  let jump3 = stairPathCountMemo(n-3,memo);

  let paths = jump1 + jump2 + jump3;

  // Now you got the path for specific n then please store it so we don't have to call it again

  memo[n] = paths;

  return paths;
}

console.log('stairPathCountMemo',stairPathCountMemo(10,{}));