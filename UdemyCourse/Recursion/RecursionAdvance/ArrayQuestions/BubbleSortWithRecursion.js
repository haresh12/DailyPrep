
function bubbleSortIterative(arr){
 for(let i = 0 ; i < arr.length - 1 ; i++){
   for(let j = i+1 ; j < arr.length ; j++){
      if(arr[j] < arr[i]){
        swap(arr,i,j);
      }
   }
 }
 return arr
}
//GOOD JOB : Thanks sai 
function bubbleSortRecursive(arr,r,c){
 // BY MISTAKE I WROTE THIS CONDITION r < arr.length -1 and this way it will be called only once and return same arr 
 if(r === arr.length - 1) return arr; // MAKE SURE ALWAYS MEANS ALWAYS DOUBLE CHECK THE CONDITION
 if(arr[c] < arr[r]){
  swap(arr,r,c)
 }
 if(c === arr.length){
   r++;
   c=r+1; // it will always start one point ahead them colon
 }else{
  c=c+1;
 }
 return bubbleSortRecursive(arr,r,c);
}
let i = 0;
let j = 1;
console.log(bubbleSortRecursive([1,41,2,3,6,5,7,2],i,i+1))
function swap(arr,i,j){
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
// console.log(bubbleSortIterative([1,41,2,3,6,5,7,2]))