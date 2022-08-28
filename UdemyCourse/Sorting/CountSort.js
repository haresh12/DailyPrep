  /*
     This one is hardest sorting algorithem we have till now so were do we use it.
     So basically we use count sort when you have large input but values inside that
     array are in range like you have array of 5 lac values but range of those value
     is between 0 to 300 so here even we have 5 lac values but still range is between 
     0 to 300 now with this kind of input we will use count sort.

     Step : 1 scan the entire array and find min and max
     Step : 2 create frequency array but of what range. So suppose we got min 1 and max 10
     that means we could possibly have 10 different values like 1 2 3 4 ... 10. so we need
     to create array of size 10 . Simple formula Max - Min + 1 always create frequency array
     of this size.
    
     And understand frequncy array is used to see how many time each number we have in array
     like how many 1s 2s and ... 10s we have.


     Step : 3 prefix sum what that even it means ? so basically so basically suppose
     after step two we came to know that we have 1 three times 2 three time and 3 three
     times so basically array would be like
     1 1 1 2 2 2 3 3 3 (value) values are 9 index till 8
     0 1 2 3 4 5 6 7 8 (index)

     so prefix sum for array 1 2 3 will be
                             2 5 8 means from 0 to 2 index will have 1 from 3 to 5 will have
                             2 and from 6 to 8 will have 3 values
                             
    Step : 4 traves array from the end to start and put values at right positions using prefix
           array.
           
           suppose you have last value 3 so you know that from prefix that last will be be at
           position 8 so put there and then decrease the value of 3 in prefix array like previous
           3 should be at index 8 and we put that there so mow if we get new 3 in array then it
           should be at index 7 and so on.
   
    ONLY REASON WE ARE DOING THIS 4TH STEP TO BECAUSE COUNT SORT ALSO WANTED TO BE STABLE SORT
    AHH REALLY.
    
    THIS IS REALLY TRICKY ONE SO DO AS MANY AS TIMES YOU CAN
  */


  function countSort(arr){
   // step first find min max and range
   let min = Number.MAX_SAFE_INTEGER;
   let max = Number.MIN_SAFE_INTEGER;
   for(let i = 0 ; i < arr.length ; i++){
    if(arr[i] < min){
      min=arr[i];
    }
    if(arr[i] > max){
      max=arr[i];
    }
   }
   let range = max - min + 1; // this will be the length of range array
   let rangeArr = new Array(range).fill(0); // will fill the array with initial value 0;
   //Step 2
   for(let i = 0 ; i < arr.length ; i++){
     let idx = arr[i] - min
     rangeArr[idx]++;
   }
   let ans = [];
   //step 3 prefix sum arr 
   for(let i = 1 ; i < rangeArr.length ; i++){
     rangeArr[i] = rangeArr[i] + rangeArr[i-1]; // Now here you got position not index
   }
   // step 4 last reverse travers (Make sure you understand last step)
   for(let i = arr.length - 1; i >= 0 ; i--){
      let val = arr[i];
      let pos = rangeArr[val - min];
      let idx = pos - 1;  // to have index based
      ans[idx]=val;
     rangeArr[val-min]--;
   }
   return ans;
  }


  console.log(countSort([9,6,3,5,3,4,3,9,6,4,6,5,8,9,9]))