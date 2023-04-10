/*
  Introduction to Sliding Window Pattern : 

  In many problems dealing with an array (or a LinkedList), we are asked to find or calculate something among all the subarrays (or sublists)
  of a given size. For example, take a look at this problem:

  Given an array, find the average of each subarray of ‘K’ contiguous elements in it.

  Ex : Array: [1, 3, 2, 6, -1, 4, 1, 8, 2], K=5

  First subarray means continues array so first just write down how many different subarray we have possible.

  [1,3,2,6,-1]
  [3,2,6,-1,4]
  [2,6,-1,4,1]
  [6,-1,4,1,8]
  [-1,4,1,8,2]
  [4,1,8,2] (OMG WE HAVE ONLY FOUR ELEMENTS LEFT THAT MEANS THIS ONE IS INVALID ONE SO ALL ABOVE 5 SUB ARRAY ARE POSSIBLE)
*/

/*
  This is the brute force solution and one think to learn here is that when you see nested loop then don't directly say that 
  time complexity of it is o(n^2) understand here see inner loop will always runs k times also there are the case when we have
  have two different input array in that case also time complexity is not o(^2) so learn this thing today don't be in hurry.

  Here time complexity is O(N*K); (AND WE WILL USE SLIDING WINDOW PATTERN TO IMPROVE THIS)

*/
function findAvgBR(arr,k){
 if(!arr || arr.length < k) return -1
  let output = [];
 // Try on pan and paper you will understand why + 1 in loop
 for(let i = 0 ; i < arr.length - k + 1  ; i++){
  let sum = 0;
   for(let j = i ; j < i + k ; j++){
      sum+=arr[j];
   }
   output.push(sum/k)
 }
 return output;
}

console.log(findAvgBR([1, 3, 2, 6, -1, 4, 1, 8, 2],5));

/*
  Optimal solution with o(N) as per leetcode we need to find max avg so lets do accordingly
*/

function findMaxAverage(nums, k) {
    let windowStart = 0;
    let sum  = 0;
    let max = Number.MIN_SAFE_INTEGER
    for(let i = 0 ; i < nums.length ; i++){
        sum+= nums[i];
        if(i >= k -1){
        let avg = sum/k; // made mistake here with sum=sum/k;
        if(avg > max){
           max = avg;
        }
        sum-=nums[windowStart];
        windowStart+=1;
       }
    }  
    return max;
   };

   console.log(findMaxAverage([1, 3, 2, 6, -1, 4, 1, 8, 2],5));

   
