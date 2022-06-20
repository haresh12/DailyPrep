/** Understanding big o notation this will be the core thing that we will need even if we are coding
   10 years from now */

 // https://www.bigocheatsheet.com/  (Here we can look into time and space complexity for all the data strucure and algorithem)  

 /* What is Good Code ?
   >> So whenever we talk about good code we mainly look into below two things.
      1. Readable : (How easy readable your code is how easily other developer can understand your code)
      2. Scalable : (Means as inputs grows how your code is going to perform at that time)
  
 We will talk about first point little later but let us first talk about scalable code and this 
 is where Big O comes into picture it helps us to understand how scalable our code is.
 
 When we talk about scalable code we mainly consider two things Time Complexity  and Space Complexity.

 1.Time Complexity : Given input how much time your function takes to get output.
 2.Space Complexity : Given input how much extra space your function takes to get output.
 */  

 /* Why do we even need things like Big O notation ?
    This is the question which i always had and you will also have if you just started with 
    data structures and algorithems.
   
    So lets understand it by example : 
    const arr = ["microsoft","google","amazon","tcs","wipro","apple","meta"];
    write the function to find google from above arr.
 */
    const arr = ["microsoft","google","amazon","tcs","wipro","apple","meta"];
    const findGoogle = (arr) => {
      for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] === 'google'){
          console.log("FINALLY GOOGLE FOUND");
        }
      }
    }

/* Suppose you and your friend both comes up with above solution and you both were fighting whos code
   is better because in your computer this code takes 0.1 ms to run where in your friend code it takes
   0.2 does that mean you won. (Nope) and this approch of checking how scalable your code is won't work
   becuase it will be little fast if your cpu and memory are good and will be slow if your cpu and memory
   are bad and that's why we need some standard why to check how scalable our code is because in production
   our code is going to be run on 100s of different devices and we need some standard ways to check how
   our code performs when inputs grows.
*/   

// In js you can check how much time your function taking to give the output by using performance.now() see below example
  
  const printArr = (arr) => {
    const t0 = performance.now();
    for(let i = 0 ; i < arr.length ; i++){
      console.log(arr[i]);
    }
    const t1 = performance.now();
    console.log("time taken by function ",t1-t0); // time taken by function  4.747016999870539(My slow system)
  }

  printArr(arr);

  //DailyPrep/UdemyCourse/BigoNotation/Big-O Complexity Chart.jpeg see the different big o notation here for referance

 
/* Lets learn our firt big o which is O(n) => Linear time.
   So we have one function which is findGoogle() and big o for that function is going to be O(n) and we have another
   function printArr() and big o for that function also will be O(n) now big question comes in mide WHY ?

   So if you look into both function in both number of operations will grow as much as input grows ex:
   // If input has 10 items then number of operation we need to perform in both functions are going to be 10.
   // If input has 100 items then number of operation we need to perform in both functions are going to be 100.
   // If input has 1000 items then number of operation we need to perform in both functions are going to be 1000.
   // If input has 10000 items then number of operation we need to perform in both functions are going to be 10000.
   // If input has 100000 items then number of operation we need to perform in both functions are going to be 100000.

   Note : here input stands for number of items in arr and output stands for how many times loop will be executed.(opretions)

  So we can see as number of operations are incresing in linear time as our input grows and that's why time complexity is O(n).

  Also one thing we need to remember that when it comes to time complextity we always care about the worst case like in
  case of findGoogle() function there might be chance that we find google in first operation or may be in somewhere in middle
  but in big o when always thing about worst case so here worst case is like finding google at last place. 
  (Will learn about four rules fo big o)
*/
//example for O(1)
function getFirstItem(arr){
  console.log("first", arr[0]);
}
function getFirstAndSecondItem(arr){
  console.log("first", arr[0]);
  console.log("second", arr[1]);
}
/*
O(1) => Constant time
So we have one function getFirstItem() in which we are passing arr as input and printing first item from array now 
we can see not matter how big input is going to be but that function is going to perfrom only one operation like
getting first index of array. So in that case time complexcity will be O(1). This is the best time complexcity you
can have for any function. 
*/

// Lets do some exerices to practice above big o.

// 1. Find Big O for below example  (Initially we will count each operation like from line 1 to end)
function funChallenge(input) {
  let a = 10;  // O(1) single operation
  a = 50 + 3;  // O(1) single operation

  for (let i = 0; i < input.length; i++) { // O(n) as its loop and will be looping as much as lengh of input. So its linear time (see line 66 to 71) to understand
    anotherFunction(); 
    let stranger = true;
    a++;
  }
  return a; // O(1) single operation
}

// Total time complexity for funChallenge O(1) + O(1) + O(n) + O(1) => O(n) + 3 // this many operation this function needs to do

// (NOTE : Time complexity for funChallenge is simple word is O(n) but we will learn about few rules soon so for now O(n) + 3)

// 2. Find Big O for below example
function anotherFunChallenge(input) {
  let a = 5; // O(1) single operation
  let b = 10; // O(1) single operation
  let c = 50; // O(1) single operation
  for (let i = 0; i < input; i++) { // O(n) Linear time 
    let x = i + 1;
    let y = i + 2;
    let z = i + 3;

  }
  for (let j = 0; j < input; j++) { // O(n) Linear time 
    let p = j * 2;
    let q = j * 2;
  }
  let whoAmI = "I don't know"; // O(1) single operation
}

// Total time complexity for anotherFunChallenge O(1) + O(1) + O(1) + O(n) + O(n) + O(1) => O(2n) + 4 // this many operation this function needs to do
// (NOTE : Time complexity for anotherFunChallenge is simple word is O(n) but we will learn about few rules soon so for now O(2n) + 4)

/*
Simplifying  Big O : So in interviews most of the time big o for any function will be any of notation that you see in 
Big-o Comlexity chart.jpeg. So how can we convert above big o to the big o that we are able to see in chart.
So there are basically 4 rules that we need to learn when its come to finding big o for any function. And those four rules
are as below. We will see all these with atleast one example.

1. Worst case
2. Remove Constants
3. Different terms for input
4. Drop non Dominants
*/

// 1. Worst case : Always thing above the worst case like who much slower our function be when input grows.
//                 this is the simplest rule and will be getting good understanding by example.

const caseArr = ["good","best","worst","ok","better","cool"];

function findWorst(arr){
  if(arr[i] === 'worst'){
    console.log("worst found");
    return; // we are returning from here as soon as we find  worst this function will be terminated
  }
}

/* Now in above example you see that we are able to find worst word at second position and only after 3
  operation but according to first rule we always need to thing about worst case in here worst case 
  could be getting worst at last position or did't found worst in entire arr in both case oprations will
  be O(n) and that's why big o for above function will be O(n). */

/* 2. Remove constant :  This can be best understand buy funChallenge example suppose the input that we 
    are passing into this function has length of 1 million does opearation at line number 1 and 2 will
    be countable like those operation won't have significant impect and that's why we can remove this
    constant and simplify big o with O(n). */

  // Example for Remove constant

  function doSomething(arr){
    console.log("doing"); // O(1)
    for(let i=0 ; i <arr.length ; i++){ //O(n)
      console.log("useless")
    }
    for(let i=0 ; i < 100 ; i++){ // THIS ONE IS INTRESTING EVEN YOU SEE HERE LOOP ITS NOT O(N)
      console.log("hi")           // BECAUSE EVEN IF ARR GROWS TO MILLION THIS WILL BE CALLED ONLY
    }                             // 1OO TIMES. O(100)
  }

 // BIG O => O(1) + O(n) + O(100) => O(n) + 101 => remove constant => O(n) // finally 

 // At last getFirstAndSecondItem() in this function also big o will be O(1) => constant time becasue
 // no matter how big input gets operation always will be 2. So in simple word we don't need to write
 // O(2), O(200),O(2000) for constant time and don't need to look into every time we can simplify that
 // with O(1) (CONSTANT TIME)

 /*
  3. Different terms for input : This one is most important and this is the place where we make most mistake
     in simple word remeber that even inside function you have 5 loops but if all of them are looping through
     the same input then big o still will be O(n). But if you have two loops in function and both are using 
     different input then big won't be O(n) but it will be O(n+m). Lets see example for both
 */

  // Example of different loop with same input.
   function sameInput(arr){
    for(let i=0 ; i<arr.length ; i++){ // O(n)
      console.log("do something")
    }
    for(let i=0 ; i<arr.length ; i++){ // O(n)
      console.log("do nothing")
    }
   }
   // Big o will be => O(2n) => remove constant rule => O(n)

  // Example of different loop with different input.
  function diffInput(arr,arr2){
    for(let i=0 ; i<arr.length ; i++){ // O(n)
      console.log("do something")
    }
    for(let i=0 ; i<arr2.length ; i++){ // O(m)
      console.log("do nothing")
    }
   }
  // Big o will be => O(m+n) => can't do O(n) becasue but input are different and one can be size of 100 and other can be million.


 /*
   4. Drop the non dominants : easiest one to understand and lets directly understand it by example of doSomething() // line 174
      in that function we said big o will be O(n) why because if you see that second loop with 100 operation and first
      line of console.log() these two operation are not significant if we have large input to deal with and in these
      cases we always remove not dominants and simplify our big o with O(n) in that example.

      So if you have big o like => 3+1500+O(n)+8 => in this case we can remove non dominants and simplify with O(n).
 */

 // So these are the basic four rules which we should always keep in mind when we are talking about big o.
 
 
 /*
   3. O(n^2) => Quadratic time 
      This we will see mainly when we have nested loop and this is the horriable big o can be for any function.
      In most of interviews we will comes with this kind of solution and then we need to improve it to O(n)
      or O(nlogn).Best example of this is log all pairs of arr. 
      input vs operatation grows
      for 2 input number of operations will be 2*2 => 4
      for 3 input number of operations will be 3*3 => 9
      for 4 input number of operations will be 4*4 => 16 
      for n input number of operations will be n*n => (N^2)
 */

// example for O(n^2) => Quadratic time 
const alpha = ['A','B','C','D','E','F'];
function printAllPairs(arr){
for(let i=0 ; i < arr.length ; i++){
  for(let j=0 ; j < arr.length ; j++){
     console.log(arr[i],arr[j]);
  }
}
}
printAllPairs(alpha);

// Also make sure if we have different inputs then big o will be O(n*m). in short above 4 rules applies to
// all the big o that we have in chart. 

//IF YOU ARE HERE THEN REFER BIGO-cheat-sheet.pdf atleast once.

/*
  O(n!) : this one we are never going to in counter in any problem if we do means we are doing something wrong
   this is the type of big o where you are adding nested loop for each item.
*/

/*
  Space complexity : Till now when you were talking about good code we were talking about how readable code
  is and how scaleable code and in case of code scaleablity we were only talking about code speed like time 
  complexcity but there is one more thing which contains importent part in big o which is space complexity.
  SPACE COMPLEXITY IS FAIRLY SIMPLE THEN TIME COMPLEXITY.

  And space complexity simply means how much extra space your function talking to produce the output and
  make sure when we say extra space we don't count the space taken by input because we don't have control
  over them. We only count space that is taken by function to generate the output.

  IN MOST OF THE INTERVIEWS WE WILL HAVE SITUATION WHERE YOU HAVE TO TRADE OFF BETWEEN SPACE AND TIME
  AND THAT IS MOST IMPORTANT PART OF THIS COURSE. THIS IS SOMETHING WE NEED TO LEARN WHEN TO DO THOSE
  TRADE OFF.
*/

// Example of space complexity

function printBoooo(arr){
  for(let i=0; i<arr.length ;i++){
    console.log("boooo!");
  }
}
printBoooo(arr);

// So in printBoooo() function only space that we are using aprt from input space is initializing i variable
// so space complexity for this function will be O(1).

// Another example for space complexity

function arrayOfHi(number){
  const arr = [];
  for(let i=0; i<number ;i++){
      arr[i] = 'hi'
  }
  return arr
}

arrayOfHi(50);

// So in arrayOfHi function we are taking extra arr and storing values into that array not space complexity
// for this function will be O(n+1) => remove constant/drop non-dominent => O(n). So this is how simple space complexcity is.
