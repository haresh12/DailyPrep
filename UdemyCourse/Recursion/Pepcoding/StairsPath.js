/*
  In this program we have given stairs path and we need to reach from top to bottom and we can 
  take three steps either 1 or 2 or 3 so we need to find different options or path that can lead
  us to ground :

  Example  n = 3 =>> path [111,12,21,3]

*/
// IMPORTENT THING TO UNDERSTAND SEE THIS WILL WORK PERFECT WITH SMALL INPUT BUT LARGE INPUT LIKE
// 44 IT WILL GO TO ENDLESS LOOP AND THIS IS THE KIND OF PROBLEM WHERE WE NEED DYNAMIC PROGRAMING 
// IN OUR LIFE
// PERFECT JOB
function getStairPath(n,arr,path){
if(n === 0){
 arr.push(path)
 return arr 
}
 if(n > 0){
  arr = getStairPath(n-1,arr,path+'1');
 }
 if(n > 1){
  arr= getStairPath(n-2,arr,path+'2');
 }
 if(n > 2){
 arr = getStairPath(n-3,arr,path+'3');
 }
return arr;
}

function getStairPathCount(n,count){
 console.log(n,count) 
 if(n === 0){
  count++;
  return count 
 } 
 if(n > 0){
  count = getStairPathCount(n-1,count);
 }
 if(n > 1){
  count= getStairPathCount(n-2,count);
 }
 if(n > 2){
  count = getStairPathCount(n-3,count);
 }
 return count 
}
console.log(getStairPathCount(30,0))