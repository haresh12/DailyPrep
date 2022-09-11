/*
   See finding recursive solution will be much easier if you understand conditions well
   and MAKE SURE ATLEAST FOR ALL THE RECURSIVE CODE NO MATTER HOW CONFIDENT YOU ARE ALWAYS
   GO WITH CODE TWICE
*/
function selectionSortIterative(arr){
 for(let i = 0 ; i < arr.length -1 ; i++){
   let min = i;
   for(let j = i+1 ; j < arr.length ; j++){
    // SEE NOT FIRST NOT SECOND NOT THIRD ALMOST 15TH TIME BECAUSE OF ONLY ONE CONDITION WE 
    // WERE NOT ABLE TO SOLVE THE PROBLEM
    // HERE I WAS USING arr[i] > arr[j] man arr[i] will be always same you need to compare with arr[min]
       if(arr[min] > arr[j]){
          min = j;
       }
   }
   console.log(arr[min])
   swap(arr,i,min)
 }
 return arr
}


function selectionSortRecursive(arr,r,c,min){
 if(r === arr.length -1) return arr;
 if(c === arr.length){
   swap(arr,r,min); // you see here we don't always do swap its only at last step of c
   r++;
   min = r; // who will change this man you forgot this
   c=r+1; // c will be always one step ahead of r and thats how you will compare two value
 }else{
  if(arr[min] > arr[c]){
    min = c;
   }
   c++; // in all cases c will be increase
 }
 return selectionSortRecursive(arr,r,c,min)
}

 function swap(arr,i,j){
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
const arr = [3,1,8,6,5,2,11,23,4,61,22,56,11,19];
// console.log(selectionSortIterative(arr))

let r = 0;
let c = r+1;
let min = r;
console.log(selectionSortRecursive(arr,r,c,min))
